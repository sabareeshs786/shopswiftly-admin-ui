import React from 'react';
import MyTable from './MyTable';
import { TableContextProvider } from '../context/TableContext';
import AddDialog from './AddDialog';

function Brands() {
    return (
        <div className='my-container'>
            <TableContextProvider>
                <h4 className='main-heading'>Brands</h4>
                <AddDialog />
                <br />
                <br />
                <MyTable tablename={"brands"} colnum={4} />
            </TableContextProvider>
        </div>
    )
}

export default Brands;