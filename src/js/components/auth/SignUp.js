import React, { Component } from 'react'
import { CssBaseline, Container, TextField, Button, Grid, Typography } from '@material-ui/core'
import { withStyles } from '@material-ui/styles';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { signUp } from '../../store/Actions/authActions'
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

    state = {
        email: '',
        password: ''
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        });
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.signUp(this.state, this.props.history);
        // this.props.history.push("/");
    }


    render() {
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
                    <form onSubmit={this.handleSubmit}>
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
                                    type="email"
                                    onChange={this.handleChange}
                                    variant="outlined"
                                    id="email"
                                    label="Email Address"
                                    margin="normal"
                                    fullWidth
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    type="password"
                                    onChange={this.handleChange}
                                    variant="outlined"
                                    id="password"
                                    label="Password"
                                    margin="normal"
                                    fullWidth
                                />
                            </Grid>

                            <Grid item xs={12}>
                                <Button
                                    type="submit"
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

const MapDispatchToProps = (dispatch) => {
    return {
        signUp: (state, history) => dispatch(signUp(state, history))
    }
}

export default connect(null, MapDispatchToProps)(withStyles(useStyles)(SignUp))