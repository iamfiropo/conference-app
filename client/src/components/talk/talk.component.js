import React, { Component } from 'react';
import axios from 'axios';

import "./talk.styles.scss";

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

class Talk extends Component {
  constructor() {
    super();

    this.state = {
      title: '',
      startTime: new Date(),
      endTime: new Date(),
      startDate: new Date()
    }
  }

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value })
  }

  handleSubmit = event => {
    event.preventDefault();

    const { title, startTime, endTime } = this.state;

    const talk = {
      title, startTime, endTime
    };

    axios
      .post('/api/v1/talk', talk)
      .then(() => alert('Successfully Created'))
      .catch(error => console.error(error));
  }

  render() {
    const { title, startTime, endTime } = this.state; 
    
    return (
      <div className='talk'>
        <h2 className='title'>Kindly register your talk here:</h2>
        <form onSubmit={this.handleSubmit}>
          <FormInput 
            name='title'
            type='title'
            value={title}
            label='Title'
            handleChange={this.handleChange}
            required
          />
          <FormInput 
            name='startTime'
            type='time'
            value={startTime}
            label='Start Time'
            handleChange={this.handleChange}
            required
          />
          <FormInput 
            name='endTime'
            type='time'
            value={endTime}
            label='End Time'
            handleChange={this.handleChange}
            required
          />
          <CustomButton type='submit'>REGISTER TALK</CustomButton>
        </form>        
      </div>
    )
  }
}

export default Talk;