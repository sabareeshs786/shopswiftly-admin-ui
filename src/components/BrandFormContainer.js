import React, { useContext, useEffect, useRef, useState } from 'react'
import SubmitButton from './generic/SubmitButton';
import { axiosInvPrivate } from '../api/axios';
import NotificationBar from './generic/NotificationBar';
import { isvalidInputData } from '../utils/ValidateInput';
import { FormControl, InputLabel, MenuItem, Select, TextField } from '@mui/material';


function BrandFormContainer({ isEdit, data }) {
    const [noteType, setNoteType] = useState('');
    const [message, setMessage] = useState('');
    const [notify, setNotify] = useState(false);
    const brandRef = useRef();
    const [brand, setBrand] = useState((data && data.b) || '');
    const [category, setCategory] = useState((data && data.c) || '');
    const [allCate, setAllCate] = useState(null);
    const BRAND_URL = '/brands';
    const bcCode = (data && data.bcCode) || '';

    useEffect(() => {
        const getCategories = async () => {
            try {
                const response = await axiosInvPrivate.get('/categories');
                const cateArrObj = response.data;
                const cateArr = cateArrObj.map((cateObj) => cateObj.category)
                setAllCate(cateArr);
            } catch (error) {
                console.log(error);
            }
        }
        getCategories();
        brandRef.current?.focus();
    }, []);

    const handleSubmit = async (e) => {
        console.log(`isEdit = ${isEdit}`);
        try {
            if ((isEdit && !isvalidInputData({ brand, category, bcCode })) || !isvalidInputData({ brand, category })) {
                throw new Error("Invalid input data");
            }
            const response = isEdit ? await axiosInvPrivate.put(BRAND_URL, { brand, category, bcCode }) : await axiosInvPrivate.post(BRAND_URL, { brand, category });
            setNotify(true);
            setNoteType('success');
            setMessage(response?.data?.message);
        } catch (err) {
            setNotify(true);
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
                        <form>
                            <div className="mb-3">
                                <FormControl variant="standard" sx={{ m: 1, minWidth: 120, width: '100%' }}>
                                    <TextField
                                        id="standard-basic"
                                        label="Brand"
                                        variant="standard"
                                        value={brand}
                                        onChange={(e) => setBrand(e.target.value)}
                                        inputRef={brandRef}
                                    />
                                </FormControl>
                                <FormControl variant="standard" sx={{ m: 1, minWidth: 120, width: '100%' }}>
                                    <InputLabel id="demo-simple-select-standard-label">Category</InputLabel>
                                    <Select
                                        labelId="demo-simple-select-standard-label"
                                        value={category}
                                        onChange={(e) => setCategory(e.target.value)}
                                        label="Category"
                                    >
                                        <MenuItem value="" key={-1}>
                                            <em>None</em>
                                        </MenuItem>
                                        {
                                            allCate && allCate.length > 0 &&
                                            allCate.map((category, i) => <MenuItem key={i} value={category}>{category}</MenuItem>)
                                        }

                                    </Select>
                                </FormControl>
                            </div>
                            <button
                                type="button"
                                className={"btn btn-primary submitbutton"}
                                onClick={handleSubmit}
                            >{isEdit ? "Edit" : "Add"}</button>
                            <button
                                type='button'
                                className="btn btn-secondary resetbutton"
                                onClick={() => { setBrand(''); setCategory(''); brandRef.current.focus() }}
                            >Reset</button>
                        </form>
                    </div>
                </div>
            </section>
            {notify && <NotificationBar notify={notify} noteType={noteType} message={message} />}
        </>
    )
}

export default BrandFormContainer;