import React, { useEffect } from "react";
import jwt_decode from 'jwt-decode'
import { useDispatch } from "react-redux";
import userActions from "../redux/actions/userActions";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { useRef } from "react";
import { Link as LinkRouter, useNavigate } from 'react-router-dom'


export default function GoogleSignIn() {
  const dispatch = useDispatch();
  const navigate = useNavigate()

//   const successIn = useSelector(state => state.usersReducer.snackbar.success)

  async function handleCallbackResponse(response) {
    let userObject = jwt_decode(response.credential);
    dispatch(userActions.userSignIn({
      email: userObject.email,
      password: userObject.sub,
      from: 'google'
    }))
  }

  useEffect(() => {
    /* global google */
    google.accounts.id.initialize({
      client_id: '944760803646-kmg5a4njuo544v1qt4jh9anlvfjdcc6h.apps.googleusercontent.com',
      callback: handleCallbackResponse
    });

    google.accounts.id.renderButton(
      document.getElementById('buttonDiv'),
      { theme: 'filled_blue', size: 'medium' }
    )
  });

  return (
    <div>
      <div id='buttonDiv'></div>
    </div>
  )
}