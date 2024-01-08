import styled from "@emotion/styled";
import { TableCell, TableRow, tableCellClasses } from "@mui/material";
import { createContext, useState } from "react";

const TableContext = createContext({});

export const TableContextProvider = ({children}) => {
    const StyledTableCell = styled(TableCell)({
        [`&.${tableCellClasses.head}`]: {
            backgroundColor: 'rgb(0,0,255, 0.7)',
            color: '#fff',
        },
        [`&.${tableCellClasses.body}`]: {
            fontSize: 14,
        },
    });

    const StyledTableRow = styled(TableRow)({
        '&:nth-of-type(odd)': {
            backgroundColor: 'rgba(0, 0, 0, 0.04)'
        },
        '&:last-child td, &:last-child th': {
            border: 0,
        },
    });

    const brandColumns = [
        { id: 'sno', label: 'Sno', minWidth: 17 },
        { id: 'brand', label: 'Brand', minWidth: 100 },
        {
            id: 'category',
            label: 'Category',
            minWidth: 100,
            format: (value) => value.toLocaleString('en-US'),
        },
        {
            id: 'actions',
            label: 'Actions',
            minWidth: 170,
            format: (value) => value.toLocaleString('en-US'),
        },
    ];
    const [page, setPage] = useState(1);
    const [pageSize, setPageSize] = useState(10);
    const [pageCount, setPageCount] = useState(1);
    const [update, setUpdate] = useState(1);

    const [noteType, setNoteType] = useState('');
    const [message, setMessage] = useState('');
    const [delNotify, setDelNotify] = useState(false);

    const handlePageChange = (e, newPage) => {
        setPage(newPage);
    };

    const handlePageSizeChange = (e, newPageSize) => {
        setPageSize(newPageSize);
    }

    return (
        <TableContext.Provider value={{
            brandColumns, page, StyledTableCell, StyledTableRow, 
            handlePageChange, pageSize, setPageSize, handlePageSizeChange,
            pageCount, setPageCount, update, setUpdate, delNotify, setDelNotify,
            noteType, setNoteType, message, setMessage
        }}>
            {children}
        </TableContext.Provider>
    )
}

export default TableContext;