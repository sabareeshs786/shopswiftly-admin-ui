import React, { useState } from 'react';
import { useDropzone } from 'react-dropzone';
import '../css/uploadform.css';
import Notification from './Notification';
import { axiosPrivate } from '../api/axios';
import axios from 'axios';

const UploadForm = () => {
    const [file, setFile] = useState(null);
    const [notification, setNotification] = useState(null);

    const onDrop = (acceptedFiles) => {
        // Handle the dropped files
        setFile(acceptedFiles[0]);
    };

    const { getRootProps, getInputProps } = useDropzone({
        onDrop,
        accept: 'image/*', // Accept only image files
        maxFiles: 1,       // Allow only one file to be dropped
    });

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!file) {
            setNotification({ type: 'error', message: 'Please select a file.' });
            return;
        }

        // Create a FormData object to send the file
        const formData = new FormData();
        formData.append('images', file);

        try {
            // Make a POST request using Axios
            const response = await axios.post('http://localhost:3501/product/add-product/mobiles', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });

            // Handle the response, show success notification, etc.
            setNotification({ type: 'success', message: 'File uploaded successfully.' });

            // Clear the selected file
            setFile(null);
        } catch (error) {
            // Handle errors, show error notification, etc.
            setNotification({ type: 'error', message: 'An error occurred while uploading the file.' });
            console.error('Error uploading file:', error);
        }
    };

    return (
        <>
            <form method="POST" onSubmit={handleSubmit} encType="multipart/form-data">
                <div {...getRootProps()} className="dropzone">
                    <input {...getInputProps()} />
                    <p>Drag & drop an image here, or click to select one</p>
                </div>
                <div>
                    <input type="submit" value="Upload" />
                </div>
            </form>
            {notification && <Notification type={notification.type} message={notification.message} />}
        </>
    );
};

export default UploadForm;
