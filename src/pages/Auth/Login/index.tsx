import { Box, Stack, Paper, Typography } from "@mui/material";
import loginImg from '@/assets/images/apps/login/login-img.png';
import { ILoginPayload } from "@/models/auth";
import LoginForm from "./components/LoginForm";
import { useAppSelector } from "@/redux/hooks";
import { selectIsMobile } from "@/features/layoutBreakpoint/layoutBreakpointSlice";
import MainLogo from '@/components/Logo/MainLogo';

export default function LoginPage() {

    const isMobile = useAppSelector(selectIsMobile);

    const initialValues: ILoginPayload = {
        username: 'tuan',
        password: 'Tuandeptrai123#@'
    }

    const handleLoginFormSubmit = (formValues: ILoginPayload) => {

    }

    return (
        <Box sx={{ width: '100%', height: '100vh' }}>
            <Stack direction={'row'} justifyContent={'center'} alignItems={'center'} sx={{ width: '100%', height: '100vh' }}>
                <Paper elevation={6} sx={{ borderRadius: '16px' }}>
                    <Stack direction={'row'} justifyContent={'space-between'} alignItems={'center'} position={'relative'}>
                        {
                            !isMobile && <Box sx={{ backgroundImage: `url(${loginImg})`, width: '360px', height: '100%', backgroundRepeat: 'no-repeat', backgroundSize: 'cover', borderRadius: '16px 0 0 16px', position: 'absolute', top: 0, left: 0, bottom: 0 }}></Box>
                        }
                        <Box ml={!isMobile ? '360px' : 0} >
                            <Stack direction={'column'} justifyContent={'center'} alignItems={'center'} margin={9}>
                                <MainLogo />
                                <Box mt={4}>
                                    <Typography sx={{ fontWeight: 300, fontSize: '30px' }}>
                                        Đăng nhập
                                    </Typography>
                                </Box>
                                <Box mt={3} width={'430px'}>
                                    <LoginForm initialValues={initialValues} onSubmit={handleLoginFormSubmit} />
                                </Box>
                            </Stack>
                        </Box>
                    </Stack>
                </Paper>
            </Stack>
        </Box>
    )
}