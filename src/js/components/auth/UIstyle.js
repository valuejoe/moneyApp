import { makeStyles } from '@material-ui/core/styles';

const UIstyle = makeStyles(theme => ({
    root: {
        paddingLeft: theme.spacing(1),
        paddingRight: theme.spacing(1),
        height: '100vh',
        overflow: 'auto',
    },

    typography: {
        marginBottom: theme.spacing(1),
    },

    blackInput: {
        maxWidth: '400px',
        '& .MuiOutlinedInput-root': {
            '& fieldset': {
                borderColor: '#7A7474',
                borderRadius: '40px',
                borderWidth: 3,
            },
            '&:hover fieldset': {
                borderColor: '#4e4949',
            },
            '&.Mui-focused fieldset': {
                borderColor: '#4e4949',
                borderWidth: 3,
            },
        },
        '& input': {
            '&::placeholder': {
                textOverflow: 'ellipsis !important',
                fontWeight: 'bold',
            }
        },
    },

    whiteInput: {
        maxWidth: '400px',
        '& .MuiOutlinedInput-root': {
            '& fieldset': {
                borderColor: '#F1F5ED',
                borderRadius: '40px',
                borderWidth: 3,
            },
            '&:hover fieldset': {
                borderColor: '#bec2bb',
            },
            '&.Mui-focused fieldset': {
                borderColor: '#bec2bb',
                borderWidth: 3,
            },
        },
        '& input': {
            color: 'white',
            '&::placeholder': {
                textOverflow: 'ellipsis !important',
                fontWeight: 'bold',
                color: '#F1F5ED',
            }
        },
    },
}))

export default UIstyle