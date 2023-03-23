import { store, history } from '@/redux/store';
import { theme } from '@/utils/index';
import { ThemeProvider } from '@emotion/react';
import { CssBaseline, useMediaQuery, useTheme } from '@mui/material';
import { Provider } from 'react-redux';
import { Navigate, Route, Routes } from 'react-router-dom';
import { HistoryRouter } from "redux-first-history/rr6";

import AdminLayout from '@/layouts/AdminLayout';
import EmptyLayout from '@/layouts/EmptyLayout';
import NotFoundPage from '@/pages/404';
import LoginPage from '@/pages/Auth/Login';
import HomePage from '@/pages/Home';
import { useEffect } from 'react';
import { setIsMobile } from './features/layoutBreakpoint/layoutBreakpointSlice';
import { useAppDispatch } from './redux/hooks';
import { Auth } from './components/Auth';

export function App() {

    const dispatch = useAppDispatch();

    const theme = useTheme();
    const isMobile: boolean = useMediaQuery(theme.breakpoints.down("md"));

    useEffect(() => {
        dispatch(setIsMobile(isMobile))
    }, [isMobile])

    return (
        <Routes>
            <Route path='login' element={<LoginPage />} />
            
            <Route path="crm" element={<Auth />}>
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
                <HistoryRouter history={history}>
                    <CssBaseline />
                    <App />
                </HistoryRouter>
            </ThemeProvider>
        </Provider>
    );
}
