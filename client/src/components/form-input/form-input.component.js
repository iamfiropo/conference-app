import React from 'react';

const FormInput = ({ label, handleChange, ...otherProps }) => (
  <div className='group'>
    <input 
      className='form-input'
      onChange={handleChange}
      { ...otherProps }
    />
    {
      label
    }
  </div>
);

export default FormInput;