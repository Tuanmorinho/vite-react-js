import { ReactNode } from "react";

export interface IWrapperWithRoleProps {
    children: ReactNode;
    role: string | string[];
}

export default function WrapperWithRole(props: IWrapperWithRoleProps) {

    const { role, children } = props;

    return (
        <>
            { children }
        </>
    )
}