import React, { useState } from 'react'
import "./Login.css";
import { useDispatch, useSelector } from 'react-redux';
import { fetchAuth, getAuthError, getAuthNetworkStatus, getToken } from '../../../reduxstore/features/auth/authSlice';
import { APISTATUS } from '../../../utilities/helper.ts';
import ErrorHandler from '../../common/errorhandler/Errorhandler.jsx';
import { Navigate } from 'react-router-dom';

const Login = () => {
  const [username,setUserName] = useState("");
  const [password,setPassword] = useState("");
  const handleChangeUserName=(e)=>{
    setUserName(e.target.value);
  }

  const handleChangePassword=(e)=>{
    setPassword(e.target.value);
  }
  const apiStatus = useSelector(getAuthNetworkStatus);
  const error = useSelector(getAuthError);
  const dispatch = useDispatch();
  function handleLogin(){
    let body={
      username,
      password
    }
    dispatch(fetchAuth(body));
  }

  const token = localStorage.getItem("token");
  if(apiStatus === APISTATUS.SUCCESS && token){
    return <Navigate  to={"/"}/>
  }

  return (
    <>
    {apiStatus === APISTATUS.IDLE ? <div className='loginContainer'>
      <input
          value={username}
          onChange={(e) => {
            handleChangeUserName(e);
          }}
          placeholder='Username'
          type='text'
          className='usernameInput'
        ></input>
         <input
          value={password}
          onChange={(e) => {
            handleChangePassword(e);
          }}
          placeholder='Password'
          type='password'
            className='passwordInput'
        ></input>
        <button onClick={handleLogin} className='loginButton'>Login</button>
    </div>
    : (
      <ErrorHandler
        content={error}
        requestStatus={apiStatus}
        name={"Home"}
      />
    )}
    </>
  )
}

export default Login;
