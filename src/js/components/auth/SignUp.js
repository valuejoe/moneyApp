import React, { Component } from 'react'
import { CssBaseline, Container, TextField, Button, Grid, Typography } from '@material-ui/core'
import { withStyles } from '@material-ui/styles';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { signUp } from '../../store/Actions/authActions'
import { Link } from 'react-router-dom'
const useStyles = theme => ({
    container: {
        [theme.breakpoints.up('sm')]: {
            padding: theme.spacing(3),
            backgroundColor: 'white',
        },
        height: 'auto',
        borderRadius: '10px',
    },
    textField: {
        width: 'auto',
        flexGrow: 1,
    },
    button: {
        margin: theme.spacing(5, 0, 2),
    }
})

class SignUp extends Component {

    state = {
        username: '',
        email: '',
        password: '',
        confirmPassword: ''
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
        const errors = this.props.UI.error

        console.log(errors)

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
                        <Grid container spacing={0}>
                            <Grid item xs={12}>
                                <TextField
                                    onChange={this.handleChange}
                                    variant="outlined"
                                    id="username"
                                    label="Username"
                                    margin="normal"
                                    fullWidth
                                    autoFocus
                                    error={errors.username ? true : false}
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
                                    error={errors.email ? true : false}
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
                                    error={errors.password ? true : false}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    type="password"
                                    onChange={this.handleChange}
                                    variant="outlined"
                                    id="confirmPassword"
                                    label="Confirm Password"
                                    margin="normal"
                                    fullWidth
                                    error={errors.confirmPassword ? true : false}
                                />
                            </Grid>
                        </Grid>

                        <Grid item xs={12}>
                            <Button
                                type="submit"
                                variant="contained"
                                className={classes.button}
                                color="secondary"
                                fullWidth
                            >
                                Submit
                                </Button>
                        </Grid>
                        <Grid item xs={12}>
                            <Button
                                variant="contained"
                                component={Link}
                                to='/SignIn'
                                fullWidth
                            >
                                Login
                                </Button>
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

const MapStateToProps = (state) => {
    return {
        UI: state.UI
    }
}

const MapDispatchToProps = (dispatch) => {
    return {
        signUp: (state, history) => dispatch(signUp(state, history))
    }
}

export default connect(MapStateToProps, MapDispatchToProps)(withStyles(useStyles)(SignUp))