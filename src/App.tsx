import { store } from '@/redux/store';
import { theme } from '@/utils/index';
import { ThemeProvider } from '@emotion/react';
import { CssBaseline, useMediaQuery, useTheme } from '@mui/material';
import { Provider } from 'react-redux';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';

import AdminLayout from '@/layouts/AdminLayout';
import EmptyLayout from '@/layouts/EmptyLayout';
import NotFoundPage from '@/pages/404';
import LoginPage from '@/pages/Auth/Login';
import HomePage from '@/pages/Home';
import { useEffect } from 'react';
import { setIsMobile } from './features/layoutBreakpoint/layoutBreakpointSlice';
import { useAppDispatch } from './redux/hooks';

export function App() {

    const dispatch = useAppDispatch();

    const theme = useTheme();
    const isMobile: boolean = useMediaQuery(theme.breakpoints.down("md"));

    useEffect(() => {
        dispatch(setIsMobile(isMobile))
    }, [isMobile])

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
