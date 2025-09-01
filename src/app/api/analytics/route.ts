import { NextResponse } from 'next/server';

// Clé API Google Analytics (privée, côté serveur)
const GA_API_KEY = process.env.GA_API_KEY;
const GA_PROPERTY_ID = process.env.GA_PROPERTY_ID; // Format: 123456789 ou properties/123456789

export async function GET() {
  try {
    if (!GA_API_KEY || !GA_PROPERTY_ID) {
      return NextResponse.json(
        { error: 'Configuration Google Analytics manquante' },
        { status: 500 }
      );
    }

    // Formater le Property ID correctement
    const formattedPropertyId = GA_PROPERTY_ID.startsWith('properties/') 
      ? GA_PROPERTY_ID 
      : `properties/${GA_PROPERTY_ID}`;

    // Récupérer les données des 30 derniers jours
    const endDate = new Date();
    const startDate = new Date();
    startDate.setDate(startDate.getDate() - 30);

    const dateRange = {
      startDate: startDate.toISOString().split('T')[0],
      endDate: endDate.toISOString().split('T')[0]
    };

    // Métriques à récupérer
    const metrics = [
      'screenPageViews',           // Vues totales
      'averageSessionDuration',    // Temps de session moyen
      'bounceRate'                // Taux de rebond
    ];

    // Construire l'URL de l'API Google Analytics
    const url = `https://analyticsdata.googleapis.com/v1beta/${formattedPropertyId}:runReport`;
    
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${GA_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        dateRanges: [dateRange],
        metrics: metrics.map(metric => ({ name: metric })),
        dimensions: [{ name: 'date' }],
        orderBys: [{ dimension: { name: 'date' } }]
      })
    });

    if (!response.ok) {
      throw new Error(`Erreur Google Analytics API: ${response.status}`);
    }

    const data = await response.json();
    
    // Traiter les données
    const result = {
      totalViews: 0,
      avgSessionDuration: 0,
      bounceRate: 0,
      dateRange
    };

    if (data.rows && data.rows.length > 0) {
      // Calculer les totaux  
      data.rows.forEach((row: any) => { // eslint-disable-line @typescript-eslint/no-explicit-any
        result.totalViews += parseInt(row.metricValues[0].value) || 0;
        result.avgSessionDuration += parseFloat(row.metricValues[1].value) || 0;
        result.bounceRate += parseFloat(row.metricValues[2].value) || 0;
      });

      // Calculer les moyennes
      const rowCount = data.rows.length;
      result.avgSessionDuration = Math.round(result.avgSessionDuration / rowCount);
      result.bounceRate = Math.round((result.bounceRate / rowCount) * 100) / 100;
    }

    return NextResponse.json(result);

  } catch (error) {
    console.error('Erreur lors de la récupération des analytics:', error);
    return NextResponse.json(
      { error: 'Erreur lors de la récupération des données' },
      { status: 500 }
    );
  }
} 