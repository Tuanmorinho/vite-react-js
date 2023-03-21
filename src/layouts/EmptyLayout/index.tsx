import { Box } from "@mui/material";
import { Outlet } from "react-router-dom";

import backgroundImg from '@/assets/images/pages/main-bg-img.png';

export default function EmptyLayout() {
    return (
        <Box sx={{ backgroundImage: `url(${backgroundImg})`, width: '100%', minHeight: '100vh', backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}>
            <Box sx={{ width: '100%', minHeight: '100vh', backgroundColor: 'rgba(28,150,158,0.1)' }}>
                <Outlet />
            </Box>
        </Box>
    );
};
