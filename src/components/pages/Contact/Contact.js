import React from 'react';
import { useState } from 'react';
import Header from '../../elements/Header/Header';
import '../Contact/Contact.css';

const Contact = () => {
  const [usererror, setUsererror] = useState(false);
  const [passworderror, setPassworderror] = useState(false);

  function validate(e) {
    e.preventDefault();
  }

  function username(e) {
    const usernames = e.target.value;
    if (usernames.length < 3 || usernames.length >= 20) {
      setUsererror(true);
    } else {
      setUsererror(false);
    }
  }

  function passwords(e) {
    const passwordes = e.target.value;
    if (passwordes.length < 3 || passwordes.length >= 10) {
      setPassworderror(true);
    } else {
      setPassworderror(false);
    }
  }

  return (
    <>
      <Header />
      <form method='' action='' name='stud_forms' onSubmit={validate}>
        <div className='container-fluid register_from'>
          <div className='row'>
            <div className='col-md-6 mt-4 mb-4 mx-auto from_register '>
              <h3 className='text-center'>Registration Form</h3>
              <from>
                <div className='row '>
                  <div className='col-lg-6 form_padding'>
                    <label>User Name</label>
                    <br />
                    <input
                      type='text '
                      className='col-lg-6  input_field'
                      placeholder='Enter First Name'
                      onChange={username}
                    />{' '}
                    {usererror ? <span style={{ color: 'red' }}>invalid user</span> : ''}
                  </div>
                  <div className='col-lg-6 form_padding'>
                    <label>Last Name </label>
                    <br />
                    <input
                      type='text'
                      className='col-md-6 input_field '
                      placeholder='Enter Last Name'
                      onChange={passwords}
                    />
                    {passworderror ? <span style={{ color: 'red' }}>invalid user</span> : ''}
                  </div>
                </div>
                <div className='row mt-3'>
                  <div className='col-lg-6 form_padding'>
                    <label>Email </label>
                    <br />
                    <input type='email' className='col-md-6  input_field' placeholder='Enter your Email' />
                  </div>
                  <div className='col-lg-6 form_padding'>
                    <label>Password :- </label>
                    <br />
                    <input type='password' className='col-md-6 input_field ' placeholder='Enter your  password' />
                  </div>
                </div>
                <div className='row  mt-3'>
                  <div className='col-lg-6 form_padding'>
                    <label>Phone No. :- </label>
                    <br />
                    <input type='number' className='col-md-4 input_field ' placeholder='Enter your Phone Number' />
                  </div>
                  <div className='col-lg-6 form_padding'>
                    <label>Gender :- </label>
                    <br />
                    Male : <input type='radio' /> Female : <input type='radio' /> other : <input type='radio' />
                  </div>
                </div>
                <div className='row mt-3'>
                  <div className='col-lg-6 form_padding'>
                    <label> Select Language :-</label>
                    <br />
                    <select style={{ width: '100%', height: '30px' }}>
                      <option value='html'>HTML</option>
                      <option value='css'>CSS</option>
                      <option value='javascript'>JAVASCRIPT</option>
                      <option value='react js'>REACT JS </option>
                      <option value='next js'>NEXT JS </option>
                    </select>
                  </div>
                  <div className='col-lg-6 form_padding'>
                    <label>Zip Code :- </label>
                    <br />
                    <input type='number' className='col-lg-6 input_field' placeholder='Enter your Placeholder ' />
                  </div>
                </div>
                <div className='row mt-3'>
                  <div className='col-lg-6 form_padding '>
                    <label>Address :- </label>
                    <br />
                    <input type='textarea' className=' col-lg-6 input_field' />
                  </div>
                  <div className='col-lg-6 form_padding'>
                    <lable>Select City:- </lable>
                    <br />
                    Indore : &nbsp;
                    <input type='checkbox' value='indore' className='mt-3' />
                    &nbsp; Bhopal : &nbsp; <input type='checkbox' value='bhopal' /> &nbsp; Guna :{' '}
                    <input type='checkbox' value='guna' />
                  </div>
                </div>{' '}
                <div className='row mt-3'>
                  <div className='col-lg-6  form_padding'>
                    <label>Select a file:</label>
                    <br />
                    <input type='file' />
                  </div>
                  <div className='col-lg-6 form_padding'>
                    <label>Date </label>
                    <br />
                    <input type='date' style={{ width: '100%' }} />
                  </div>
                </div>
                <div className='row mt-3'>
                  <div className='col-lg-6 form_padding '>
                    <button type='submit'>Register</button>
                  </div>
                  <div className='col-lg-6 form_padding '>
                    <button type='submit '>Reset</button>
                  </div>
                </div>
              </from>
            </div>
          </div>
        </div>
      </form>
    </>
  );
};

export default Contact;
