import { NextResponse } from 'next/server';
// import { supabase } from '@/lib/supabase';

export async function GET() {
  // TODO: Activer quand Supabase est configuré
  return NextResponse.json({ 
    subscribers: [],
    message: 'Newsletter - À configurer avec Supabase'
  });
}

export async function DELETE(request: Request) {
  // TODO: Activer quand Supabase est configuré
  return NextResponse.json({ 
    message: 'Newsletter - À configurer avec Supabase'
  });
}
