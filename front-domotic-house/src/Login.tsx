import React from 'react'
import './Login.css'

const Login = () => {
  let name: string = "juan";

  return (
    <section>
      <form>
      <div className='form-group'>
        <label>Email address</label>
        <input type='email' className="form-control" placeholder="Enter email" aria-describedby="emailHelp"/>
        <small id="emailHelp" className="form-text text-muted">We ll never share your email with anyone else.</small>
      </div>
      <div className='form-group'>
        <label>Password</label>
        <input type='password' className="form-control" placeholder="Password"/>
      </div>
      <div className='form-check'>
        <input type="checkbox" className="form-check-input"/>
        <label className="form-check-label">Check me out</label>
      </div>
      <button type='submit' className='btn btn-primary'>Submit</button>
    </form> 
    </section>
  )
}

export default Login