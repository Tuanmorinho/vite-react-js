import customerApi from "@/api/customerApi";
import EnhancedTable from "@/components/Table/EnhancedTable";
import { authAction } from "@/features/auth/authSlice";
import { IHeadCell } from "@/models/table/table";
import { Button } from "@mui/material";
import { useEffect } from "react";

const headCells: IHeadCell[] = [
    {
        disablePadding: false,
        dataKey: 'hello1',
        label: 'hello1',
    },
    {
        disablePadding: false,
        dataKey: 'hello2',
        label: 'hello2',
    },
]

export default function HomePage() {

    // useEffect(() => {
    //     customerApi.getAll().then((res) => console.log(res))
    // }, []);

    return (
        <div>
            <h1>Home Page</h1>
            {/* <Button onClick={handleLogout}>Logout</Button>
            <div>{JSON.stringify(user)}</div>
            <EnhancedTable headCells={headCells} /> */}
        </div>
    );
};
