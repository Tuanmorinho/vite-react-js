import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import NotFoundPage from './pages/404';
import HomePage from './pages/Home';

export function App() {
    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="*" element={<NotFoundPage />} />
            <Route path="*" element={<Navigate to="/" />} />
        </Routes>
    );
}

export function WrrapedApp() {
    return (
        <BrowserRouter>
            <App />
        </BrowserRouter>
    );
}
