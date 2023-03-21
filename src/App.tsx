import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from '@/redux/store';
import { CssBaseline } from '@mui/material';
import { ThemeProvider } from '@emotion/react';
import { theme } from '@/utils/index';

import EmptyLayout from '@/layouts/EmptyLayout';
import AdminLayout from '@/layouts/AdminLayout';
import HomePage from '@/pages/Home';
import LoginPage from '@/pages/Auth/Login';
import NotFoundPage from '@/pages/404';

export function App() {
    return (
        <Routes>
            <Route path="/" element={<EmptyLayout />}>
                <Route path='login' element={<LoginPage />} />
            </Route>

            <Route path="crm" element={<AdminLayout />}>
                <Route path="home" element={<HomePage />} />

                <Route path="" element={<Navigate to="home" />} />
                <Route path="*" element={<Navigate to="home" />} />
            </Route>

            <Route path="*" element={<NotFoundPage />} />
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
