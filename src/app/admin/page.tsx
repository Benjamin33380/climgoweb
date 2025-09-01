import { AdminNav } from '@/components/AdminNav';
import { ProtectedRoute } from '@/components/auth/ProtectedRoute';

export default function Admin() {
  return (
    <ProtectedRoute requireAdmin={true}>
      <AdminNav />
    </ProtectedRoute>
  );
}