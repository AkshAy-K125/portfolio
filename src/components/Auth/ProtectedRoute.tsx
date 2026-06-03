import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuthGate } from '@/context/AuthGateContext';

interface Props {
  children: React.ReactNode;
  authKey: string;
  password: string;
  destination: string;
  sessionDuration?: number;
}

function checkAuth(authKey: string, sessionDuration: number): boolean {
  const raw = localStorage.getItem(authKey);
  if (!raw) return false;
  try {
    const { timestamp, authenticated } = JSON.parse(raw);
    if (authenticated && Date.now() - timestamp < sessionDuration) return true;
    localStorage.removeItem(authKey);
  } catch {
    localStorage.removeItem(authKey);
  }
  return false;
}

export function ProtectedRoute({
  children,
  authKey,
  password,
  destination,
  sessionDuration = 60 * 60 * 1000,
}: Props) {
  const navigate = useNavigate();
  const { setGate } = useAuthGate();
  const [authed] = useState(() => checkAuth(authKey, sessionDuration));

  useEffect(() => {
    if (!authed) {
      setGate({ destination, password, authKey, sessionDuration });
      navigate('/');
    }
  }, [authed]);

  return authed ? <>{children}</> : null;
}
