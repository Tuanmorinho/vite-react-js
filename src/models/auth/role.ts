import { ReactNode } from "react";

export interface IWrapperWithRoleProps {
    children: ReactNode;
    role: string | string[];
}