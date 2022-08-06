import React, { useEffect } from "react";
import jwt_decode from 'jwt-decode'
import { useDispatch } from "react-redux";
import userActions from "../redux/actions/userActions";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { useRef } from "react";

export default function GoogleSignUp(props) {
  const dispatch = useDispatch();

  async function handleCallbackResponse(response) {
    let userObject = jwt_decode(response.credential);
    dispatch(userActions.userSignUp({
      name: userObject.given_name,
      lastName: userObject.family_name,
      // photo: userObject.picture,
      email: userObject.email,
      password: userObject.sub,
      confirmPass: userObject.sub,
      role: 'user',
      from: 'google',
    }))
  }

  useEffect(() => {
    /* global google */
    google.accounts.id.initialize({
      // client_id: process.env.GOOGLE_CLIENT_ID,
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