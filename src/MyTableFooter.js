import React from 'react'
import MyPagination from './MyPagination';
import TableFooter from '@mui/material/TableFooter';
import { TableCell, TableRow } from '@mui/material';
function MyTableFooter({colnum}) {
    return (
        <TableFooter >
            <TableRow>
                <TableCell align='center' colSpan={colnum}>
                    <MyPagination />
                </TableCell>
            </TableRow>
        </TableFooter>
    )
}

export default MyTableFooter;