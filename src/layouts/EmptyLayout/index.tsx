import { Box } from "@mui/material";
import backgroundImg from '@/assets/images/pages/main-bg-img.png';
import { IlayoutProps } from "@/models/common";

export default function EmptyLayout(props: IlayoutProps) {
    return (
        <Box sx={{ backgroundImage: `url(${backgroundImg})`, width: '100%', minHeight: '100vh', backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}>
            <Box sx={{ width: '100%', minHeight: '100vh', backgroundColor: 'rgba(28,150,158,0.1)' }}>
                {props.children}
            </Box>
        </Box>
    );
};
