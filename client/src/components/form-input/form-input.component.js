import React from 'react';

import './form-input.styles.scss';

const FormInput = ({ checkBoxStyle, label, handleChange, handleCheckBoxChange, ...otherProps }) => (
  <div className='group'>
    <input 
      className={`${ checkBoxStyle ? 'checkBoxStyle' :'form-input' }`}
      onChange={handleChange || handleCheckBoxChange}
      { ...otherProps }
    />
    {label ? (
        <label className={`${ otherProps.value.length ? 'shrink' : '' } form-input-label`}>
          {label}
        </label>
      ) : null
      }
  </div>
);

export default FormInput;