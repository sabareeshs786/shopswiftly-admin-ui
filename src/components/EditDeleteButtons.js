import React, { useContext, useState } from 'react'
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import DeleteIcon from '@mui/icons-material/Delete';
import AddEditModal from './AddEditModal';
import useAuth from '../hooks/useAuth';
import axios from '../api/axios';
import TableContext from '../context/TableContext';


function EditDeleteButtons({ tablename, data }) {
    const {open, setOpen} = useContext(TableContext);
    
    let URL;
    switch (tablename.toLowerCase()) {
        case "brands":
            URL = '/brands'
            break;
        default:
            URL = '/brands'
    };

    const auth = useAuth();
    const api = axios.create({
        baseURL: 'http://localhost:3501',
        headers: {
            'Authorization': `Bearer ${auth.auth.accessToken}`,
            'Content-Type': 'application/json',
        },
    });

    const handleDeleteClick = async () => {
        try {
            const queryParam = { bcCode: data.bcCode };
            const response = await api.delete(URL, { params: queryParam });

        } catch (error) {

        }
    }
    return (
        <Stack direction="row" spacing={1}>
            <AddEditModal tablename={"brands"} isEdit={true} data={data} />
            <IconButton aria-label="delete" color='error' onClick={handleDeleteClick}>
                <DeleteIcon />
            </IconButton>
        </Stack>
    )
}

export default EditDeleteButtons;