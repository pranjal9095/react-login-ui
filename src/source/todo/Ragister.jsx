import React, { useState } from 'react'
import '../CssFils/Ragister.css'

const Ragister = () => {
  const [user, setUser] = useState({
    username: "",
    Email: "",
    password: "",
    newpassword: ""
  })

  const handleValidation = (e) => {
    const { name, value } = e.target;
    setUser((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (event) => {
    event.preventDefalit();

    const formData = {
      username: user.username,
      Email: user.Email,
      password: user.password,
      newpassword: user.newpassword
    };

    console.log(formData);

  }
  return (
    <>
      <div className='container'>

        <div className='user'>
          <span className='greeting'>Hello, {user.username}</span>
          <span className='login_page'>Already have an account?</span>
          <button type='button' className='loginBtn'>Login now</button>
        </div>

        <form className='form' onSubmit={handleSubmit}>
          <h1 className='info'>Register here -</h1>

          <input type='text' placeholder='Name' name='username' autoComplete='off' value={user.username} onChange={handleValidation} />
          <input type='email' placeholder='Email' name='Email' autoComplete='off' value={user.Email} onChange={handleValidation} />
          <input type='password' placeholder='Password' name='password' autoComplete='off' value={user.password} onChange={handleValidation} />
          <input type='password' placeholder='Confirm Password' name='newpassword' autoComplete='off' value={user.newpassword} onChange={handleValidation} />

          <button type='submit' className='ragisterBtn'>Register now</button>
        </form>
      </div>
    </>
  )
}

export default Ragister
