import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link as RouterLink } from 'react-router-dom';
import { Container, Grid, Typography, Hidden, Link, InputAdornment, TextField, Fade, LinearProgress } from '@material-ui/core';
import MailIcon from '@material-ui/icons/MailOutlineOutlined';
import LockIcon from '@material-ui/icons/LockOutlined';
import PersonIcon from '@material-ui/icons/PersonOutline';
import UIstyle from './UIstyle';
import { GreenButton } from '../../util/Button';
import SecondTitle from './SecondTitle';
import GridColumnCenter from './GridColumnCenter';
import { signupAction, clearError } from '../../store/Actions/authActions';

function Main({ color, history }) {
    const iconColor = color === 'white' ? ({ color: '#F1F5ED' }) : ({ color: '#7A7474' })
    const { blackInput, whiteInput, typography } = UIstyle()
    const [userData, setUserData] = useState({
        username: '',
        email: '',
        password: '',
        confirmPassword: '',
    })
    const { errors, loading } = useSelector((state) => state.UI)
    const { auth } = useSelector((state) => state.auth)
    const dispatch = useDispatch()
    console.log(errors)
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
        dispatch(signupAction(userData, history))
    }
    return (
        <Container>
            <form onSubmit={handleSubmit}>
                <Grid container spacing={2}>
                    <Grid item xs={12} align="center">
                        <TextField
                            id="username"
                            type="text"
                            variant="outlined"
                            fullWidth
                            placeholder="Username"
                            className={color === 'white' ? whiteInput : blackInput}
                            onChange={handleChange}
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <PersonIcon style={iconColor} />
                                    </InputAdornment>
                                ),
                            }}
                            error={errors.username ? true : false}
                            helperText={errors.username}
                        />
                    </Grid>
                    <Grid item xs={12} align="center">
                        <TextField
                            id="email"
                            type="email"
                            variant="outlined"
                            fullWidth
                            placeholder="Email"
                            className={color === 'white' ? whiteInput : blackInput}
                            onChange={handleChange}
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <MailIcon style={iconColor} />
                                    </InputAdornment>
                                ),
                            }}
                            error={errors.email ? true : false}
                            helperText={errors.email}
                        />
                    </Grid>
                    <Grid item xs={12} align="center">
                        <TextField
                            id="password"
                            type="password"
                            variant="outlined"
                            fullWidth
                            placeholder="Password"
                            className={color === 'white' ? whiteInput : blackInput}
                            onChange={handleChange}
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <LockIcon style={iconColor} />
                                    </InputAdornment>
                                ),
                            }}
                            error={errors.password ? true : false}
                            helperText={errors.password}
                        />
                    </Grid>
                    <Grid item xs={12} align="center">
                        <TextField
                            id="confirmPassword"
                            type="password"
                            variant="outlined"
                            fullWidth
                            placeholder="Confirm Password"
                            className={color === 'white' ? whiteInput : blackInput}
                            onChange={handleChange}
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <LockIcon style={iconColor} />
                                    </InputAdornment>
                                ),
                            }}
                            error={errors.confirmPassword ? true : false}
                            helperText={errors.confirmPassword}
                        />
                    </Grid>
                    <Grid item xs={12} align="center">
                        {loading && (
                            <LinearProgress style={{ maxWidth: '400px' }} />
                        )}
                        <Typography className={typography}>
                            <Link component={RouterLink} to="/login" style={iconColor}>
                                Already Have an Account ?
                        </Link>
                        </Typography>
                        <GreenButton fullWidth type="submit">SUBMIT</GreenButton>
                    </Grid>
                </Grid>
            </form>
        </Container>
    )
}

const Signup = (props) => {
    const { auth } = useSelector((state) => state.auth)
    return (
        <React.Fragment>
            {auth && (<Redirect to="/" />)}
            <Fade in={true}>
                <Grid container>
                    <Grid item xs={12} md={5} className={UIstyle().root} style={{ backgroundColor: '#DFA47C', }}>
                        <GridColumnCenter>
                            <Grid item xs={12}>
                                <SecondTitle />
                            </Grid>
                            <Hidden mdUp>
                                <Grid item xs={12}>
                                    <Main color="white" history={props.history} />
                                </Grid>
                            </Hidden>
                        </GridColumnCenter>
                    </Grid>
                    <Hidden smDown>
                        <Grid item md={7}
                            style={{
                                backgroundColor: 'white',
                            }}>
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

export default Signup