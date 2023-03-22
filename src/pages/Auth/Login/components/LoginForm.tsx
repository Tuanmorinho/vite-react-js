import { InputField } from "@/components/FormFields";
import { ILoginPayload } from "@/models/auth";
import { yupResolver } from '@hookform/resolvers/yup';
import { Person } from "@mui/icons-material";
import { Box, Button, CircularProgress, Link, Stack } from "@mui/material";
import { PasswordToggleContext } from "contexts";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import { Link as RouterLink } from "react-router-dom";
import * as yup from 'yup';
import SuffixPasswordToggle from "./SuffixPasswordToggle";

export interface ILoginFormProps {
    initialValues?: ILoginPayload;
    onSubmit?: (formValues: ILoginPayload) => void;
}

export default function LoginForm(props: ILoginFormProps) {
    
    const { initialValues, onSubmit } = props;
    const { type } = useContext(PasswordToggleContext);

    const loginSchema = yup.object().shape({
        username: yup
            .string()
            .required('Vui vòng nhập tên đăng nhập'),
        password: yup
            .string()
            .required('Vui vòng nhập mật khẩu')
            // .matches(
            //     /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
            //     '<div>Mật khẩu phải chứa ít nhất<br />&#x2022;8 ký tự<br />&#x2022;1 chữ hoa<br />&#x2022;1 chữ thường<br />&#x2022;1 số<br />&#x2022;1 ký tự đặc biệt</div>'
            // )
    });

    type TFormData = yup.InferType<typeof loginSchema>

    const { 
        control,
        handleSubmit,
        formState: { isSubmitting, isValid }
    } = useForm<TFormData>({
        defaultValues: initialValues,
        // resolver for validation
        resolver: yupResolver(loginSchema)
    })

    const handleFormSubmit = async (formValues: TFormData) => {
        try {
            await onSubmit?.(formValues);
        } catch (error) {
            console.log('Đăng nhập thất bại', error)
        }
    }

    return (
        <Box>
            <form onSubmit={handleSubmit(handleFormSubmit)}>
                <Stack direction={'column'}>
                    <InputField name={'username'} control={control} label={'Tên đăng nhập'} needHelperText={false} />
                    <InputField name={'password'} control={control} label={'Mật khẩu'} type={type} suffixComp={<SuffixPasswordToggle />} needHelperText={false} />
                </Stack>

                <Box mt={3}>
                    <Stack direction={'row'} justifyContent={'space-between'} alignItems={'center'}>
                        <Button type={'submit'} variant={'contained'} size={'medium'} startIcon={ isSubmitting ? <CircularProgress size={16} /> : <Person /> } disabled={isSubmitting || !isValid}>Đăng nhập</Button>
                        <Box sx={{ fontSize: '0.875rem' }}>
                            Quên&ensp;
                            <Link component={RouterLink} to={'/'}>
                                Tên đăng nhập
                            </Link>&ensp;|&ensp;
                            <Link component={RouterLink} to={'/'}>
                                Mật khẩu
                            </Link>
                        </Box>
                    </Stack>
                </Box>
            </form>
        </Box>
    )
}