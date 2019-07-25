import React, { Component } from 'react';
import { connect } from 'react-redux';
import NumberFormat from 'react-number-format';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/styles';
import { Paper, TextField, Button, Grid, FormControl, InputLabel, Select, MenuItem, Input, Box } from '@material-ui/core';
import { MuiPickersUtilsProvider, KeyboardDatePicker } from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
import { cancelAdd, submitAddList } from '../../store/Actions/dataActions';


const useStyles = theme => ({
    root: {
        height: 'auto',
        padding: theme.spacing(4, 4)
    },
    button: {
        marginTop: '50px'
    }
})

class AddCost extends Component {
    state = {
        date: new Date(),
        title: '',
        category: '',
        cost: '',
        comment: ''
    }

    handleChange = (e, name) => {
        if (name === "date") {
            this.setState({
                [name]: e
            })
        } else {
            this.setState({
                [name]: e.target.value
            })
        }
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.submitAddList(this.state)
    }

    handleCancelClick = () => {
        this.props.cancelAdd()
    }
    render() {
        const { classes, errors } = this.props
        const { date, category, cost } = this.state
        return (
            <React.Fragment>
                <Paper className={classes.root}>
                    <form onSubmit={this.handleSubmit}>
                        <Grid container spacing={4}>
                            <Grid item xs={12}>
                                <Box fontWeight="fontWeightBold" fontSize="30px">
                                    新增支出
                            </Box>
                            </Grid>
                            <Grid item xs={12}>
                                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                                    <KeyboardDatePicker
                                        name="date"
                                        placeholder='yyyy/MM/dd'
                                        value={date}
                                        onChange={(e) => this.handleChange(e, "date")}
                                        format="yyyy/MM/dd"
                                        error={errors.date ? true : false}
                                        invalidDateMessage={errors.date ? errors.date : false}
                                    />
                                </MuiPickersUtilsProvider>
                            </Grid>
                            <Grid item xs={9}>
                                <TextField
                                    name="title"
                                    label="項目名稱"
                                    fullWidth
                                    onChange={(e) => this.handleChange(e, "title")}
                                    error={errors.title ? true : false}
                                />
                            </Grid>
                            <Grid item xs={3}>
                                <FormControl error={errors.category ? true : false}>
                                    <InputLabel>分類</InputLabel>
                                    <Select
                                        name="category"
                                        value={category}
                                        input={<Input name="category" id="category" />}
                                        onChange={(e) => this.handleChange(e, "category")}
                                    >
                                        <MenuItem value="飲食">飲食</MenuItem>
                                        <MenuItem value="交通">交通</MenuItem>
                                        <MenuItem value="娛樂">娛樂</MenuItem>
                                        <MenuItem value="生活">生活</MenuItem>
                                    </Select>
                                </FormControl>
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    fullWidth
                                    className={classes.formControl}
                                    label="金額"
                                    value={cost}
                                    id="cost"
                                    name="cost"
                                    onChange={(e) => this.handleChange(e, "cost")}
                                    InputProps={{
                                        inputComponent: NumberFormatCustom,
                                    }}
                                    error={errors.cost ? true : false}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    label="註解"
                                    fullWidth
                                    onChange={(e) => this.handleChange(e, "comment")}
                                />
                            </Grid>
                            <Grid item xs={6} className={classes.button}>
                                <Button
                                    fullWidth
                                    variant="contained"
                                    onClick={this.handleCancelClick}
                                >
                                    取消
                            </Button>
                            </Grid>
                            <Grid item xs={6} className={classes.button}>
                                <Button
                                    type="submit"
                                    fullWidth
                                    color="secondary"
                                    variant="contained"
                                >
                                    確定
                            </Button>
                            </Grid>
                        </Grid>
                    </form>
                </Paper>
            </React.Fragment>
        )
    }
}

function NumberFormatCustom(props) {
    const { inputRef, onChange, ...other } = props;

    return (
        <NumberFormat
            {...other}
            getInputRef={inputRef}
            onValueChange={values => {
                onChange({
                    target: {
                        value: values.value,
                    },
                });
            }}
            thousandSeparator
            prefix="NT$"
        />
    );
}

NumberFormatCustom.propTypes = {
    inputRef: PropTypes.func.isRequired,
    onChange: PropTypes.func.isRequired,
};


AddCost.propTypes = {
    classes: PropTypes.object.isRequired,
}

const mapStateToProps = (state) => {
    return {
        errors: state.UI.errors
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        cancelAdd: () => dispatch(cancelAdd()),
        submitAddList: (value) => dispatch(submitAddList(value))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(useStyles)(AddCost));


