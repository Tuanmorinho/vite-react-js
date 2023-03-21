import { IInputFieldProps } from "@/models/formFields";
import { TextField } from "@mui/material";
import { useController } from "react-hook-form";

export function InputField(props: IInputFieldProps) {

    const { name, control, label, ...inputProps } = props;
    // input props like disable, readonly,....

    const {
        field: { value, onChange, onBlur, ref },
        fieldState: { invalid, error }
    } = useController({
        name,
        control
    });
    
    return (
        <TextField
            label={label}
            value={value}
            onChange={onChange} 
            onBlur={onBlur}
            inputRef={ref}
            error={invalid}
            helperText={error?.message}
            inputProps={inputProps}
            fullWidth 
            margin={'normal'} 
            variant={'outlined'}
        />
    )
}