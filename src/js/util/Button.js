import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

export const MustardButton = withStyles((theme) => {
    return ({
        root: {
            color: "#F1F5ED",
            backgroundColor: "#e8cc5c",
            '&:hover': {
                backgroundColor: "#b39b2b",
            },
            borderRadius: "40px",
            padding: '10px 0px',
            fontSize: "20px",
            fontWeight: "bold",
            // minWidth: "300px",
            maxWidth: '400px',
        },
    })
})(Button)

export const GreenButton = withStyles((theme) => {
    return ({
        root: {
            color: "#F1F5ED",
            backgroundColor: "#6AB176",
            '&:hover': {
                backgroundColor: "#3a814a",
            },
            borderRadius: "40px",
            padding: '10px 0px',
            fontSize: "20px",
            fontWeight: "bold",
            // minWidth: "300px",
            maxWidth: '400px',
        },
    })
})(Button)
