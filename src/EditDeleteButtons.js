import React from 'react'
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
function EditDeleteButtons() {
    return (
        <Stack direction="row" spacing={1}>
            <IconButton aria-label="edit" color="success">
                <EditIcon />
            </IconButton>
            <IconButton aria-label="delete" color='error'>
                <DeleteIcon />
            </IconButton>
        </Stack>
    )
}

export default EditDeleteButtons;