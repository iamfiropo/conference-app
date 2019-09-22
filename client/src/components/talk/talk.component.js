import React, { Component } from 'react';
import axios from 'axios';
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

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

    // axios({
    //   method: 'post',
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    //   url: '/talk',
    //   data: talk
    // })
    // .then(() => alert('Successfully Created'))
    // .catch(error => console.error(error));

    axios
      .post('/talk', talk)
      .then(() => alert('Successfully Created'))
      .catch(error => console.error(error));
  }

  render() {
    const { title, startTime, endTime } = this.state; 
    
    return (
      <div className='talk'>
        <form onSubmit={this.handleSubmit}>
          <FormInput 
            name='title'
            type='title'
            value={title}
            label='Title'
            handleChange={this.handleChange}
            required
          />
          <DatePicker 
            name='startTime'
            type='startTime'
            label='Start Time'
            value={startTime}
            selected={startTime}
            handleChange={this.handleChange}
            showTimeSelect
            showTimeSelectOnly
            timeIntervals={15}
            timeCaption="Time"
            dateFormat="h:mm aa"
            required
          />
          <DatePicker 
            name='endTime'
            selected={endTime}
            handleChange={this.handleChange}
            showTimeSelect
            showTimeSelectOnly
            timeIntervals={15}
            timeCaption="Time"
            dateFormat="h:mm aa"
            required
          />
          <CustomButton type='submit'>Register</CustomButton>
        </form>        
      </div>
    )
  }
}

export default Talk;