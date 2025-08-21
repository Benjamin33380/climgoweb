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
  if (!googleApiKey || googleApiKey === 'your-google-api-key-here') {
    console.warn('Google API Key not configured in environment variables. Current value:', googleApiKey);
    return NextResponse.json(
      { error: 'Google API Key not configured. Please set NEXT_PUBLIC_GOOGLE_API_KEY in .env file.' },
      { status: 500 }
    );
  }

  try {
    // Appel à l'API Google Places pour récupérer les détails du lieu avec les avis
    const url = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&fields=name,rating,reviews,user_ratings_total&language=fr&key=${googleApiKey}`;
    
    console.log('🔍 Fetching Google Reviews with Place ID:', placeId);
    console.log('🔍 API Key configured:', googleApiKey ? 'Yes' : 'No');
    
    const response = await fetch(url);
    
    if (!response.ok) {
      console.error('❌ Google API HTTP Error:', response.status, response.statusText);
      throw new Error(`Google API returned ${response.status}: ${response.statusText}`);
    }

    const data = await response.json();
    console.log('📊 Google API Response Status:', data.status);

    if (data.status === 'OK') {
      console.log('✅ Successfully fetched', data.result?.reviews?.length || 0, 'reviews');
      
      // Debug: Log photos de profil pour voir ce qu'on reçoit
      if (data.result?.reviews) {
        data.result.reviews.forEach((review: { author_name: string; profile_photo_url?: string }, index: number) => {
          console.log(`📸 Review ${index + 1} - ${review.author_name}:`);
          console.log(`   Photo URL: ${review.profile_photo_url || 'MANQUANTE'}`);
        });
      }
      
      return NextResponse.json(data);
    } else {
      console.error('❌ Google API Error:', data.status, data.error_message);
      throw new Error(`Google API error: ${data.status} - ${data.error_message || 'Unknown error'}`);
    }
  } catch (error) {
    console.error('💥 Error fetching Google reviews:', error);
    return NextResponse.json(
      { 
        error: 'Failed to fetch reviews from Google',
        details: error instanceof Error ? error.message : 'Unknown error'
      },
      { status: 500 }
    );
  }
}
