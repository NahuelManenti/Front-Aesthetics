import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useEffect, useState } from "react";
import '../css/Form.css';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Alert from 'react-bootstrap/Alert'
import { Link as LinkRouter } from 'react-router-dom'
import userActions from "../redux/actions/userActions";
import GoogleSignIn from "./GoogleSignIn";
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from 'react-router-dom'

function SignInForm(props) {

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const user = useSelector(state => state.userReducer.user)
  const snackbarMessage = useSelector(state => state.userReducer.snackbar.message)

  const [email, setEmail] = useState("email")
  const [password, setPassword] = useState("password")
  // const successIn = useSelector(state => state.usersReducer.snackbar.success)

  useEffect(() => {
    if (snackbarMessage != "") {
      dispatch(userActions.cleanMessage())
    }
  }, [])

  useEffect(() => {
    if (user !== null) {
      navigate('/home', { replace: true })
    }
  }, [user])

  function submitForm(event) {
    event.preventDefault()
    const loggedUser = {
      email: email,
      password: password,
      from: "Sign In"
    }
    dispatch(userActions.userSignIn(loggedUser))
  }


  return (
    <Form className="signupform-container px-4 py-3 d-flex flex-column mx-2">
      <Form.Group className="mb-2" controlId="formBasicEmail">
        <Form.Label className="fs-5 text-dark form-label border-5 px-2">Email</Form.Label>
        <Form.Control type="email" placeholder="Ingresar email" onChange={(event) => setEmail(event.target.value)} />
        <Form.Text className="text-muted ms-1">
          No compartiremos tu información con terceros.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3 mt-2" controlId="formBasicPassword">
        <Form.Label className="fs-5 text-dark form-label border-5 px-2">Contraseña</Form.Label>
        <Form.Control type="password" placeholder="Contraseña" onChange={(event) => setPassword(event.target.value)} />
      </Form.Group>

      <Alert className="form-label-alert px-1 text-center">
        {
          typeof (snackbarMessage) == typeof ('message') ?
            snackbarMessage :
            snackbarMessage.map(alert => <p className="my-1 text-dark" key={alert.message}>{alert.message}</p>)
        }
      </Alert>

      {/* <Form.Group className="" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Recordarme" />
      </Form.Group> */}

      <div className="d-flex flex-column align-items-center">
        <Button variant="primary" type="submit" id="confirm" className="align-self-center button-submit mb-2" onClick={submit => submitForm(submit)}>
          Iniciar sesión
        </Button>
        <GoogleSignIn />
        {/* <Button variant="primary" type="submit" className="align-self-center mt-2 button-submit">
            Or sign up with Google
          </Button> */}
      </div>


      <Form.Text className="fs-5 text-center mt-2">
        Si no tienes una cuenta, por favor
        <LinkRouter to='/signup' className='ms-1'>registrarse</LinkRouter>
        .
      </Form.Text>
    </Form>
  )
}

export default SignInForm;