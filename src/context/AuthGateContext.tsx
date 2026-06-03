import { createContext, useContext, useState } from 'react';

export interface Gate {
  destination: string;
  password: string;
  authKey: string;
  sessionDuration: number;
}

interface AuthGateContextValue {
  gate: Gate | null;
  setGate: (gate: Gate) => void;
  clearGate: () => void;
}

const AuthGateContext = createContext<AuthGateContextValue>({
  gate: null,
  setGate: () => {},
  clearGate: () => {},
});

export function AuthGateProvider({ children }: { children: React.ReactNode }) {
  const [gate, setGateState] = useState<Gate | null>(null);
  return (
    <AuthGateContext.Provider
      value={{
        gate,
        setGate: (g) => setGateState(g),
        clearGate: () => setGateState(null),
      }}
    >
      {children}
    </AuthGateContext.Provider>
  );
}

export const useAuthGate = () => useContext(AuthGateContext);
