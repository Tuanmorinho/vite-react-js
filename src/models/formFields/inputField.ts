import { InputHTMLAttributes } from "react";
import { Control } from "react-hook-form";

export interface IInputFieldProps extends InputHTMLAttributes<HTMLInputElement> {
    name: string;
    control: Control<any>;
    label?: string;
}