import { useAppSelector } from "@/app/hooks";
import { IEnhancedTable, TOrder } from "@/models/table";
import { Box, Paper, Stack, Table, TableContainer } from "@mui/material";
import { useState } from "react";
import EnhancedTableHead from "./EnhancedTableHead";
import EnhancedTableToolbar from "./EnhancedTableToolbar";

export default function EnhancedTable(props: IEnhancedTable) {

    const { headCells } = props;

    const data = useAppSelector(state => state.counter.value);
    const dataType = typeof data;
    console.log(dataType)

    const [order, setOrder] = useState<TOrder>('asc');
    const [orderBy, setOrderBy] = useState<string>('');
    const [selected, setSelected] = useState<readonly string[]>([]);
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(10);
    const [dense, setDense] = useState(false);


    // const handleSelectAllClick = (event: React.ChangeEvent<HTMLInputElement>) => {
    //     if (event.target.checked) {
    //         const newSelected = data.map((n) => n.id);
    //         setSelected(newSelected);
    //         return;
    //     }
    //     setSelected([]);
    // };

    // const handleRequestSort = (
    //     event: React.MouseEvent<unknown>,
    //     property: keyof Data,
    //   ) => {
    //     const isAsc = orderBy === property && order === 'asc';
    //     setOrder(isAsc ? 'desc' : 'asc');
    //     setOrderBy(property);
    // };


    return (
        <Box sx={{ width: '100%' }}>
            <Paper sx={{ width: '100%' }}>
                <EnhancedTableToolbar numSelected={selected.length} />

                <Stack direction={'row'} justifyContent={'center'} alignItems={'start'} >
                    <Box>
                        hello1
                    </Box>
                    <Box flexGrow={1}>
                        <TableContainer>
                            <Table>
                                {/* <EnhancedTableHead
                                    numSelected={selected.length}
                                    order={order}
                                    orderBy={orderBy}
                                    onSelectedAllClick={handleSelectAllClick}
                                    onRequestSort={handleRequestSort}
                                    rowCount={data.length}
                                /> */}
                            </Table>
                        </TableContainer>
                    </Box>
                    <Box>
                        hello1
                    </Box>
                </Stack>
            </Paper>
        </Box>
    )
}