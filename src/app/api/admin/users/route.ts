import { NextRequest, NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase';

// GET - Récupérer tous les utilisateurs avec statistiques
export async function GET(request: NextRequest) {
  try {
    // TODO: Vérifier l'authentification admin
    
    const { searchParams } = new URL(request.url);
    const page = parseInt(searchParams.get('page') || '1');
    const limit = parseInt(searchParams.get('limit') || '20');
    const search = searchParams.get('search') || '';
    const status = searchParams.get('status') || 'all'; // all, active, banned
    
    const offset = (page - 1) * limit;

    // Construire la requête
    let query = supabase
      .from('admin_user_stats')
      .select('*');

    // Filtres
    if (search) {
      query = query.or(`email.ilike.%${search}%,username.ilike.%${search}%`);
    }

    if (status === 'banned') {
      query = query.eq('is_banned', true);
    } else if (status === 'active') {
      query = query.eq('is_banned', false);
    }

    // Pagination
    const { data: users, error, count } = await query
      .range(offset, offset + limit - 1)
      .order('created_at', { ascending: false });

    if (error) {
      console.error('Erreur lors de la récupération des utilisateurs:', error);
      return NextResponse.json(
        { error: 'Erreur lors de la récupération des utilisateurs' },
        { status: 500 }
      );
    }

    // Récupérer les sessions récentes pour chaque utilisateur
    const userIds = users?.map(u => u.id) || [];
    const { data: sessions } = await supabase
      .from('user_sessions')
      .select('user_id, ip_address, country, city, created_at')
      .in('user_id', userIds)
      .eq('is_active', true)
      .order('created_at', { ascending: false });

    // Associer les sessions aux utilisateurs
    const usersWithSessions = users?.map(user => ({
      ...user,
      current_session: sessions?.find(s => s.user_id === user.id) || null
    }));

    return NextResponse.json({
      users: usersWithSessions || [],
      pagination: {
        page,
        limit,
        total: count || 0,
        totalPages: Math.ceil((count || 0) / limit)
      }
    });
  } catch (error) {
    console.error('Erreur lors de la récupération des utilisateurs:', error);
    return NextResponse.json(
      { error: 'Erreur interne du serveur' },
      { status: 500 }
    );
  }
}

// PATCH - Mettre à jour un utilisateur (bannir/débannir)
export async function PATCH(request: NextRequest) {
  try {
    // TODO: Vérifier l'authentification admin
    
    const { userId, action, reason } = await request.json();

    if (!userId || !action) {
      return NextResponse.json(
        { error: 'userId et action requis' },
        { status: 400 }
      );
    }

    let updateData: any = {};

    switch (action) {
      case 'ban':
        updateData = { is_banned: true };
        break;
      case 'unban':
        updateData = { is_banned: false };
        break;
      case 'verify_email':
        updateData = { email_verified: true };
        break;
      case 'make_admin':
        updateData = { is_admin: true };
        break;
      case 'remove_admin':
        updateData = { is_admin: false };
        break;
      default:
        return NextResponse.json(
          { error: 'Action non reconnue' },
          { status: 400 }
        );
    }

    const { error } = await supabase
      .from('users')
      .update({
        ...updateData,
        updated_at: new Date().toISOString()
      })
      .eq('id', userId);

    if (error) {
      console.error('Erreur lors de la mise à jour:', error);
      return NextResponse.json(
        { error: 'Erreur lors de la mise à jour' },
        { status: 500 }
      );
    }

    // Créer une notification admin si nécessaire
    if (action === 'ban' && reason) {
      await supabase
        .from('admin_notifications')
        .insert([
          {
            type: 'user_banned',
            title: 'Utilisateur banni',
            message: `Utilisateur banni. Raison: ${reason}`,
            user_id: userId,
            related_id: userId,
            data: { reason, action: 'ban' }
          }
        ]);
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Erreur lors de la mise à jour:', error);
    return NextResponse.json(
      { error: 'Erreur interne du serveur' },
      { status: 500 }
    );
  }
}
