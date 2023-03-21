import { Box, Stack, Paper, Typography } from "@mui/material";
import loginImg from '@/assets/images/apps/login/login-img.png';
import { ILoginPayload } from "@/models/auth";
import LoginForm from "./components/LoginForm";

export default function LoginPage() {

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
                    <Stack direction={'row'} justifyContent={'space-between'} alignItems={'center'}>
                        <Box sx={{ backgroundImage: `url(${loginImg})`, width: '354px', height: '463px', backgroundRepeat: 'no-repeat', backgroundSize: 'cover', borderRadius: '16px 0 0 16px' }}></Box>
                        <Box>
                            <Stack direction={'column'} justifyContent={'center'} alignItems={'center'} margin={8}>
                                <Box>
                                    <Typography sx={{ fontWeight: 300, fontSize: '30px' }}>
                                        Đăng nhập
                                    </Typography>
                                </Box>
                                <Box mt={4}>
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