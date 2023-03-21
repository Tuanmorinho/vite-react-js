import * as React from 'react';
import { IEnhancedTableProps } from "@/models/table/table";

export default function EnhancedTableHead(props: IEnhancedTableProps) {
    const { onSelectedAllClick, order, orderBy, numSelected, rowCount, onRequestSort } = props;

    const createSortHandler = (property: string) => (event: React.MouseEvent<unknown>) => {
        onRequestSort(event, property);
    }

    return (
        <div>
            Hello
        </div>
    )
}