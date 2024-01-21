import React, { useContext, useEffect, useState } from 'react'
import { axiosInvPrivate } from '../api/axios';
import axios from 'axios';
import NotificationBar from './generic/NotificationBar';
import MobileSpecForm from './MobileSpecForm';
import { GenericProductContext } from '../context/GenericProductContext';
import GenericForm from './GenericForm';
import { ProductContext } from '../context/ProductContext';
import { removeEmptyFields } from '../utils/UtilFunctions';
import { useDropzone } from 'react-dropzone';
import useAuth from '../hooks/useAuth';
import '../css/products.css';

function ProductFormContainer({ isEdit = false, data }) {
    const { auth } = useAuth();
    const { pname, currency, sp, mp, desc, keywords, highlights,
        availability, sellers, bestSeller, pnameRef,
        setErrorFields, } = useContext(GenericProductContext);
    const { modelNo, modelName, color, displaySize,
        displaySizeUnit, resolutionWidth, resolutionHeight, resolutionType,
        os, pbrand, pmodel, pnoOfCores, pClockSpeed, ramSize, ramUnit, storageSize,
        storageUnit, primaryCamera, secondaryCamera, batteryCapacity, networkType,
        simType, speciality, features, manufacturerWarranty, inBoxWarrenty } = useContext(ProductContext);

    const [noteType, setNoteType] = useState('');
    const [message, setMessage] = useState('');
    const [notify, setNotify] = useState(false);
    const [brand, setBrand] = useState((data && data.b) || '');
    const [category, setCategory] = useState((data && data.c) || '');
    const [allCate, setAllCate] = useState(null);
    const [allBrand, setAllBrand] = useState(null);
    const [files, setFiles] = useState([]);
    const onDrop = (acceptedFiles) => {
        setFiles([...files, ...acceptedFiles]);
    };

    const removeFile = (index) => {
        const newFiles = [...files];
        newFiles.splice(index, 1);
        setFiles(newFiles);
    };

    const { getRootProps, getInputProps } = useDropzone({
        onDrop,
        accept: 'image/*',
        multiple: true,
    });

    const PRODUCT_URL = '/product';

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
        pnameRef.current?.focus();
    }, []);

    useEffect(() => {
        const getBrands = async () => {
            try {
                const response = await axiosInvPrivate.get('/get-brands-by-category/' + category);
                const brandArrObj = response.data;
                const brandArr = brandArrObj.map((brandObj) => brandObj.brand);
                setAllBrand(brandArr);
            } catch (error) {
                setBrand('');
                setAllBrand(null);
            }
        }
        getBrands();
    }, [category]);

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
    };

    const handleSubmit = async (e) => {
        try {
            const formData = new FormData();
            files.forEach((file, index) => {
                formData.append('images', file);
            });
            const genericfields = {
                pname, brand,
                category, currency, mp, sp,
                highlights, desc, keywords, sellers,
                availability, bestSeller
            };
            const reqFields = {
                pname, brand,
                category, currency, mp, sp,
                keywords,
            };
            setErrForEmptyReqFields(reqFields);
            let specFields;
            switch (category) {
                case "mobiles":
                    specFields = {
                        modelNo, modelName, color, displaySize, displaySizeUnit, resolutionWidth, resolutionHeight, resolutionType,
                        os, pbrand, pmodel, pnoOfCores, pClockSpeed, ramSize, ramUnit, storageSize,
                        storageUnit, primaryCamera, secondaryCamera, batteryCapacity, networkType,
                        simType, speciality, features, manufacturerWarranty, inBoxWarrenty
                    };
                    const specReqFields = { modelNo, modelName, displaySize, resolutionHeight, resolutionWidth, ramSize, storageSize };
                    setErrForEmptyReqFields(specReqFields);
                    break;
                default:
                    console.log('No such category');
            };
            const productInfo = { ...genericfields, ...specFields };
            removeEmptyFields(productInfo);
            console.log(productInfo);
            Object.entries(productInfo).forEach(([key, value]) => {
                formData.append(key, value);
            });
            const response = await axios.post("http://localhost:3501" + PRODUCT_URL + '/add-product/mobiles' + category, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                    'Authorization': `Bearer ${auth.accessToken}`
                }
            });
            setNotify(true);
            setNoteType('success');
            setMessage(response?.data?.message);
        } catch (err) {
            setNotify(true);
            setNoteType('error');
            setMessage(err?.response?.data?.message || err?.message);
        }
    };

    const handleReset = () => {
        setFiles([]);
    }

    const handleImageChange = (e) => {
        const images = Array.from(e.target.files);
        console.log(images);
        setFiles(images);
      };

    return (
        <>
            <section className='field-container-product'>
                <GenericForm brand={brand} setBrand={setBrand}
                    category={category} setCategory={setCategory}
                    allCate={allCate} allBrand={allBrand}
                />
                <br />
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
                <div className="card custom-card">
                    <div className="card-body">
                        <label>Images:</label>
                        <input type="file" name="images" multiple onChange={handleImageChange} />

                        {files.length > 0 && (
                            <div>
                                <h4>Preview:</h4>
                                <div className="image-preview">
                                    {files.map((file, index) => (
                                        <div key={index} className="image-preview-item">
                                            <img
                                                src={URL.createObjectURL(file)}
                                                alt={`Preview ${index + 1}`}
                                                className="preview-image"
                                            />
                                            <button
                                                type="button"
                                                onClick={() => removeFile(index)}
                                                className="btn btn-danger remove-button"
                                            >
                                                Remove
                                            </button>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}
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