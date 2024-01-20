import React from 'react'
import img from '../assets/png-transparent-add-image-icon.png'
const Login = () => {
  return (
    <div className='formContainer'>
      <div className='formWrapper'>
        <span className='logo'>Lama chat</span>
        <span className='title'>Login</span>
            <form action="">
                <input type="email" placeholder='email'/>
                <input type="password" placeholder='password'/>
                <button>Sign in</button>
            </form>
            <p>Don't you have any Account? Register</p>
      </div>
    </div>
  )
}

export default Login
