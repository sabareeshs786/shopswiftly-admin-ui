import { TableBody } from '@mui/material';
import React, { useContext, useEffect, useState } from 'react'
import TableContext from '../context/TableContext';
import useAuth from '../hooks/useAuth';
import axios from 'axios';
import getBrandRows from '../data/GetBrandData';


function MyTableBody({ tablename }) {
    const { brandColumns, StyledTableCell, StyledTableRow } = useContext(TableContext);

    let columns;
    let URL;
    switch (tablename.toLowerCase()) {
        case "brands":
            columns = brandColumns;
            URL = '/brands'
            break;
        default:
            columns = brandColumns;
            URL='/brands'
    };

    const [rows, setRows] = useState(null);
    const { page, pageSize, setPageCount } = useContext(TableContext);
    const auth = useAuth();
    const api = axios.create({
        baseURL: 'http://localhost:3501',
        headers: {
            'Authorization': `Bearer ${auth.auth.accessToken}`,
            'Content-Type': 'application/json',
        },
    });
    
    useEffect(() => {
        const getBrandData = async () => {
            const queryParam = { page, pageSize };
            const response = await api.get(URL, { params: queryParam });
            const rows = getBrandRows(response.data.brands, (page - 1) * pageSize);
            setRows(rows);
            setPageCount(Math.ceil(response.data.totalCount / pageSize));
        };
        getBrandData();
    }, [page, pageSize]);

    return (
        <TableBody>
            {rows && rows
                .map((row) => {
                    return (
                        <StyledTableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                            {columns.map((column) => {
                                const value = row[column.id];
                                return (
                                    <StyledTableCell key={row.id} align={column?.align || 'left'}>
                                        {value}
                                    </StyledTableCell>
                                );
                            })}
                        </StyledTableRow>
                    );
                })}
        </TableBody>
    )
}

export default MyTableBody;