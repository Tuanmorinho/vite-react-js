import { IlayoutProps } from "@/models/common";

export default function AdminLayout(props: IlayoutProps) {

    return (
        <div>
            This is AdminLayout
            {props.children}
        </div>
    );
};
