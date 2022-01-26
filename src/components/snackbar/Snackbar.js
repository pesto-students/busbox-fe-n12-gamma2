import React, { useEffect, useState } from 'react'
import {Snackbar as MuiSnackbar, Alert} from '@mui/material'
import { useSelector, useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { snackbarActions } from '../../state';

export default function Snackbar () {
    const snackbar = useSelector(state => state?.snackbar)
    const {hideSnackbar} = bindActionCreators(snackbarActions, useDispatch())

    return (
        <MuiSnackbar 
            open={snackbar.open} 
            autoHideDuration={3000}
            onClose={hideSnackbar}
            message = {snackbar.message}
            anchorOrigin={{vertical: 'top', horizontal:'right'}}
        > 
            <Alert onClose={hideSnackbar} severity={snackbar.type} sx={{ width: '70%' }}>
                {snackbar.message}
            </Alert>
        </MuiSnackbar>
    )
}