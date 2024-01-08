import React from 'react';
import MyTable from './MyTable';
import { TableContextProvider } from '../context/TableContext';
import AddEditModal from './AddEditModal';

function Brands() {
    
    return (
        <div className='my-container'>
            <TableContextProvider>
                <h4 className='main-heading'>Brands</h4>
                <AddEditModal tablename="brands" isEdit={false}/>
                <br />
                <br />
                <MyTable tablename={"brands"} colnum={4} />
            </TableContextProvider>
        </div>
    )
}

export default Brands;