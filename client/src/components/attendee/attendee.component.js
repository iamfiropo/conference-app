import React, { Component } from 'react';
import axios from 'axios';

import "./attendee.styles.scss";

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

class Attendee extends Component {
  constructor() {
    super();

    this.state = {
      email: '',
      firstName: '',
      lastName: '',
      phoneNumber: '',
      address: '',
      isSpeaker: false
    }
  }

  handleCheckBoxChange = event => {
    this.setState({ isSpeaker: event.target.checked });
  }

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value })
  }

  handleSubmit = event => {
    event.preventDefault();

    const { 
      email, firstName, lastName, phoneNumber, address, isSpeaker 
    } = this.state;

    const attendee = {
      email, firstName, lastName, phoneNumber, address, isSpeaker
    };

    axios
      .post('/api/v1/attendee', attendee)
      .then(() => alert('Attendee Added Successfully'))
      .catch(error => console.error(error));
  }

  render() {
    const { 
      email, firstName, lastName, phoneNumber, address, isSpeaker 
    } = this.state; 
    
    return (
      <div className='attendee'>
        <h2 className='email'>Kindly register attendee:</h2>
        <form onSubmit={this.handleSubmit}>
          <FormInput 
            name='email'
            type='email'
            value={email}
            label='Email'
            handleChange={this.handleChange}
            required
          />
          <FormInput 
            name='firstName'
            type='text'
            value={firstName}
            label='First Name'
            handleChange={this.handleChange}
            required
          />
          <FormInput 
            name='lastName'
            type='text'
            value={lastName}
            label='Last Name'
            handleChange={this.handleChange}
            required
          />
          <FormInput 
            name='phoneNumber'
            type='tel'
            value={phoneNumber}
            label='Phone Number'
            handleChange={this.handleChange}
            required
          />
          <FormInput 
            name='address'
            type='text'
            value={address}
            label='Address'
            handleChange={this.handleChange}
            required
          />
          <FormInput 
            name='isSpeaker'
            type='checkbox'
            value={isSpeaker}
            label='Speaker'
            checkBoxStyle
            handleCheckBoxChange={this.handleCheckBoxChange}
          />
          <CustomButton type='submit'>REGISTER ATTENDEE</CustomButton>
        </form>        
      </div>
    )
  }
}

export default Attendee;