import React, { useContext, useState } from 'react'
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import DeleteIcon from '@mui/icons-material/Delete';
import AddEditModal from './AddEditModal';
import useAuth from '../hooks/useAuth';
import axios from '../api/axios';
import TableContext from '../context/TableContext';
import DelAlertDialog from './DelAlertDialog';


function EditDeleteButtons({ tablename, data }) {
    
    return (
        <Stack direction="row" spacing={1}>
            <AddEditModal tablename={tablename} isEdit={true} data={data} />
            <DelAlertDialog tablename={tablename} data={data} />
        </Stack>
    )
}

export default EditDeleteButtons;