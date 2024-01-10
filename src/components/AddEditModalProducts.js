import * as React from 'react';
import Dialog from '@mui/material/Dialog';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import CloseIcon from '@mui/icons-material/Close';
import Slide from '@mui/material/Slide';
import EditIcon from '@mui/icons-material/Edit';
import '../css/form.css';
import TableContext from '../context/TableContext';
import { Button } from '@mui/material';
import ProductFormContainer from './ProductFormContainer';

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

export default function AddEditModalProduct({ isEdit=false, data }) {
    const [open, setOpen] = React.useState(false);
    const { update, setUpdate } = React.useContext(TableContext);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
        setUpdate(update + 1);
    };

    return (
        <React.Fragment>
            {
                isEdit ?
                    <IconButton aria-label="success" color='success' onClick={handleClickOpen}>
                        <EditIcon />
                    </IconButton>
                    :
                    <Button variant="contained" onClick={handleClickOpen}>
                        <b>+ Add Product</b>
                    </Button>
            }
            <Dialog
                fullScreen
                open={open}
                TransitionComponent={Transition}
            >
                <AppBar sx={{ position: 'relative' }}>
                    <Toolbar>
                        <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
                            {isEdit ? "Edit" : "Add"} Product Form
                        </Typography>
                        <IconButton
                            edge="end"
                            color="inherit"
                            onClick={handleClose}
                            aria-label="close"
                        >
                            <CloseIcon />
                        </IconButton>
                    </Toolbar>
                </AppBar>
                <ProductFormContainer data={data} isEdit={isEdit} />
            </Dialog>
        </React.Fragment>
    );
}