import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
// import { inject } from '@vercel/analytics';

// inject();

// inject({
//   beforeSend: (event) => {
//     if (event.url.includes('/private')) {
//       return null;
//     }
//     return event;
//   },
// });

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);

