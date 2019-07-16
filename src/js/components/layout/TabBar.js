import React from 'react';
import SwipeableViews from 'react-swipeable-views';
import { connect } from 'react-redux';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { Tabs, Tab, Typography, AppBar } from '@material-ui/core';
import { changeTabsValue } from '../../store/Actions/dataActions'

import DateList from '../dashboard/DateList'
import CostList from '../dashboard/CostList'
const useStyles = makeStyles({
    appbar: {
        flexGrow: 1,
        top: 'auto',
        bottom: 0,
    },
});

function TabBar(props) {
    const classes = useStyles();
    const { value } = props
    const theme = useTheme();
    function handleChange(event, newValue) {
        props.changeTabsValue(newValue)
    }
    function handleChangeIndex(index) {
        props.changeTabsValue(index)
    }

    return (
        <React.Fragment>
            <SwipeableViews
                axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                index={value}
                onChangeIndex={handleChangeIndex}
            >
                <Typography component="div" dir={theme.direction}>
                    <DateList />
                </Typography>
                <Typography component="div" dir={theme.direction}>
                    <CostList />
                </Typography>
            </SwipeableViews>
            <AppBar position="fixed" color="secondary" className={classes.appbar}>
                <Tabs
                    value={value}
                    onChange={handleChange}
                    indicatorColor="primary"
                    textColor="primary"
                    centered
                    variant="fullWidth"
                >
                    <Tab label="清單" />
                    <Tab label="詳細" />
                </Tabs>
            </AppBar>
        </React.Fragment>
    );
}

const mapStateToProps = (state) => {
    return {
        value: state.data.tabsValue,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        changeTabsValue: (value) => dispatch(changeTabsValue(value))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TabBar)