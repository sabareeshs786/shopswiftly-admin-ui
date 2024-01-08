import * as React from 'react';
import Stack from '@mui/material/Stack';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import TableContext from '../../context/TableContext';

const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export default function NotificationBar({notify, noteType, message }) {
    const {setDelNotify} = React.useContext(TableContext);
    const [open, setOpen] = React.useState(notify);

    const handleNoteClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setOpen && setOpen(false);
        setDelNotify && setDelNotify(false);
    };

    return (
        <Stack spacing={2} sx={{ width: '100%' }}>
            <Snackbar
                anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
                open={open}
                autoHideDuration={6000}
                onClose={handleNoteClose}
            >
                <Alert onClose={handleNoteClose} severity={noteType === "success" ? "success" : "error"} sx={{ width: '100%' }}>
                    {message}
                </Alert>
            </Snackbar>
        </Stack>
    );
}
