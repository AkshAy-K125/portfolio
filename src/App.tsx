import { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import { ThemeProvider } from './context/ThemeProvider';

import Auth from './components/Auth/Auth';

const HomeRoute = lazy(() => import('./routes/HomeRoute'));
const Nisr = lazy(() => import('./components/quotations/Nisr/Nisr'));
const NisrQuote818 = lazy(() => import('./components/quotations/NisrQuote818/NisrQuote818'));
const NisrQuote818TimeLine = lazy(
  () => import('./components/quotations/NisrQuote818TimeLine/NisrQuote818TimeLine'),
);
const NisrQuote826 = lazy(() => import('./components/quotations/NisrQuote826/NisrQuote826'));
const NisrQuote826TimeLine = lazy(
  () => import('./components/quotations/NisrQuote826TimeLine/NisrQuote826TimeLine'),
);
const NisrQuote837 = lazy(() => import('./components/quotations/NisrQuote837/NisrQuote837'));
const NisrQuote916 = lazy(() => import('./components/quotations/NisrQuote916/NisrQuote916'));
const NisrQuote917 = lazy(() => import('./components/quotations/NisrQuote917/NisrQuote917'));
const NisrQuote818FinalReport = lazy(
  () => import('./components/quotations/NisrQuote818FinalReport/NisrQuote818FinalReport'),
);

const env = import.meta.env;

export default function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
          <Suspense fallback={<div className="min-h-screen bg-bg" aria-hidden />}>
            <Routes>
              <Route path="/" element={<HomeRoute />} />
              <Route path="/quotations" element={<Navigate to="/" replace />} />
              <Route
                path="/quotations/Nisr"
                element={
                  <Auth authKey="nisr_quotation_auth" redirectPath="/" password={env.VITE_NISR_PASSWORD}>
                    <Nisr />
                  </Auth>
                }
              />
              <Route
                path="/quotations/NisrQuote818"
                element={
                  <Auth
                    authKey="nisr_quote_818_auth"
                    redirectPath="/"
                    password={env.VITE_NISR_QUOTE_818_PASSWORD}
                  >
                    <NisrQuote818 />
                  </Auth>
                }
              />
              <Route
                path="/quotations/NisrQuote818TimeLine"
                element={
                  <Auth
                    authKey="nisr_quote_818_timeline_auth"
                    redirectPath="/"
                    password={env.VITE_NISR_QUOTE_818_TIMELINE_PASSWORD}
                  >
                    <NisrQuote818TimeLine />
                  </Auth>
                }
              />
              <Route
                path="/quotations/NisrQuote826"
                element={
                  <Auth
                    authKey="nisr_quote_826_auth"
                    redirectPath="/"
                    password={env.VITE_NISR_QUOTE_826_PASSWORD}
                  >
                    <NisrQuote826 />
                  </Auth>
                }
              />
              <Route
                path="/quotations/NisrQuote826TimeLine"
                element={
                  <Auth
                    authKey="nisr_quote_826_timeline_auth"
                    redirectPath="/"
                    password={env.VITE_NISR_QUOTE_826_TIMELINE_PASSWORD}
                  >
                    <NisrQuote826TimeLine />
                  </Auth>
                }
              />
              <Route
                path="/quotations/NisrQuote837"
                element={
                  <Auth
                    authKey="nisr_quote_837_auth"
                    redirectPath="/"
                    password={env.VITE_NISR_QUOTE_837_PASSWORD}
                  >
                    <NisrQuote837 />
                  </Auth>
                }
              />
              <Route
                path="/quotations/NisrQuote916"
                element={
                  <Auth
                    authKey="nisr_quote_916_auth"
                    redirectPath="/"
                    password={env.VITE_NISR_QUOTE_916_PASSWORD}
                  >
                    <NisrQuote916 />
                  </Auth>
                }
              />
              <Route
                path="/quotations/NisrQuote917"
                element={
                  <Auth
                    authKey="nisr_quote_917_auth"
                    redirectPath="/"
                    password={env.VITE_NISR_QUOTE_917_PASSWORD}
                  >
                    <NisrQuote917 />
                  </Auth>
                }
              />
              <Route
                path="/quotations/NisrQuote818FinalReport"
                element={
                  <Auth
                    authKey="nisr_quote_818_final_report_auth"
                    redirectPath="/"
                    password={env.VITE_NISR_QUOTE_818_FINAL_REPORT_PASSWORD}
                  >
                    <NisrQuote818FinalReport />
                  </Auth>
                }
              />
            </Routes>
          </Suspense>
        </BrowserRouter>
    </ThemeProvider>
  );
}
