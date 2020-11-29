import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { updateFormData, isFilledFormData } from '../store/actions';
import classes from './Form.module.css';

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
    } else {
      isFilledUpdate(false);
    }
  }, [name, surname, birthDate, select, formData, isFilledUpdate]);

  return (
    <div className={classes.wrapper}>
      <div className={classes.container}>
        <form className={classes.form}>
          <h2 className={classes.title}>Form</h2>
          <div className={classes.inputField}>
            <input
              value={name}
              name="name"
              onChange={handleChange}
              type="text"
              placeholder="Name"
            />
          </div>
          <div className={classes.inputField}>
              <input
                value={surname}
                name="surname"
                onChange={handleChange}
                type="text"
                placeholder="Surmane"
              />
          </div>
          <div className={classes.inputField}>
              <input
                value={birthDate}
                name="birthDate"
                onChange={handleChange}
                type="date"
              />
          </div>
          <div className={classes.inputField}>
              <select
                defaultValue={select}
                onChange={handleChange}
                name="select"
                className={classes.select}
              >
                  <option value="Star">&#9733;</option>
                  <option value="Heart">&#10084;</option>
                  <option value="Octagon">&#11042;</option>
              </select>
          </div>
        </form>
      </div>
    </div>
  );
};

const mapStateToProps = ({ data, isFilled}) => {
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