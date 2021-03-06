import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Cookies from 'js-cookie'
import { useDispatch, useSelector } from 'react-redux'
import { userLogin } from '../actions/userActions'

const Signin = (props) => {
  const [candidateData, setCandidateData] = useState({
    email: '',
    password: '',
  })

  const userCookie = Cookies.get('jwt')

  const user = useSelector((state) => state.login)

  const { loading, userInfos, error, loggedIn } = user

  const dispatch = useDispatch()

  useEffect(() => {
    setTimeout(() => {
      if (userCookie) {
        props.history.push('/home')
      }
    }, 1000)
  }, [userCookie, props.history])

  const handleChange = (event) => {
    setCandidateData({
      ...candidateData,
      [event.target.name]: event.target.value,
    })
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    dispatch(userLogin(candidateData))
    setCandidateData({
      email: '',
      password: '',
    })
  }

  return (
    <>
      {error && <span className='error'>{error}</span>}
      {loggedIn && <span className='success'>Login success</span>}
      <div className='form-container'>
        <div className='form-heading'>
          <h3>Welome Back</h3>
          <p>Enter your credentials to acccess your account</p>
        </div>

        <form onSubmit={handleSubmit}>
          <div className='input-container'>
            <i className='far fa-envelope icon'> </i>
            <input
              type='email'
              name='email'
              value={candidateData.email}
              onChange={handleChange}
              className='input-field'
              placeholder='Enter your email'
            />
          </div>

          <div className='input-container'>
            <i className='fas fa-lock icon'></i>
            <input
              type='password'
              name='password'
              value={candidateData.password}
              onChange={handleChange}
              className='input-field'
              placeholder='Enter your password'
            />
          </div>
          <button type='submit'>Sign in</button>
        </form>

        <div className='signup-link'>
          <p>don't have an account yet ?</p>
          <Link to='/signup'>
            <h4> Sign up</h4>
          </Link>
        </div>
      </div>
    </>
  )
}

export default Signin
