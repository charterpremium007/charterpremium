import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import PrivacyPolicy from './pages/PrivacyPolicy.tsx';
import TermsOfService from './pages/TermsOfService.tsx';
import NotFound from './pages/NotFound.tsx';
import CookieBanner from './components/CookieBanner.tsx';
import './index.css';

const path = window.location.pathname;
let Component = App;

if (path === '/privacy' || path === '/privacy-policy') {
  Component = PrivacyPolicy;
} else if (path === '/terms' || path === '/terms-of-service') {
  Component = TermsOfService;
} else if (path !== '/') {
  Component = NotFound;
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Component />
    <CookieBanner />
  </StrictMode>
);
