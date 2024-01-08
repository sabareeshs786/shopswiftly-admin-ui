import { TableBody } from '@mui/material';
import React, { useContext, useEffect, useState } from 'react'
import TableContext from '../context/TableContext';
import getBrandRows from '../data/GetBrandData';
import useAxiosPrivate from '../hooks/useAxiosPrivate';


function MyTableBody({ tablename }) {
    const { brandColumns, productColumns, StyledTableCell, StyledTableRow } = useContext(TableContext);
    const axiosPrivate = useAxiosPrivate();
    
    let columns;
    let URL;
    switch (tablename.toLowerCase()) {
        case "brands":
            columns = brandColumns;
            URL = '/brands'
            break;
        case "products":
            columns = productColumns;
            URL = '/brands'
            break;
        default:
            columns = brandColumns;
            URL='/brands'
    };

    const [rows, setRows] = useState(null);
    const { page, pageSize, setPageCount, update } = useContext(TableContext);

    useEffect(() => {
        const getData = async () => {
            const queryParam = { page, pageSize };
            const response = await axiosPrivate.get(URL, { params: queryParam });
            const rows = getBrandRows(response.data.brands, (page - 1) * pageSize);
            setRows(rows);
            setPageCount(Math.ceil(response.data.totalCount / pageSize));
        };
        getData();
    }, [page, pageSize, update]);

    return (
        <TableBody>
            {rows && rows
                .map((row, i) => {
                    return (
                        <StyledTableRow hover role="checkbox" tabIndex={-1} key={i}>
                            {columns.map((column, ind) => {
                                const value = row[column.id];
                                return (
                                    <StyledTableCell key={ind} align={column?.align || 'left'}>
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