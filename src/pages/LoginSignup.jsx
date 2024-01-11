import React from 'react'
import "./Styles/login.scss"
import { useFormik } from 'formik'
import signupschema from './Schemas'

const initialValues = {
  name: "",
  email: "",
  password: ""
}

const LoginSignup = () => {

  const { values, touched, handleChange, handleBlur, handleSubmit, errors } = useFormik({
    initialValues,
    validationSchema:signupschema,
    onSubmit: (values,action) => {
      console.log(values)
      alert("form submited successfully")
      action.resetForm()
    }
  })


  return (
    <form className='login' onSubmit={handleSubmit}>
      <div className="login-container">
        <h1>Sign Up</h1>
        <div className="login-fields">
          <input type="text" name='name' value={values.name} onChange={handleChange} onBlur={handleBlur} placeholder='Your Name' />
          {errors.name && touched.name ? <p className="form-error">{errors.name}</p>:null}
          <input type="email" name='email' value={values.email} onChange={handleChange} onBlur={handleBlur} placeholder='Email Address' />
          {errors.email && touched.email ? <p className="form-error">{errors.email}</p>:null}
          <input type="password" name='password' values={values.password}  onChange={handleChange} onBlur={handleBlur} placeholder='Password' />
          {errors.password && touched.password ? <p className="form-error">{errors.password}</p>:null}
        </div>
        <button type='submit'>Continue</button>
        <p>Already have an account? <span>Login Here</span></p>
        <div className="agree">
          <input type="checkbox" name='' id='agree' />
          <label htmlFor='agree'>By Continuing, i agree to the term of use & privacy policy.  </label>
        </div>
      </div>
    </form>
  )
}

export default LoginSignup
