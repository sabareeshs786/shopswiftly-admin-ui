import React, { useEffect, useRef, useState } from 'react'
import SubmitButton from './generic/SubmitButton';
import axios from '../api/axios';
import useAuth from '../hooks/useAuth';
import NotificationBar from './generic/NotificationBar';
import { isvalidInputData } from '../utils/ValidateInput';


function BrandFormContainer({b, c, isEdit, bcCode}) {
    const brandRef = useRef();
    const [brand, setBrand] = useState(b || '');
    const [category, setCategory] = useState(c || '');
    const [brandFocus, setBrandFocus] = useState(true);
    const [categoryFocus, setCategoryFocus] = useState(false);
    const [noteType, setNoteType] = useState('');
    const [message, setMessage] = useState('');
    const [open, setOpen] = React.useState(false);
    const BRAND_URL = '/brands';
    const auth = useAuth();
    const api = axios.create({
        baseURL: 'http://localhost:3501',
        headers: {
            'Authorization': `Bearer ${auth.auth.accessToken}`,
            'Content-Type': 'application/json',
        },
    });
    useEffect(() => {
        brandRef.current.focus();
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            console.log(isEdit, {brand, category, bcCode});
            if((isEdit && !isvalidInputData({brand, category, bcCode})) || !isvalidInputData({brand, category})){
                throw new Error("Invalid input data");
            }

            const response = isEdit ? await api.put(BRAND_URL, { brand, category, bcCode}) : await api.post(BRAND_URL, {brand, category});
            setOpen(true);
            setNoteType('success');
            setMessage(response.data.message);
        } catch (err) {
            setOpen(true);
            setNoteType('error');
            setMessage(err?.response?.data?.message || err?.message);
        }
    }

    return (
        <>
            <section className='field-container'>
                <div className="card custom-card">
                    <div className="card-body">
                        <h3>{isEdit ? "Edit" : "Add"} Brand</h3>
                        <form onSubmit={handleSubmit}>
                            <div className="mb-3">
                                <label htmlFor="brand" className="form-label custom-label">Brand</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    name="brand"
                                    ref={brandRef}
                                    autoComplete="off"
                                    onChange={(e) => setBrand(e.target.value)}
                                    value={brand}
                                    aria-describedby="uidnote"
                                    onFocus={() => setBrandFocus(true)}
                                    onBlur={() => { setBrandFocus(false) }}
                                    placeholder="Enter brand"
                                />
                                <label htmlFor="category" className="form-label custom-label">Category</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    name="category"
                                    autoComplete="off"
                                    onChange={(e) => setCategory(e.target.value)}
                                    value={category}
                                    aria-describedby="uidnote"
                                    onFocus={() => setCategoryFocus(true)}
                                    onBlur={() => { setCategoryFocus(false) }}
                                    placeholder="Enter category"
                                />
                            </div>
                            <SubmitButton content={isEdit ? "Edit" : "Add"} />
                            <button
                                type='reset'
                                className="btn btn-secondary resetbutton"
                                onClick={() => { setBrand(''); setCategory(''); brandRef.current.focus() }}
                            >Reset</button>
                        </form>
                    </div>
                </div>
            </section>
            {open && <NotificationBar noteType={noteType} message={message} open={open} setOpen={setOpen} />}
        </>
    )
}

export default BrandFormContainer;