import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import { axiosPrivate } from '../api/axios';
import { IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

export default function DelAlertDialog({ tablename, data }) {
    let URL;
    switch (tablename.toLowerCase()) {
        case "brands":
            URL = '/brands'
            break;
        default:
            URL = '/brands'
    };

    const handleDeleteClick = async () => {
        setOpen(true);
        try {
            const queryParam = { bcCode: data.bcCode };
            const response = await axiosPrivate.delete(URL, { params: queryParam });

        } catch (error) {

        }
    }
    
    const [open, setOpen] = React.useState(false);

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <React.Fragment>
            <IconButton aria-label="delete" color='error' onClick={handleDeleteClick}>
                <DeleteIcon />
            </IconButton>
            <Dialog
                open={open}
                TransitionComponent={Transition}
                keepMounted
                onClose={handleClose}
                aria-describedby="alert-dialog-slide-description"
            >
                <DialogTitle>{"Are you sure, Do you want to delete?"}</DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-slide-description">
                        {"If you delete this brand, then all the products associated with it will get deleted"}
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} >Cancel</Button>
                    <Button onClick={handleClose} variant='contained' color='error'>Delete</Button>
                </DialogActions>
            </Dialog>
        </React.Fragment>
    );
}
