import React from 'react'
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import DeleteIcon from '@mui/icons-material/Delete';
import EditDialog from './EditDialog';
function BrandEditDeleteButtons({brand, category, bcCode}) {
    return (
        <Stack direction="row" spacing={1}>
                <EditDialog brand={brand} category={category} bcCode={bcCode} />
            <IconButton aria-label="delete" color='error'>
                <DeleteIcon />
            </IconButton>
        </Stack>
    )
}

export default BrandEditDeleteButtons;