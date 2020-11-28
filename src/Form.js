import React, { useState } from 'react';
import classes from './Form.module.css';

const Form = () => {
  const handleChange = ev => {
    const { name, value } = ev.target;
    setFormData(prev => ({...prev, [name]: value}));
  };

  const [formData, setFormData] = useState({
    name: '',
    surname: '',
    birthDate: '',
    select: ''
  });

  const handleSubmit = ev => {
    ev.preventDefault();
    console.log(formData);
    // console.log(JSON.stringify(formData));
  };

  return (
    <div className={classes.wrapper}>
      <div className={classes.container}>
        <form onSubmit={handleSubmit} className={classes.form}>
          <h2 className={classes.title}>Form</h2>
          <div className={classes.inputField}>
            <input name="name" onChange={handleChange} type="text" placeholder="Name" />
          </div>
          <div className={classes.inputField}>
              <input name="surname" onChange={handleChange} type="text" placeholder="Surmane" />
          </div>
          <div className={classes.inputField}>
              <input name="birthDate" onChange={handleChange} type="date" />
          </div>
          <div className={classes.inputField}>
              <select onChange={handleChange} name="select" className={classes.select}>
                  <option value="Star">&#9733;</option>
                  <option value="Heart">&#10084;</option>
                  <option value="Octagon">&#11042;</option>
              </select>
          </div>
          <input type="submit" value="Send" className={classes.btn} />
        </form>
      </div>
    </div>
  );
};

export default Form;
