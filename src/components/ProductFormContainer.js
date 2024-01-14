import React, { useContext, useEffect, useState } from 'react'
import { axiosPrivate } from '../api/axios';
import NotificationBar from './generic/NotificationBar';
import MobileSpecForm from './MobileSpecForm';
import { GenericProductContext } from '../context/GenericProductContext';
import GenericForm from './GenericForm';

function ProductFormContainer({ isEdit, data }) {

    const { pname, currency, sp, mp, desc, keywords, highlights,
        availability, sellers, bestSeller, pnameRef,
        setErrorFields, } = useContext(GenericProductContext);

    const [noteType, setNoteType] = useState('');
    const [message, setMessage] = useState('');
    const [notify, setNotify] = useState(false);
    const [brand, setBrand] = useState((data && data.b) || '');
    const [category, setCategory] = useState((data && data.c) || '');
    const [allCate, setAllCate] = useState(null);
    const PRODUCT_URL = '/products';
    const bcCode = (data && data.bcCode) || '';

    useEffect(() => {
        const getCategories = async () => {
            const response = await axiosPrivate.get('/categories');
            const cateArrObj = response.data;
            const cateArr = cateArrObj.map((cateObj) => cateObj.category)
            setAllCate(cateArr);
        }
        getCategories();
        pnameRef.current?.focus();
    }, []);

    const setErrForEmptyReqFields = (reqFields) => {
        const emptyReqFields = [];
        Object.keys(reqFields).map((key) => {
            const value = reqFields[key];
            if (!value) {
                emptyReqFields.push(key);
            }
        });
        if (emptyReqFields.length !== 0) {
            setErrorFields(emptyReqFields);
            throw new Error("Invalid input data");
        }
    }

    const handleSubmit = async (e) => {
        try {
            const genericfields = {
                "pname": pname, "brand": brand,
                "category": category, "currency": currency, "mp": mp, "sp": sp,
                "highlights": highlights, "desc": desc, "keywords": keywords, "sellers": sellers,
                "availability": availability, "bestSeller": bestSeller
            };
            const reqFields = {
                "pname": pname, "brand": brand,
                "category": category, "currency": currency, "mp": mp, "sp": sp,
                "keywords": keywords,
            };
            setErrForEmptyReqFields(reqFields);

            const response = isEdit ? await axiosPrivate.put(PRODUCT_URL, { brand, category, bcCode }) : await axiosPrivate.post(PRODUCT_URL, { brand, category });
            setNotify(true);
            setNoteType('success');
            setMessage(response?.data?.message);
        } catch (err) {
            console.log(notify, noteType, message);
            setNotify(true);
            setNoteType('error');
            setMessage(err?.response?.data?.message || err?.message);
        }
    };

    const handleReset = () => {

    }

    return (
        <>
            <section className='field-container-product'>
                <GenericForm brand={brand} setBrand={setBrand}
                    category={category} setCategory={setCategory}
                    allCate={allCate}
                />
                <div className="card custom-card">
                    <div className="card-body">
                        <h6>Specifications</h6>
                        <br />
                        {
                            category && category === 'mobiles' && <MobileSpecForm />
                        }
                    </div>
                </div>
                <br />
                <button
                    type="button"
                    className={"btn btn-primary submitbutton"}
                    onClick={handleSubmit}
                >{isEdit ? "Edit" : "Add"}</button>
                <button
                    type='button'
                    className="btn btn-secondary resetbutton"
                    onClick={handleReset}
                >Reset</button>
            </section>
            {notify && <NotificationBar notify={notify} setNotify={setNotify} noteType={noteType} message={message} />}
        </>
    )
}

export default ProductFormContainer;