import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { withRouter } from 'react-router-dom'
import { userLogout } from '../actions/userActions'

const Header = (props) => {
  const userLogin = useSelector((state) => state.login)

  const {
    userInfos: { user },
  } = userLogin

  const dispatch = useDispatch()

  const handleLogout = (event) => {
    event.preventDefault()
    dispatch(userLogout())
  }

  return (
    <header>
      <div className='header-title'>
        <h2>Welcome, {user.username}</h2>
      </div>
      <div className='header-user'>
        <button type='button' onClick={handleLogout}>
          Logout
        </button>
      </div>
    </header>
  )
}

export default withRouter(Header)
