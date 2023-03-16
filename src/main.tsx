import React from 'react';
import ReactDOM from 'react-dom/client';
import { WrrapedApp } from './App';
import './index.css';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
        <WrrapedApp />
    </React.StrictMode>
);
