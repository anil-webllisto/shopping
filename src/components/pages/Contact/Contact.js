import React from 'react';
import Header from '../../elements/Header/Header';
import './Contact.css';
import { useForm } from 'react-hook-form';
import classNames from 'classnames';
const Contact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {};
  return (
    <>
      <Header />
      <div className='Container mx-auto p-0'>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className='container-fluid register_from p-0'>
            <div className='row'>
              <div className='col-md-6 mt-4 mb-4 mx-auto from_register '>
                <h3 className='text-center'>Registration Form</h3>
                <div className='row '>
                  <div className='col-lg-6 col-md-6   form_padding mb-1'>
                    <label>First Name</label>
                    <br />
                    <input
                      type='text '
                      name='firstname'
                      // className='col-lg-12   Field_field'
                      className={classNames('form-control input-name ', { 'is-valid': true })}
                      placeholder='Enter First Name'
                      maxLength='20'
                      {...register('firstname', {
                        required: 'This field is required firstName',
                        minLength: {
                          value: 4,
                          message: 'please enter your fullname minimum 4 character',
                        },
                      })}
                    />
                    {errors.firstname && (
                      <div className='is-valid-feedback text-danger'>{errors.firstname.message} </div>
                    )}
                  </div>
                  <div className='col-lg-6 col-md-6  form_padding mb-1'>
                    <label>Last Name </label>
                    <br />
                    <input
                      type='text'
                      name='lastname'
                      id='Last_Name'
                      // className='col-md-12 Field_field '
                      className={classNames('form-control  input-name ', { 'is-valid': true })}
                      placeholder='Enter Last Name'
                      maxLength='20'
                      {...register('lastname', {
                        required: 'This field is required LastNames',
                        minLength: {
                          value: 4,
                          message: 'please enter your fullname minimum 4 character',
                        },
                      })}
                    />
                    {errors.lastname && <div className='valid-feedback  text-danger'> {errors.lastname.message} </div>}
                  </div>
                </div>
                <div className='row '>
                  <div className='col-lg-6 mt-1 col-md-6 form_padding mb-2'>
                    <label>Email </label>
                    <br />
                    <input
                      type='email'
                      name='email'
                      // className='col-md-12  Field_field'
                      className={classNames('form-control input-name  ', { 'is-valid': true })}
                      placeholder='Enter your Email'
                      {...register('email', {
                        required: 'This field is required email',
                        pattern: {
                          value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                          message: 'invalid email address',
                        },
                      })}
                    />
                    {errors.email && <div className='valid-feedback  text-danger'> {errors.email.message} </div>}
                  </div>
                  <div className='col-lg-6 mt-1 col-md-6 form_padding mb-1'>
                    <label>Password :- </label>
                    <br />
                    <input
                      type='password'
                      name='password'
                      // className='col-md-12 Field_field '
                      className={classNames('form-control input-name  ', { 'is-valid': true })}
                      placeholder='Enter your  password'
                      {...register('password', {
                        required: 'This field is required password',
                        pattern: {
                          value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})/,
                          message: 'Password must have at least 8 characters',
                        },
                      })}
                    />
                    {errors.password && <div className='valid-feedback  text-danger'> {errors.password.message} </div>}
                  </div>
                </div>
                <div className='row   mb-1'>
                  <div className='col-lg-6 mt-2  col-md-6 form_padding mb-2'>
                    <label>Phone No. :- </label>
                    <br />
                    <input
                      type='text'
                      name='phone'
                      // className='col-md-12 Field_field'
                      className={classNames('form-control  input-name ', { 'is-valid': true })}
                      placeholder='Enter your Phone Number'
                      maxLength='10'
                      {...register('phone', {
                        required: 'This field is required phone',
                        pattern: {
                          value: /^([+]?[s0-9]+)?(d{3}|[(]?[0-9]+[)])?([-]?[s]?[0-9])+$/i,
                          message: 'please Enter your valid phone number 10 digit maximum',
                        },
                      })}
                    />
                    {errors.phone && <div className='valid-feedback  text-danger'> {errors.phone.message} </div>}
                  </div>
                  <div className='col-lg-6 col-md-6 mt-1 mb-2 padding_zero  '>
                    <label>Gender: </label>
                    <br />
                    <label>Male </label>&nbsp;
                    <input
                      type='radio'
                      value='male'
                      name='gender'
                      {...register('radio', { required: 'This field is required male' })}
                    />
                    &nbsp;
                    <label>Female</label>&nbsp;
                    <input
                      type='radio'
                      value='female'
                      name='gender'
                      {...register('radio', { required: 'This field is required female' })}
                    />
                    &nbsp;
                    <label>other</label>&nbsp;
                    <input
                      type='radio'
                      value='other'
                      name='gender'
                      {...register('radio', { required: 'This field is required other' })}
                    />
                    {errors.radio && <div className='form-text text-danger '>{errors.radio.message} </div>}
                  </div>
                </div>
                <div className='row '>
                  <div className='col-lg-6 col-md-6  mt-2 col-md-6form_padding'>
                    <label> Select Language</label>
                    <br />
                    <select
                      className={classNames('form-control input-name  ', { 'is-valid': true })}
                      {...register('state', {
                        required: 'This field is required Select Language',
                      })}
                      name='state'
                    >
                      <option value=''>----Select your language ----- </option>
                      <option value='html'>HTML</option>
                      <option value='css'>CSS</option>
                      <option value='javascript'>JAVASCRIPT</option>
                      <option value='react js'>REACT JS </option>
                      <option value='next js'>NEXT JS </option>
                    </select>
                    {errors.state && <div className='valid-feedback  text-danger'>{errors.state.message} </div>}
                  </div>

                  <div className='col-lg-6 mt-2 col-md-6 form_padding mb-2 bg-white'>
                    <label>Date </label>
                    <br />
                    <input
                      type='date'
                      className={classNames('form-control  input-name ', { 'is-valid': true })}
                      name='date'
                      {...register('date', {
                        required: 'This field is required date',
                      })}
                    />
                    {errors.date && <div className='valid-feedback  text-danger'>{errors.date.message} </div>}
                  </div>
                </div>
                <div className='row '>
                  <div className='col-lg-6 col-md-6 mt-2 form_padding '>
                    <label>Address :- </label>
                    <br />
                    <textarea
                      type='textarea'
                      name='address'
                      rows='2'
                      cols='20'
                      minLength='10'
                      ref={register}
                      className={classNames('form-control   ', { 'is-valid': true })}
                      {...register('address', {
                        required: 'This field is required address',
                      })}
                    />
                    {errors.address && <div className='is-valid-feedback  text-danger'>{errors.address.message} </div>}
                  </div>

                  <div className='col-lg-6  mt-2 col-md-6 form_padding'>
                    <label>Select City:- </label>
                    <br />
                    <label> Indore </label>&nbsp;
                    <input
                      type='checkbox'
                      value='indore'
                      className='mt-2 '
                      name='city'
                      {...register('checkbox', {
                        required: 'This field is required indore',
                      })}
                    />
                    &nbsp;
                    <label>Bhopal </label>&nbsp;
                    <input
                      type='checkbox'
                      value='bhopal'
                      name='city'
                      {...register('checkbox', {
                        required: 'This field is required bhopal',
                      })}
                    />
                    &nbsp;
                    <label> Guna </label>&nbsp;
                    <input
                      type='checkbox'
                      value='guna'
                      name='city'
                      {...register('date', {
                        required: 'This field is required guna',
                      })}
                    />
                    {errors.checkbox && <div className='text-field  text-danger'>{errors.checkbox.message} </div>}
                  </div>
                </div>
                <div className='row mt-2 '>
                  <div className='col-lg-6 col-md-6 col-sm-6  mt-3 form_padding'>
                    <label>Select a file:</label>
                    <br />
                    <input
                      type='file'
                      name='image'
                      className={classNames('form-control  input-name ', { 'is-valid': true })}
                      {...register('image', {
                        required: 'This field is required image',
                        validate: {
                          lessThan10MB: (files) => files[0]?.size < 1000000 || 'Max 10MB',
                          acceptedFormats: (files) =>
                            ['image/jpeg', 'image/png', 'image/gif'].includes(files[0]?.type) || 'Only PNG, JPEG e GIF',
                          message: 'image invalid',
                        },
                      })}
                    />
                    {errors.image && (
                      <div className=' is-valid-feedback text-field  text-danger'>{errors.image.message} </div>
                    )}
                  </div>

                  <div className='row mt-5 btn-class col-sm-6  col-md-6 col-lg-6 justify-content-center'>
                    <div className='col-lg-6  col-md-6  col-sm-6 form_padding '>
                      <button type='submit' value='submit'>
                        submit
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};
export default Contact;
