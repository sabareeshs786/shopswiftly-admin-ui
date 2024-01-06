import { TableHead, TableRow } from '@mui/material';
import React, { useContext } from 'react'
import TableContext from '../context/TableContext';

function MyTableHeader({tablename}) {
    const { brandColumns, StyledTableCell } = useContext(TableContext);
    let columns;
    
    switch(tablename.toLowerCase()){
        case "brands": 
            columns = brandColumns;
            break;
        default:
            columns = brandColumns;
    };
    return (
        <TableHead>
            <TableRow>
                {columns.map((column) => (
                    <StyledTableCell
                        key={column.id}
                        align={column?.align || 'left'}
                        style={{ minWidth: column.minWidth }}
                    >
                        {column.label}
                    </StyledTableCell>
                ))}
            </TableRow>
        </TableHead>
    )
}

export default MyTableHeader;