import React, { Component } from 'react'
import {CssBaseline, Container, TextField, Button,
        Grid, Typography, Paper
} from '@material-ui/core'
import { withStyles } from '@material-ui/styles';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom'


const useStyles = theme => ({
    container: {
        
        height: '450px',
        borderRadius: '10px',
        [theme.breakpoints.up('sm')]: {
            padding: theme.spacing(3),
            backgroundColor: 'white',
		},
        
        textAlign: 'center',
    },
    textField: {
        width: 'auto',
        flexGrow: 1,
    },
    button: {
        margin: theme.spacing(5, 0, 2),
    },
})

class SignIn extends Component {
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
                    <Typography variant="h2" component="h2" gutterBottom color="primary">
                        Money
                    </Typography>
                            <form>
                                <TextField
                                    variant="outlined"
                                    id="Email-Address"
                                    label="Email Address"
                                    margin="normal"
                                    fullWidth
                                    autoFocus
                                />
                                <TextField
                                    variant="outlined"
                                    id="Password"
                                    label="Password"
                                    margin="normal"
                                    type="password"
                                    fullWidth
                                />
                                <Grid
                                    container
                                    spacing={0}
                                    direction="column"
                                    alignItems="center"
                                    justify="center"
                                >
                                    <Button 
                                    variant="contained" 
                                    fullWidth 
                                    className={classes.button}
                                    color="secondary"
                                    >
                                    
                                        LOG IN
                                    </Button>

                                </Grid>
                                <Grid
                                    container
                                    spacing={0}
                                    direction="column"
                                    alignItems="center"
                                    justify="center"
                                >
                                    <Button
                                    variant="contained"
                                    fullWidth
                                    component={Link}
                                    to='/SignUp'
                                    >
                                        SIGN UP
                            </Button>

                                </Grid>
                            </form>
                </Container>
            </React.Fragment>
        )
    }
}

SignIn.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(useStyles)(SignIn)