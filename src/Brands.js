import React from 'react';
import MyTable from './MyTable';
import { TableContextProvider } from './TableContext';

function Brands() {

    return (
        <div className='my-container'>
            <h4 className='main-heading'>Brands</h4>
            <TableContextProvider>
                <MyTable tablename={"brands"} colnum={4}/>
            </TableContextProvider>
        </div>
    )
}

export default Brands;