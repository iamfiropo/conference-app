import React from 'react';

import './register.styles.scss';

import Talk from '../../components/talk/talk.component';
import Attendee from '../../components/attendee/attendee.component';

const Register = () => (
  <div className='register'>
    <Talk />
    <Attendee />
  </div>
);

export default Register;