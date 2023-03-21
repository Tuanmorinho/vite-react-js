import { InputField } from "@/components/FormFields";
import { ILoginPayload } from "@/models/auth";
import { Person } from "@mui/icons-material";
import { Box, Button } from "@mui/material";
import { useForm } from "react-hook-form";

export interface ILoginFormProps {
    initialValues?: ILoginPayload;
    onSubmit?: (formValues: ILoginPayload) => void;
}

export default function LoginForm(props: ILoginFormProps) {
    
    const { initialValues, onSubmit } = props;

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
                <InputField name={'username'} control={control} label={'Tên đăng nhập'} />
                <InputField name={'password'} control={control} label={'Mật khẩu'} type={'password'} />

                <Box mt={3}>
                    <Button type={'submit'} variant={'contained'} size={'medium'} startIcon={<Person />}>Đăng nhập</Button>
                </Box>
            </form>
        </Box>
    )
}