import React from 'react';
import MyTable from './MyTable';
import { TableContextProvider } from '../context/TableContext';
import { Button } from '@mui/material';
import AddDialog from './AddDialog';

function Brands() {

    const handleClick = () => {

    }
    return (
        <div className='my-container'>
            <h4 className='main-heading'>Brands</h4>
            <AddDialog />
            <br/>
            <br/>
            <TableContextProvider>
                <MyTable tablename={"brands"} colnum={4}/>
            </TableContextProvider>
        </div>
    )
}

export default Brands;