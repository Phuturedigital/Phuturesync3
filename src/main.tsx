import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';

// Simpler performance monitoring for production
if (process.env.NODE_ENV === 'production') {
  // Basic performance monitoring
  const reportWebVitals = ({ name, value }: { name: string; value: number }) => {
    console.log(`${name}: ${value}`);
    // Send to analytics service if needed
  };

  // Monitor key metrics
  const observer = new PerformanceObserver((list) => {
    list.getEntries().forEach((entry) => {
      reportWebVitals({
        name: entry.name,
        value: entry.startTime
      });
    });
  });

  observer.observe({ entryTypes: ['paint', 'largest-contentful-paint'] });
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>
);