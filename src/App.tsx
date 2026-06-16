import { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import { ThemeProvider } from './context/ThemeProvider';
import { AuthGateProvider } from './context/AuthGateContext';
import { ProtectedRoute } from './components/Auth/ProtectedRoute';

const HomeRoute = lazy(() => import('./routes/HomeRoute'));

const NisrDashboard = lazy(() => import('./components/quotations/nisr'));
const Quote818      = lazy(() => import('./components/quotations/nisr/quotes/818'));
const Quote826      = lazy(() => import('./components/quotations/nisr/quotes/826'));
const Quote837      = lazy(() => import('./components/quotations/nisr/quotes/837'));
const Quote916      = lazy(() => import('./components/quotations/nisr/quotes/916'));
const Quote917      = lazy(() => import('./components/quotations/nisr/quotes/917'));
const Quote1071     = lazy(() => import('./components/quotations/nisr/quotes/1071'));
const Quote1080     = lazy(() => import('./components/quotations/nisr/quotes/1080'));
const Timeline818   = lazy(() => import('./components/quotations/nisr/timeline/818'));
const Timeline826   = lazy(() => import('./components/quotations/nisr/timeline/826'));
const Timeline1080  = lazy(() => import('./components/quotations/nisr/timeline/1080'));
const Report818     = lazy(() => import('./components/quotations/nisr/reports/818'));
const Report1080    = lazy(() => import('./components/quotations/nisr/reports/1080'));

const env = import.meta.env as Record<string, string>;

// Single password + single auth key — one login unlocks all Nisr content.
const NISR_AUTH_KEY = 'nisr_auth';
const NISR_ENV_KEY  = 'VITE_NISR_PASSWORD';

const NISR_ROUTES = [
  { path: 'nisr',              Component: NisrDashboard },
  { path: 'nisr/818',          Component: Quote818      },
  { path: 'nisr/826',          Component: Quote826      },
  { path: 'nisr/837',          Component: Quote837      },
  { path: 'nisr/916',          Component: Quote916      },
  { path: 'nisr/917',          Component: Quote917      },
  { path: 'nisr/1071',         Component: Quote1071     },
  { path: 'nisr/1080',         Component: Quote1080     },
  { path: 'nisr/818/timeline', Component: Timeline818   },
  { path: 'nisr/826/timeline', Component: Timeline826   },
  { path: 'nisr/1080/timeline', Component: Timeline1080  },
  { path: 'nisr/818/report',   Component: Report818     },
  { path: 'nisr/1080/report',  Component: Report1080    },
];

export default function App() {
  return (
    <ThemeProvider>
      <AuthGateProvider>
        <BrowserRouter>
          <Suspense fallback={<div className="min-h-screen bg-bg" aria-hidden />}>
            <Routes>
              <Route path="/" element={<HomeRoute />} />
              <Route path="/quotations" element={<Navigate to="/" replace />} />

              {NISR_ROUTES.map(({ path, Component }) => (
                <Route
                  key={path}
                  path={`/quotations/${path}`}
                  element={
                    <ProtectedRoute
                      authKey={NISR_AUTH_KEY}
                      password={env[NISR_ENV_KEY]}
                      destination={`/quotations/${path}`}
                    >
                      <Component />
                    </ProtectedRoute>
                  }
                />
              ))}
            </Routes>
          </Suspense>
        </BrowserRouter>
      </AuthGateProvider>
    </ThemeProvider>
  );
}
