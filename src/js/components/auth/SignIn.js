import React, { Component } from 'react'
import {
    CssBaseline, Container, TextField, Button,
    Grid, Typography, Paper, LinearProgress
} from '@material-ui/core'
import { withStyles } from '@material-ui/styles';
import PropTypes from 'prop-types';
import { Link, Redirect } from 'react-router-dom'
import { connect } from 'react-redux';
import { signIn, clearError } from '../../store/Actions/authActions'

const useStyles = theme => ({
    root: {
        flexGrow: 1,
    },
    container: {
        height: 'auto',
        borderRadius: '10px',
        [theme.breakpoints.up('sm')]: {
            padding: theme.spacing(3),
            backgroundColor: 'white'
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
                <main className={classes.root}>
                    <CssBaseline />
                    <Container
                        maxWidth="sm"
                        className={classes.container}
                    >
                        <Typography variant="h2" component="h2" gutterBottom color="primary">
                            Money
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
                            />
                            {loading && (
                                <LinearProgress />
                            )}
                            {errors.loginError && (
                                <Typography color='error'>
                                    {errors.loginError}
                                </Typography>
                            )}
                            <Grid
                                container
                                spacing={0}
                                direction="column"
                                alignItems="center"
                                justify="center"
                            >
                                <Button
                                    type="submit"
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
                                    onClick={this.handleClick}
                                >
                                    SIGN UP
                                </Button>

                            </Grid>
                        </form>
                    </Container>
                </main>
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