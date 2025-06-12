import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.tsx';

// Preline React
import { PrelineProvider } from 'preline-react';

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<PrelineProvider>
			<App />
		</PrelineProvider>
	</StrictMode>
);
