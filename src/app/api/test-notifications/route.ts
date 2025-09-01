import { NextRequest, NextResponse } from 'next/server';
import { sendTestNotification } from '@/lib/notifications';

// POST - Tester l'envoi de notifications
export async function POST(request: NextRequest) {
  try {
    const { email } = await request.json();

    if (!email) {
      return NextResponse.json(
        { error: 'Email requis' },
        { status: 400 }
      );
    }

    console.log('🧪 [API] Test de notification vers:', email);

    const result = await sendTestNotification(email);

    if (result.success) {
      return NextResponse.json({
        success: true,
        message: 'Email de test envoyé avec succès',
        result
      });
    } else {
      return NextResponse.json({
        success: false,
        error: result.error
      }, { status: 500 });
    }

  } catch (error) {
    console.error('❌ [API] Erreur lors du test de notification:', error);
    return NextResponse.json(
      { error: 'Erreur interne du serveur' },
      { status: 500 }
    );
  }
} 