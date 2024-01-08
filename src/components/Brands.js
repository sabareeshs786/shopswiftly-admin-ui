import React, { useContext } from 'react';
import MyTable from './MyTable';
import TableContext, { TableContextProvider } from '../context/TableContext';
import AddEditModal from './AddEditModal';
import NotificationBar from './generic/NotificationBar';

function Brands() {
    const {delNotify} = useContext(TableContext);
    return (
        <div className='my-container'>
                <h4 className='main-heading'>Brands</h4>
                <AddEditModal tablename="brands" isEdit={false}/>
                <br />
                <br />
                <MyTable tablename={"brands"} colnum={4} />
            {delNotify && <NotificationBar />}
        </div>
    )
}

export default Brands;