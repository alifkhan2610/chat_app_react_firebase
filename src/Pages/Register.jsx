import React from 'react'
import img from '../assets/png-transparent-add-image-icon.png'
const Register = () => {
  return (
    <div className='formContainer'>
      <div className='formWrapper'>
        <span className='logo'>Lama chat</span>
        <span className='title'>Register</span>
            <form action="">
                <input type="text" placeholder='Display Name'/>
                <input type="email" placeholder='email'/>
                <input type="password" placeholder='password'/>
                <input style={{display:"none"}} type="file" id='file'/>
                <label htmlFor="file">
                  <img src={img} alt="add picture" height={50} width={50}  />
                  <span>Add an avater</span>
                </label>
                <button>Sign up</button>
            </form>
            <p>Do you have any Account? Login</p>
      </div>
    </div>
  )
}

export default Register
