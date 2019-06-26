import React, { Component } from 'react'
import {
    CssBaseline, Container, TextField, Button,
    Grid, Typography, Paper
} from '@material-ui/core'
import { withStyles } from '@material-ui/styles';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux';
import { signIn } from '../../store/Actions/authActions'

const useStyles = theme => ({
    container: {

        height: 'auto',
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

    state = {
        email: '',
        password: ''
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.signIn(this.state, this.props.history);

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
                        />
                        <TextField
                            variant="outlined"
                            id="password"
                            label="Password"
                            margin="normal"
                            type="password"
                            fullWidth
                            onChange={this.handleChange}
                        />
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

const mapDispatchToProps = (dispatch) => {
    return {
        signIn: (userData, history) => dispatch(signIn(userData, history))
    }
}

export default connect(null, mapDispatchToProps)(withStyles(useStyles)(SignIn))