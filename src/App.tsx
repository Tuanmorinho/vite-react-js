import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from '@/app/store';
import NotFoundPage from './pages/404';
import HomePage from './pages/Home';
import { CssBaseline } from '@mui/material';
import { ThemeProvider } from '@emotion/react';
import { theme } from '@/utils/index';

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
        <Provider store={store}>
            <ThemeProvider theme={theme}>    
                <BrowserRouter>
                    <CssBaseline />
                    <App />
                </BrowserRouter>
            </ThemeProvider>
        </Provider>
    );
}
