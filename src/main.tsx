import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import PiwikPro from '@piwikpro/react-piwik-pro';
import './index.css';
import { App } from './App.tsx';

const { VITE_PIWIK_PRO_ID, VITE_PIWIK_PRO_URL } = import.meta.env;

if (VITE_PIWIK_PRO_ID && VITE_PIWIK_PRO_URL) {
	PiwikPro.initialize(VITE_PIWIK_PRO_ID, VITE_PIWIK_PRO_URL);
}

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<App />
	</StrictMode>
);
