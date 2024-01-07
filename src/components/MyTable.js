import React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableContainer from '@mui/material/TableContainer';
import MyTableHeader from './MyTableHeader';
import MyTableBody from './MyTableBody';
import MyTableFooter from './MyTableFooter';

function MyTable({ tablename, colnum }) {

    return (
        <Paper sx={{ width: 'auto', maxWidth: '100%', overflow: 'hidden' }}>
            <TableContainer sx={{ maxHeight: '100vh' }}>
                <Table stickyHeader aria-label="sticky table">
                    <MyTableHeader tablename={tablename} />
                    <MyTableBody tablename={tablename} />
                    <MyTableFooter colnum={colnum} />
                </Table>
            </TableContainer>
        </Paper>
    );
}

export default MyTable;