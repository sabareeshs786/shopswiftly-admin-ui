import { TableBody } from '@mui/material';
import React, { useContext } from 'react'
import rows from '../data/GetBrandData';
import TableContext from '../context/TableContext';

function MyTableBody({tablename}) {
    const {brandColumns, StyledTableCell, StyledTableRow } = useContext(TableContext);
    let columns;
    
    switch(tablename.toLowerCase()){
        case "brands": 
            columns = brandColumns;
            break;
        default:
            columns = brandColumns;
    };

    return (
        <TableBody>
            {rows
                .map((row) => {
                    return (
                        <StyledTableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                            {columns.map((column) => {
                                const value = row[column.id];
                                return (
                                    <StyledTableCell key={column.id} align={column?.align || 'left'}>
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