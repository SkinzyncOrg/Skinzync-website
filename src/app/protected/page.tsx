import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

export default function ProtectedPage() {
  const cookieStore = cookies();
  const token = cookieStore.get('jwt')?.value;

  if (!token) {
    redirect('/auth/login');
  }

  return <div>This is a protected page.</div>;
}