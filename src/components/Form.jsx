import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { updateFormData, isFilledFormData } from '../store/actions';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import StarIcon from '@material-ui/icons/Star';
import FavoriteIcon from '@material-ui/icons/Favorite';
import CropDinIcon from '@material-ui/icons/CropDin';

const useStyles = makeStyles(() => ({
  layout: {
    width: '80%',
    marginLeft: '1rem',
    marginRight: '1rem'
  },
  form: {
    marginTop: '1rem',
  },
  paper: {
    marginTop: '3rem',
    height: '40vh',
    marginBottom: '3rem',
    padding: '1rem',
  },
  inputField: {
    marginLeft: '1.5rem',
    marginRight: '1.5rem',
    width: "100%"
  },
  selectItem: {
    fontSize: '1.5rem'
  }
}));


const Form = ({ formData, updateData, isFilledUpdate }) => {
  const { name, surname, birthDate, select } = formData;

  const handleChange = ev => {
    updateData(ev.target);
  };

  useEffect(() => {
    if (
      /[a-zA-Zа-яА-Я]{3,}/.test(name) &&
      /[a-zA-Zа-яА-Я]{3,}/.test(surname) &&
      /[^0]{1}[0-9]{3}-[0-9]{2}-[0-9]{2}/.test(birthDate) &&
      /[Star|Heart|Octagon]/.test(select)
    ) {
      isFilledUpdate(true);
      console.log(formData);
      // console.log(JSON.stringify(formData));
    } else {
      isFilledUpdate(false);
    }
  }, [name, surname, birthDate, select, formData, isFilledUpdate]);

  const classes = useStyles();

  return (
    <main className={classes.layout}>
      <Paper className={classes.paper}>
        <Typography component="h1" variant="h4" align="center">
          Form
        </Typography>
        <form className={classes.form} noValidate autoComplete="off">
          <Grid container spacing={3}>
            <Grid item md={8} sm={6} xs={8}>
              <TextField
                className={classes.inputField}
                name="name"
                label="Name"
                value={name}
                onChange={handleChange}
                variant="outlined"
              />
            </Grid>
            <Grid item md={8} sm={6} xs={8}>
              <TextField
                className={classes.inputField}
                name="surname"
                label="Surname"
                value={surname}
                onChange={handleChange}
                variant="outlined"
              />
            </Grid>
            <Grid item md={8} sm={6} xs={8}>
              <TextField
                className={classes.inputField}
                label="Birthday"
                name="birthDate"
                type="date"
                value={birthDate}
                onChange={handleChange}
                InputLabelProps={{
                  shrink: true,
                }}
              />
            </Grid>
            <Grid item md={8} sm={6} xs={8}>
              <FormControl className={classes.inputField}>
              <InputLabel id="select ">Select</InputLabel>
              <Select
                  labelId="select"
                  name="select"
                  value={select}
                  onChange={handleChange}
                >
                  <MenuItem style={{ color: 'gold' }} className={classes.selectItem} value="Star"><StarIcon /></MenuItem>
                  <MenuItem style={{ color: 'red' }} className={classes.selectItem} value="Heart"><FavoriteIcon /></MenuItem>
                  <MenuItem style={{ color: 'green' }} className={classes.selectItem} value="Octagon"><CropDinIcon /></MenuItem>
                </Select>
              </FormControl>
            </Grid>
          </Grid>
        </form>
      </Paper>
    </main>
  );
};

const mapStateToProps = ({ data }) => {
  return {
    formData: data
  };
};

const mapDispatchToProps = dispatch => {
  return {
    updateData: formData => {
      dispatch(updateFormData(formData));
    },
    isFilledUpdate: bool => {
      dispatch(isFilledFormData(bool))
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Form);