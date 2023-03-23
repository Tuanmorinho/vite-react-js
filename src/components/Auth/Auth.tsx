import { selectIsLoggedIn } from "@/features/auth/authSlice";
import AdminLayout from "@/layouts/AdminLayout";
import { useAppSelector } from "@/redux/hooks";
import { useLocation, Outlet, Navigate } from "react-router-dom";

export function Auth() {
    const location = useLocation();
    const isLoggedIn = useAppSelector(selectIsLoggedIn);

    return (
        isLoggedIn ? <AdminLayout><Outlet /></AdminLayout> : <Navigate to='/login' state={{ from: location }} replace />
    );
}