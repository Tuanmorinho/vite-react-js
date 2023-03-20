import { IEnhancedTableToolbarProps } from "@/models/table";

export default function EnhancedTableToolbar(props: IEnhancedTableToolbarProps) {
    const { numSelected } = props;

    return (
        <div>
            Toolbar hiển thị số dòng đã chọn và các option khác
        </div>
    )
}