import React, { Component } from 'react'
import {
    CssBaseline, Container, TextField, Button,
    Grid, Typography, LinearProgress
} from '@material-ui/core'
import { withStyles } from '@material-ui/styles';
import PropTypes from 'prop-types';
import { Link, Redirect } from 'react-router-dom'
import { connect } from 'react-redux';
import { signIn, clearError } from '../../store/Actions/authActions'

const useStyles = theme => ({
    root: {
        [theme.breakpoints.up('sm')]: {
            padding: theme.spacing(12),
        },
        flexGrow: 1,
        height: '100vh',
        padding: theme.spacing(6, 3, 3, 3),
        backgroundColor: '#f1f8e9',
    },
    container: {
        [theme.breakpoints.up('sm')]: {
            padding: theme.spacing(6, 6, 7, 6),
            backgroundColor: 'white'
        },
        height: 'auto',
        borderRadius: '10px',
        textAlign: 'center',
    },
    textField: {
        // width: 'auto',
        flexGrow: 1,
        margin: theme.spacing(2, 0, 5, 0)
    },
    button: {
        padding: theme.spacing(1),
    },
    title: {
        color: '#82a28e',
        marginBottom: theme.spacing(3)
    }
})

class SignIn extends Component {

    state = {
        email: '',
        password: ''
    }
    handleClick = () => {
        this.props.clearError()
    }
    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
        this.props.clearError()
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.signIn(this.state, this.props.history);
    }

    render() {
        const { classes, auth } = this.props;
        const { errors, loading } = this.props.UI;
        return (
            <React.Fragment>
                {auth && (<Redirect to="/" />)}
                <div className={classes.root}>
                    <CssBaseline />
                    <Container
                        maxWidth="sm"
                        className={classes.container}
                    >
                        <Typography variant="h2" component="h2" gutterBottom className={classes.title}>
                            MONEY
                            </Typography>
                        <form onSubmit={this.handleSubmit}>
                            <TextField
                                variant="outlined"
                                id="email"
                                label="Email Address"
                                margin="normal"
                                fullWidth
                                autoFocus
                                onChange={this.handleChange}
                                error={errors.email ? true : false}
                                helperText={errors.email}
                            />
                            <TextField
                                variant="outlined"
                                id="password"
                                label="Password"
                                margin="normal"
                                type="password"
                                fullWidth
                                onChange={this.handleChange}
                                error={errors.password ? true : false}
                                helperText={errors.password}
                                className={classes.textField}
                            />
                            {loading && (
                                <LinearProgress />
                            )}
                            {errors.loginError && (
                                <Typography color='error'>
                                    {errors.loginError}
                                </Typography>
                            )}
                            <Grid container spacing={3} >
                                <Grid item xs={12}>
                                    <Button
                                        type="submit"
                                        variant="contained"
                                        fullWidth
                                        className={classes.button}
                                        color="secondary"
                                        size="large"
                                    >
                                        LOG IN
                                    </Button>
                                </Grid>
                                <Grid item xs={12}>
                                    <Button
                                        variant="contained"
                                        fullWidth
                                        component={Link}
                                        to='/SignUp'
                                        onClick={this.handleClick}
                                        className={classes.button}
                                        size="large"
                                    >
                                        SIGN UP
                                </Button>
                                </Grid>
                            </Grid>

                        </form>
                    </Container>
                </div>
            </React.Fragment>
        )
    }
}

SignIn.propTypes = {
    classes: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => {
    return {
        UI: state.UI,
        auth: state.auth.auth
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        signIn: (userData, history) => dispatch(signIn(userData, history)),
        clearError: () => dispatch(clearError())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(useStyles)(SignIn))