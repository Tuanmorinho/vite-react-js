import { IInputFieldProps } from "@/models/formFields";
import { FormControl, FormHelperText, InputLabel, OutlinedInput, TextField } from "@mui/material";
import { useController } from "react-hook-form";

export function InputField(props: IInputFieldProps) {

    const { name, control, label, suffixComp, prefixComp, ...inputProps } = props;
    // input props like disable, readonly,....

    const {
        field: { value, onChange, onBlur, ref },
        fieldState: { invalid, error }
    } = useController({
        name,
        control
    });
    
    return (
        <FormControl variant="outlined" margin={'normal'}>
            <InputLabel>{label}</InputLabel>
            <OutlinedInput
                label={label}
                value={value}
                onChange={onChange}
                onBlur={onBlur}
                inputRef={ref}
                error={invalid}
                inputProps={inputProps}
                startAdornment={prefixComp}
                endAdornment={suffixComp}
                fullWidth
            />
            <FormHelperText>{error?.message}</FormHelperText>
        </FormControl>
    )
}