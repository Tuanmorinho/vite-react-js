import { InputField } from "@/components/FormFields";
import { ILoginPayload } from "@/models/auth";
import { Person, Visibility, VisibilityOff } from "@mui/icons-material";
import { Box, Button, IconButton, InputAdornment, Link, Stack } from "@mui/material";
import { PasswordToggleContext } from "contexts";
import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { Link as RouterLink } from "react-router-dom";

function SuffixPasswordToggle() {

    const { toggleType } = useContext(PasswordToggleContext);
    const [showPassword, setShowPassword] = useState<boolean>(false);

    const handleClickShowPassword = () => { 
        setShowPassword((show) => !show);
        if(toggleType) toggleType();
    }

    const handleMouseDownPassword = (
        event: React.MouseEvent<HTMLButtonElement>
    ) => {
        event.preventDefault();
    };

    return (
        <InputAdornment position="end">
            <IconButton
                onClick={handleClickShowPassword}
                onMouseDown={handleMouseDownPassword}
            >
            {showPassword ? <VisibilityOff /> : <Visibility />}
            </IconButton>
        </InputAdornment>
    )
}

export interface ILoginFormProps {
    initialValues?: ILoginPayload;
    onSubmit?: (formValues: ILoginPayload) => void;
}

export default function LoginForm(props: ILoginFormProps) {
    
    const { initialValues, onSubmit } = props;
    const { type } = useContext(PasswordToggleContext);

    const { 
        control,
        handleSubmit
    } = useForm<ILoginPayload>({
        defaultValues: initialValues,
        // resolver for validation
        // resolver: 
    })

    const handleFormSubmit = (formValues: ILoginPayload) => {
        console.log(formValues);
    }

    return (
        <Box>
            <form onSubmit={handleSubmit(handleFormSubmit)}>
                <Stack direction={'column'}>
                    <InputField name={'username'} control={control} label={'Tên đăng nhập'} />
                    <InputField name={'password'} control={control} label={'Mật khẩu'} type={type} suffixComp={<SuffixPasswordToggle />} />
                </Stack>

                <Box mt={3}>
                    <Stack direction={'row'} justifyContent={'space-between'} alignItems={'center'}>
                        <Button type={'submit'} variant={'contained'} size={'medium'} startIcon={<Person />}>Đăng nhập</Button>
                        <Box>
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