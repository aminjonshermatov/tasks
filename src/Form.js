import React from 'react';
import { connect } from 'react-redux';
import { updateFormData } from './store/actions';
import classes from './Form.module.css';

const Form = ({ formData, updateData }) => {
  const { name, surname, birthDate, select } = formData;

  const handleChange = ev => {
    updateData(ev.target);
  };

  const handleBlur = () => {    
    console.log(name);
    console.log(surname);
    console.log(birthDate);
    console.log(select);
  };

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
              onBlur={handleBlur}
            />
          </div>
          <div className={classes.inputField}>
              <input
                value={surname}
                name="surname"
                onChange={handleChange}
                type="text"
                placeholder="Surmane"
                onBlur={handleBlur}
              />
          </div>
          <div className={classes.inputField}>
              <input
                value={birthDate}
                name="birthDate"
                onChange={handleChange}
                type="date"
                onBlur={handleBlur}
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

const mapStateToProps = state => {
  return {
    formData: state
  };
};

const mapDispatchToProps = dispatch => {
  return {
    updateData: formData => {
      dispatch(updateFormData(formData));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Form);