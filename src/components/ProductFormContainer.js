import React, { useContext, useEffect, useRef, useState } from 'react'
import { axiosPrivate } from '../api/axios';
import NotificationBar from './generic/NotificationBar';
import { isvalidInputData } from '../utils/ValidateInput';
import { Checkbox, FormControl, FormControlLabel, Input, InputAdornment, InputLabel, MenuItem, Select, TextField } from '@mui/material';
import MobileSpecForm from './MobileSpecForm';


function ProductFormContainer({ isEdit, data }) {
    const [noteType, setNoteType] = useState('');
    const [message, setMessage] = useState('');
    const [notify, setNotify] = useState(false);
    const [pname, setPname] = useState('');
    const [brand, setBrand] = useState((data && data.b) || '');
    const [category, setCategory] = useState((data && data.c) || '');
    const [currency, setCurrency] = useState('INR');
    const [sp, setSp] = useState('');
    const [mp, setMp] = useState('');
    const [desc, setDesc] = useState('');
    const [keywords, setKeywords] = useState('');
    const [highlights, setHighlights] = useState('');
    const [availability, setAvailability] = useState(false);
    const [sellers, setSellers] = useState('');
    const [bestSeller, setBestseller] = useState(false);
    const [allCate, setAllCate] = useState(null);
    const [errorFields, setErrorFields] = useState([]);
    const pnameRef = useRef();
    const PRODUCT_URL = '/products';
    const bcCode = (data && data.bcCode) || '';

    const currencySymbolMap = { 'INR': '₹', 'USD': '$', 'EURO': '€' }

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
    const handleInputChangeMp = (e) => {
        // Allow only numeric values
        const input = e.target.value;
        const numericInput = input.replace(/[^0-9]/g, '');

        setMp(numericInput);
    };

    const handleInputChangeSp = (e) => {
        // Allow only numeric values
        const input = e.target.value;
        const numericInput = input.replace(/[^0-9]/g, '');

        setSp(numericInput);
    };
    const addErrField = (newItem) => {
        setErrorFields((prevItems) => [...prevItems, newItem]);
    };

    // Example function to remove an item from the array
    const removeErrField = (itemToRemove) => {
        setErrorFields((prevItems) => prevItems.filter((item) => itemToRemove !== item));
    };

    const handleSubmit = async (e) => {
        const reqFields = {
            "pname": pname, "brand": brand,
            "category": category, "currency": currency, "mp": mp, "sp": sp,
            "keywords": keywords
        };
        const noFields = [];
        Object.keys(reqFields).map((key) => {
            const value = reqFields[key];
            console.log(key, reqFields[key]);
            if (!value) {
                noFields.push(key);
            }
        });
        setErrorFields(noFields);

        try {
            if ((isEdit && !isvalidInputData({ pname, brand, category, currency, mp, sp, keywords })) || !isvalidInputData({ brand, category })) {
                throw new Error("Invalid input data");
            }
            const response = isEdit ? await axiosPrivate.put(PRODUCT_URL, { brand, category, bcCode }) : await axiosPrivate.post(PRODUCT_URL, { brand, category });
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
            <section className='field-container-product'>
                <div className="card custom-card">
                    <div className="card-body">
                        <h6>Common fields</h6>
                            <div class="row">
                                <div className="col-md-3 mb-3">
                                    <FormControl variant="standard" sx={{ m: 1, minWidth: 120, width: '100%' }}>
                                        <TextField
                                            id="standard-basic"
                                            label="Product name"
                                            variant="standard"
                                            multiline
                                            rows={1}
                                            placeholder='Enter product name'
                                            value={pname}
                                            onChange={(e) => { setPname(e.target.value); removeErrField('pname') }}
                                            inputRef={pnameRef}
                                        />
                                        {errorFields && errorFields?.includes('pname') && <p style={{ color: 'red', fontSize: '0.8rem' }}>{"This field is required"}</p>}
                                    </FormControl>
                                </div>
                                <div className="col-md-2 mb-3">
                                    <FormControl variant="standard" sx={{ m: 1, minWidth: 120, width: '100%' }}>
                                        <TextField
                                            id="standard-basic"
                                            label="Brand"
                                            variant="standard"
                                            placeholder='Enter brand'
                                            value={brand}
                                            onChange={(e) => { setBrand(e.target.value); removeErrField('brand') }}
                                        />
                                        {errorFields && errorFields?.includes('brand') && <p style={{ color: 'red', fontSize: '0.8rem' }}>{"This field is required"}</p>}
                                    </FormControl>
                                </div>
                                <div className="col-md-2 mb-3">
                                    <FormControl variant="standard" sx={{ m: 1, minWidth: 10, width: '100%' }}>
                                        <InputLabel id="demo-simple-select-standard-label">Category</InputLabel>
                                        <Select
                                            labelId="demo-simple-select-standard-label"
                                            value={category}
                                            onChange={(e) => { setCategory(e.target.value); removeErrField('category') }}
                                            label="Category"
                                        >
                                            <MenuItem value="" key={-1}>
                                                <em>--Select--</em>
                                            </MenuItem>
                                            {
                                                allCate && allCate.length > 0 &&
                                                allCate.map((category, i) => <MenuItem key={i} value={category}>{category}</MenuItem>)
                                            }

                                        </Select>
                                        {errorFields && errorFields?.includes('category') && <p style={{ color: 'red', fontSize: '0.8rem' }}>{"This field is required"}</p>}
                                    </FormControl>
                                </div>
                                <div className="col-md-1 mb-3">
                                    <FormControl variant="standard" sx={{ m: 1, minWidth: 6, width: '100%' }}>
                                        <InputLabel id="demo-simple-select-standard-label">Currency</InputLabel>
                                        <Select
                                            labelId="demo-simple-select-standard-label"
                                            value={currency}
                                            onChange={(e) => { setCurrency(e.target.value); removeErrField('currency') }}
                                            label=""
                                            placeholder='Enter currency'
                                        >
                                            {
                                                Object.keys(currencySymbolMap).map((curr, i) => <MenuItem value={curr}>{curr} {currencySymbolMap[curr]}</MenuItem>)
                                            }
                                        </Select>
                                        {errorFields && errorFields?.includes('currency') && <p style={{ color: 'red', fontSize: '0.8rem' }}>{"This field is required"}</p>}
                                    </FormControl>
                                </div>
                                <div className='col-md-2 mb-3'>
                                    <FormControl fullWidth sx={{ m: 1 }} variant="standard">
                                        <InputLabel htmlFor="standard-adornment-amount">Marked Price</InputLabel>
                                        <Input
                                            id="standard-adornment-amount"
                                            startAdornment={<InputAdornment position="start">{currencySymbolMap[currency]}</InputAdornment>}
                                            value={mp}
                                            onChange={(e) => { handleInputChangeMp(e); removeErrField('mp') }}
                                        />
                                        {errorFields && errorFields?.includes('mp') && <p style={{ color: 'red', fontSize: '0.8rem' }}>{"This field is required"}</p>}
                                    </FormControl>
                                </div>
                                <div className='col-md-2 mb-3'>
                                    <FormControl fullWidth sx={{ m: 1 }} variant="standard">
                                        <InputLabel htmlFor="standard-adornment-amount">Selling Price</InputLabel>
                                        <Input
                                            id="standard-adornment-amount"
                                            startAdornment={<InputAdornment position="start">{currencySymbolMap[currency]}</InputAdornment>}
                                            value={sp}
                                            onChange={(e) => { handleInputChangeSp(e); removeErrField('sp') }}
                                        />
                                        {errorFields && errorFields?.includes('sp') && <p style={{ color: 'red', fontSize: '0.8rem' }}>{"This field is required"}</p>}
                                    </FormControl>
                                </div>
                            </div>

                            <div class="row">
                                <div className="col-md-3 mb-3">
                                    <FormControl variant="standard" sx={{ m: 1, minWidth: 120, width: '100%' }}>
                                        <TextField
                                            id="standard-basic"
                                            label="Highlights"
                                            variant="standard"
                                            multiline
                                            rows={1}
                                            placeholder='Enter highlights'
                                            value={highlights}
                                            onChange={(e) => setHighlights(e.target.value)}
                                        />
                                    </FormControl>
                                </div>
                                <div className="col-md-3 mb-3">
                                    <FormControl variant="standard" sx={{ m: 1, minWidth: 120, width: '100%' }}>
                                        <TextField
                                            id="standard-basic"
                                            label="Description"
                                            variant="standard"
                                            multiline
                                            rows={1}
                                            placeholder='Enter description'
                                            value={desc}
                                            onChange={(e) => setDesc(e.target.value)}
                                        />
                                    </FormControl>
                                </div>
                                <div className="col-md-3 mb-3">
                                    <FormControl variant="standard" sx={{ m: 1, minWidth: 120, width: '100%' }}>
                                        <TextField
                                            id="standard-basic"
                                            label="Keywords"
                                            variant="standard"
                                            multiline
                                            rows={1}
                                            placeholder='Enter keywords'
                                            value={keywords}
                                            onChange={(e) => { setKeywords(e.target.value); removeErrField('keywords') }}
                                        />
                                        {errorFields && errorFields?.includes('keywords') && <p style={{ color: 'red', fontSize: '0.8rem' }}>{"This field is required"}</p>}
                                    </FormControl>
                                </div>
                                <div className="col-md-3 mb-2">
                                    <FormControl variant="standard" sx={{ m: 1, minWidth: 120, width: '100%' }}>
                                        <TextField
                                            id="standard-basic"
                                            label="Sellers"
                                            variant="standard"
                                            multiline
                                            rows={1}
                                            placeholder='Enter sellers'
                                            value={sellers}
                                            onChange={(e) => setSellers(e.target.value)}
                                        />
                                    </FormControl>
                                </div>
                            </div>

                            <div class="row">
                                <div className="col-md-3 mb-2">
                                    <FormControlLabel
                                        control={<Checkbox checked={availability} onChange={(e) => setAvailability(e.target.checked)} />}
                                        label="Availability"
                                    />
                                </div>
                                <div className="col-md-3 mb-2">
                                    <FormControlLabel
                                        control={<Checkbox checked={bestSeller} onChange={(e) => setBestseller(e.target.checked)} />}
                                        label="Bestseller"
                                    />
                                </div>
                            </div>

                            <button
                                type="button"
                                className={"btn btn-primary submitbutton"}
                                onClick={handleSubmit}
                            >{isEdit ? "Edit" : "Add"}</button>
                            <button
                                type='button'
                                className="btn btn-secondary resetbutton"
                                onClick={() => { setBrand(''); setCategory(''); pnameRef.current.focus() }}
                            >Reset</button>
                    </div>
                </div>

                <div className="card custom-card">
                    <div className="card-body">
                        <h6>Specifications</h6>
                        <br/>
                        {
                            category && category === 'mobiles' && <MobileSpecForm />
                        }
                    </div>
                </div>
            </section>
            {notify && <NotificationBar notify={notify} noteType={noteType} message={message} />}
        </>
    )
}

export default ProductFormContainer;