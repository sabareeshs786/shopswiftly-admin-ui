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
import TableContext from '../context/TableContext';

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

export default function DelAlertDialog({ tablename, data }) {
    const {setNoteType, setMessage, setDelNotify, update, setUpdate} = React.useContext(TableContext);
    let URL;
    switch (tablename.toLowerCase()) {
        case "brands":
            URL = '/brands'
            break;
        default:
            URL = '/brands'
    };

    const handleDeleteClick = () => {
        setOpen(true);
    }
    const handleDeleteConfirmClick = async () => {
        try {
            const queryParam = { bcCode: data.bcCode };
            const response = await axiosPrivate.delete(URL, { params: queryParam });
            setDelNotify(true);
            setNoteType('success');
            setMessage('Deleted successfully');
        } catch (error) {
            setDelNotify(true);
            setNoteType('error');
            setMessage("Can't delete");
        }
    }
    const [open, setOpen] = React.useState(false);

    const handleDelDialogClose = () => {
        setOpen(false);
        setUpdate(update + 1);
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
                onClose={handleDelDialogClose}
                aria-describedby="alert-dialog-slide-description"
            >
                <DialogTitle>{"Are you sure, Do you want to delete?"}</DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-slide-description">
                        {"If you delete this brand, then all the products associated with it will get deleted"}
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleDelDialogClose} >Cancel</Button>
                    <Button onClick={handleDeleteConfirmClick} variant='contained' color='error'>Delete</Button>
                </DialogActions>
            </Dialog>
        </React.Fragment>
    );
}
