import { TableBody } from '@mui/material';
import React, { useContext, useEffect, useState } from 'react'
import getBrandRows from '../data/GetBrandData';
import TableContext from '../context/TableContext';
import axios from "axios";
import useAuth from '../hooks/useAuth';


function MyTableBody({ tablename }) {
    const { brandColumns, StyledTableCell, StyledTableRow, page, pageSize } = useContext(TableContext);
    const [brands, setBrands] = useState(null);
    let columns;
    const auth = useAuth();
    const api = axios.create({
        baseURL: 'http://localhost:3501',
        headers: {
            'Authorization': `Bearer ${auth.auth.accessToken}`,
            'Content-Type': 'application/json',
        },
    });

    switch (tablename.toLowerCase()) {
        case "brands":
            columns = brandColumns;
            break;
        default:
            columns = brandColumns;
    };

    useEffect(() => {
        const getBrandData = async () => {
            const queryParam = {page, pageSize};
            const response = await api.get('/brands', {params: queryParam});
            const rows = getBrandRows(response.data, (page - 1) * pageSize);
            setBrands(rows);
        };
        getBrandData();
    }, [page, pageSize])

    return (
        <TableBody>
            {brands && brands
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