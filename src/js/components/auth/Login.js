import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link as RouterLink, Redirect } from 'react-router-dom';
import {
    Container, Grid, Typography, Hidden, Link,
    InputAdornment, TextField, Fade, LinearProgress
} from '@material-ui/core';
import MailIcon from '@material-ui/icons/MailOutlineOutlined';
import LockIcon from '@material-ui/icons/LockOutlined';
import UIstyle from './UIstyle';
import { MustardButton } from '../../util/Button';
import MainTitle from './MainTitle';
import GridColumnCenter from './GridColumnCenter';
import { loginAction, clearError } from '../../store/Actions/authActions';

function Main({ history }) {
    const { blackInput, typography } = UIstyle()
    const [userData, setUserData] = useState({ email: '', password: '' })
    const { errors, loading } = useSelector((state) => state.UI)
    const { auth } = useSelector((state) => state.auth)
    const dispatch = useDispatch()

    //clear error when component unmount
    useEffect(() => {
        return () => {
            dispatch(clearError());
        }
    }, [])

    const handleChange = (e) => {
        setUserData({ ...userData, [e.target.id]: e.target.value });
        dispatch(clearError());
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(userData)
        dispatch(loginAction(userData, history));
    }
    return (
        <React.Fragment>
            {auth && (<Redirect to="/" />)}
            <Container>

                <form onSubmit={handleSubmit}>
                    <Grid container spacing={2}>
                        <Grid item xs={12} align="center">
                            <TextField
                                id="email"
                                type="email"
                                variant="outlined"
                                fullWidth
                                placeholder="Email"
                                className={blackInput}
                                onChange={handleChange}
                                InputProps={{
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            <MailIcon style={{ color: '#7A7474' }} />
                                        </InputAdornment>
                                    ),
                                }}
                            />
                        </Grid>
                        <Grid item xs={12} align="center">
                            <TextField
                                id="password"
                                type="password"
                                variant="outlined"
                                fullWidth
                                placeholder="Password"
                                className={blackInput}
                                onChange={handleChange}
                                InputProps={{
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            <LockIcon style={{ color: '#7A7474' }} />
                                        </InputAdornment>
                                    ),

                                }}
                            />
                        </Grid>
                        <Grid item xs={12} align="center">
                            {loading && (
                                <LinearProgress style={{ maxWidth: '400px' }} />
                            )}
                            {errors.loginError && (
                                <Typography color='error' style={{ fontSize: '12px' }}>
                                    {errors.loginError}
                                </Typography>
                            )}
                            <Typography className={typography}>
                                <Link component={RouterLink} to="/signup" color="textSecondary">
                                    Don't Have an Account ?
                            </Link>
                            </Typography>
                            <MustardButton fullWidth type="submit">Go</MustardButton>
                        </Grid>
                    </Grid>
                </form>
            </Container>
        </React.Fragment>
    )
}

const Login = (props) => {

    return (
        <React.Fragment>
            <Fade in={true}>
                <Grid container>
                    <Grid item xs={12} md={5} className={UIstyle().root} style={{ backgroundColor: '#F1F5ED', }}>
                        <GridColumnCenter>
                            <Grid item xs={12}>
                                <MainTitle />
                            </Grid>
                            <Hidden mdUp>
                                <Grid item xs={12}>
                                    <Main history={props.history} />
                                </Grid>
                            </Hidden>
                        </GridColumnCenter>
                    </Grid>
                    <Hidden smDown>
                        <Grid item md={7} style={{ backgroundColor: 'white' }}>
                            <GridColumnCenter>
                                <Main history={props.history} />
                            </GridColumnCenter>
                        </Grid>
                    </Hidden>
                </Grid>
            </Fade>

        </React.Fragment>
    )
}

export default Login