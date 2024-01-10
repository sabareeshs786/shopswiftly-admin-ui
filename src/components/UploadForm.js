import React, { useState } from 'react';
import { useDropzone } from 'react-dropzone';
import axios from 'axios';
import Notification from './Notification';
import useAuth from '../hooks/useAuth';

const UploadForm = () => {
    const [notification, setNotification] = useState(null);
    const showNotification = (message, type) => {
        setNotification({ message, type });
    };
    const closeNotification = () => {
        setNotification(null);
    };
    const { auth } = useAuth();
    const [files, setFiles] = useState([]);
    const [productInfo, setProductInfo] = useState({
        name: '',
        brand: '',
        description: '',
        price: '',
        ram: '',
        internalStorage: '',
        batteryCapacity: '',
    });

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

    const handleUpload = async () => {
        try {
            const formData = new FormData();

            files.forEach((file, index) => {
                formData.append('images', file);
            });
            Object.entries(productInfo).forEach(([key, value]) => {
                formData.append(key, value);
            });

            const response = await axios.post('http://localhost:3501/product/add-product/mobiles', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                    'Authorization': `Bearer ${auth.accessToken}`
                },
            });

            setNotification({ type: 'success', message: 'Files uploaded successfully.' });

            setFiles([]);
            setProductInfo({
                name: '',
                brand: '',
                description: '',
                price: '',
                ram: '',
            });
        } catch (error) {
            // Handle errors, show error notification, etc.
            setNotification({ type: 'error', message: 'An error occurred while uploading files.' });
            console.error('Error uploading files:', error);
        }
    };

    return (
        <>
            <div className="upload-form">
                {/* ... Other form fields ... */}
                <h2>Image Upload</h2>
                <div className="mb-3">
                    <label class="form-label">Product display name</label>
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Product name"
                        value={productInfo.name}
                        onChange={(e) => setProductInfo({...productInfo, name: e.target.value})}
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">Brand</label>
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Brand"
                        value={productInfo.brand}
                        onChange={(e) => setProductInfo({...productInfo, brand: e.target.value})}
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">Description</label>
                    <textarea
                        className="form-control"
                        rows="3"
                        placeholder="description"
                        value={productInfo.description}
                        onChange={(e) => setProductInfo({...productInfo, description: e.target.value})}
                    ></textarea>
                </div>
                <div className="mb-3">
                    <label className="form-label">Price</label>
                    <input
                        type="text"
                        className="form-control"
                        placeholder="6550.89"
                        value={productInfo.price}
                        onChange={(e) => setProductInfo({...productInfo, price: Number(e.target.value)})}
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">RAM</label>
                    <input
                        type="text"
                        className="form-control"
                        placeholder="RAM"
                        value={productInfo.ram}
                        onChange={(e) => setProductInfo({...productInfo, ram: e.target.value})}
                    />
                </div>
                <div {...getRootProps({ className: 'dropzone' })}>
                    <input {...getInputProps()} />
                    <p>Drag 'n' drop images here, or click to select files</p>
                </div>

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
                                        className="remove-button"
                                    >
                                        Remove
                                    </button>
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                <button className="btn btn-primary mt-3" onClick={handleUpload}>
                    Upload
                </button>

                {notification && (
                    <Notification
                        message={notification.message}
                        type={notification.type}
                        onClose={closeNotification}
                    />
                )}
            </div>
        </>
    );
};

export default UploadForm;
