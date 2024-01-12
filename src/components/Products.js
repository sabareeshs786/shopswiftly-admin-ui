import React, { useContext, useEffect, useState } from 'react';
import MyTable from './MyTable';
import TableContext from '../context/TableContext';
import NotificationBar from './generic/NotificationBar';
import CollapsibleTable from './ProductsTable';
import CategoryDropdown from './CategoryDropdown';
import { axiosPrivate } from '../api/axios';
import AddEditModalProduct from './AddEditModalProducts';
import { ProductContextProvider } from '../context/ProductContext';

function Products() {
    const [allCate, setAllCate] = useState(null);
    const [category, setCategory] = useState('mobiles');

    const { delNotify, noteType, message } = useContext(TableContext);
    useEffect(() => {
        const getCategories = async () => {
            try {
                const response = await axiosPrivate.get('/categories');
                const cateArrObj = response.data;
                const cateArr = cateArrObj.map((cateObj) => cateObj.category);
                console.log(cateArr);
                setAllCate(cateArr);
            } catch (error) {
                console.log(error)
            }
        }
        getCategories();
    }, []);

    return (
        <ProductContextProvider>
            <div className='my-container'>
                <h4 className='main-heading'>Products</h4>
                <AddEditModalProduct tablename="products" isEdit={false} />
                <br />
                <CategoryDropdown category={category} allCate={allCate} setCategory={setCategory} />
                <br />
                <br />
                <MyTable tablename={"products"} colnum={4} />
                <CollapsibleTable />
                {delNotify && <NotificationBar notify={delNotify} noteType={noteType} message={message} />}
            </div>
        </ProductContextProvider>
    )
}

export default Products;