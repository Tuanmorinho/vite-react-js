import * as React from 'react';
import { IPaginationParams } from "./pagination";

export interface ITableState {

}

export interface ITableResponse<T> {
    data: T[];
    pagination: IPaginationParams;
}

export type TOrder = 'asc' | 'desc';

export interface IEnhancedTableProps {
    numSelected: number;
    onRequestSort: (event: React.MouseEvent<unknown>, property: string) => void;
    onSelectedAllClick: (event: React.ChangeEvent<HTMLInputElement>) => void;
    order: TOrder;
    orderBy: string;
    rowCount: number;
}

export interface IEnhancedTableToolbarProps {
    numSelected: number;
}

export interface IHeadCell {
    disablePadding: boolean;
    dataKey: string;
    label: string;
}

export interface IEnhancedTable {
    headCells: IHeadCell[];
}