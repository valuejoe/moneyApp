import React, { Component } from 'react'
import { CssBaseline, Container, TextField, Button, Grid, Typography } from '@material-ui/core'
import { withStyles } from '@material-ui/styles';
import PropTypes from 'prop-types';

const useStyles = theme => ({
    container: {
        [theme.breakpoints.up('sm')]: {
            padding: theme.spacing(3),
            backgroundColor: 'white',
        },
        height: '450px',
        borderRadius: '10px',
    },
    textField: {
        width: 'auto',
        flexGrow: 1,
    },
    button: {
        marginTop: theme.spacing(5),
    }
})

class SignUp extends Component {
    render() {
        console.log(this.props)
        const { classes } = this.props;
        return (
            <React.Fragment>
                <CssBaseline />
                <Container
                    maxWidth="sm"
                    className={classes.container}
                >
                    <Typography variant="h5">
                        Sign Up
                    </Typography>
                    <form>
                        <Grid container spacing={1}>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    variant="outlined"
                                    id="First-Name"
                                    label="First Name"
                                    margin="normal"
                                    fullWidth
                                    autoFocus
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    variant="outlined"
                                    id="Last-Name"
                                    label="Last Name"
                                    margin="normal"
                                    fullWidth
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    variant="outlined"

                                    id="Email-Address"
                                    label="Email Address"
                                    margin="normal"
                                    fullWidth
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    variant="outlined"

                                    id="Password"
                                    label="Password"
                                    margin="normal"
                                    type="password"
                                    fullWidth
                                />
                            </Grid>

                            <Grid item xs={12}>
                                <Button
                                    variant="contained"
                                    className={classes.button}
                                    fullWidth
                                >
                                    Submit
                                </Button>
                            </Grid>
                        </Grid>
                    </form>
                </Container>
            </React.Fragment>
        )
    }
}

SignUp.propTypes = {
    classes: PropTypes.object.isRequired,
};


export default withStyles(useStyles)(SignUp)