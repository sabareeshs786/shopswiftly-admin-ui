import React, { useState } from 'react';
import axios from 'axios';
import { useDropzone } from 'react-dropzone';
import './uploadform.css';
import Notification from './Notification';

const UploadForm = () => {
    // For notification
    const [notification, setNotification] = useState(null);
    const showNotification = (message, type) => {
        setNotification({ message, type });
    };
    const closeNotification = () => {
        setNotification(null);
    };

    const [file, setFile] = useState(null);
    const [name, setName] = useState('');
    const [brand, setBrand] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');
    const [ram, setRam] = useState('');
    const [internalStorage, setInternalStorage] = useState('');
    const [batteryCapacity, setBatteryCapacity] = useState('');


    const onDrop = (acceptedFiles) => {
        setFile(acceptedFiles[0]);
    };

    const { getRootProps, getInputProps } = useDropzone({
        onDrop,
        accept: 'image/*',
    });

    const handleUpload = async () => {
        try {
            const formData = new FormData();
            formData.append('image', file);
            formData.append('name', name);
            formData.append('description', description);
            formData.append('price', price);
            formData.append('brand', brand);
            formData.append('ram', ram);
            formData.append('storage', internalStorage);
            formData.append('batteryCapacity', batteryCapacity);

            const response = await axios.post('http://localhost:3501/upload', formData);
            showNotification('Image uploaded successfully!', 'success');
        } catch (error) {
            showNotification('Error uploading image. Please try again.', 'error');
        }
    };

    return (
        <>
            <div className="upload-form">
                <h2>Image Upload</h2>
                <div className="mb-3">
                    <label class="form-label">Product display name</label>
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Product name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">Brand</label>
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Brand"
                        value={brand}
                        onChange={(e) => setBrand(e.target.value)}
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">Description</label>
                    <textarea
                        className="form-control"
                        rows="3"
                        placeholder="description"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                    ></textarea>
                </div>
                <div className="mb-3">
                    <label className="form-label">Price</label>
                    <input
                        type="text"
                        className="form-control"
                        placeholder="6550.89"
                        value={price}
                        onChange={(e) => setPrice(Number(e.target.value))}
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">RAM</label>
                    <input
                        type="text"
                        className="form-control"
                        placeholder="RAM"
                        value={ram}
                        onChange={(e) => setRam(e.target.value)}
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">Internal Storage</label>
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Internal storage"
                        value={internalStorage}
                        onChange={(e) => setInternalStorage(e.target.value)}
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">Battery capacity</label>
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Battery capacity"
                        value={batteryCapacity}
                        onChange={(e) => setBatteryCapacity(e.target.value)}
                    />
                </div>
                <div {...getRootProps({ className: 'dropzone' })}>
                    <input {...getInputProps()} />
                    <p>Drag 'n' drop an image here, or click to select a file</p>
                </div>
                {file && (
                    <div>
                        <h4>Preview:</h4>
                        <img src={URL.createObjectURL(file)} alt="Preview" style={{ width: '10%', maxHeight: '100%' }} />
                    </div>
                )}

                <button className="btn btn-primary mt-3" onClick={handleUpload}>Upload</button>
                
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