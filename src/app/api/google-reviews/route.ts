import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const placeId = searchParams.get('placeId');

  // Vérifier si le Place ID est fourni
  if (!placeId) {
    return NextResponse.json(
      { error: 'Place ID is required' },
      { status: 400 }
    );
  }

  // Vérifier si la clé API Google est configurée
  const googleApiKey = process.env.NEXT_PUBLIC_GOOGLE_API_KEY;
  if (!googleApiKey) {
    console.warn('Google API Key not configured in environment variables');
    return NextResponse.json(
      { error: 'Google API Key not configured' },
      { status: 500 }
    );
  }

  try {
    // Appel à l'API Google Places pour récupérer les détails du lieu avec les avis
    const url = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&fields=name,rating,reviews,user_ratings_total&key=${googleApiKey}`;
    
    const response = await fetch(url);
    
    if (!response.ok) {
      throw new Error(`Google API returned ${response.status}`);
    }

    const data = await response.json();

    if (data.status === 'OK') {
      return NextResponse.json(data);
    } else {
      throw new Error(`Google API error: ${data.status} - ${data.error_message || 'Unknown error'}`);
    }
  } catch (error) {
    console.error('Error fetching Google reviews:', error);
    return NextResponse.json(
      { error: 'Failed to fetch reviews from Google' },
      { status: 500 }
    );
  }
}
