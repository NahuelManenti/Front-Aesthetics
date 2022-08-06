import React, { useEffect, useState } from "react";
import '../css/Form.css';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Alert from 'react-bootstrap/Alert'
import { Link as LinkRouter, useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import userActions from "../redux/actions/userActions";
import GoogleSignUp from "./GoogleSignUp";

function SignUpForm(props) {

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const user = useSelector(state => state.userReducer.user)
  const snackbarMessage = useSelector(state => state.userReducer.snackbar.message)

  const [name, setName] = useState("")
  const [lastname, setLastname] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [photo, setPhoto] = useState("")

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

  useEffect(() => {
    if (typeof (snackbarMessage) == typeof ('message') && snackbarMessage.startsWith('Felicidades')) {
      navigate('/signIn', { replace: true })
    }
  }, [snackbarMessage])

  function submitForm(event) {
    event.preventDefault()

    const userData = {
      name: name,
      lastName: lastname,
      email: email,
      password: password,
      confirmPass: confirmPassword,
      from: "Sign Up",
      role: 'user'
    }
    dispatch(userActions.userSignUp(userData))
  }

  return (
    <Form method="post" id="formSignUp" className="signupform-container px-4 py-3 d-flex flex-column mx-2">
      <Form.Group className="mb-2">
        <Form.Label className="fs-5 text-dark form-label border-5 px-2">Nombre</Form.Label>
        <Form.Control type="text" name="Name" placeholder="Ingresar nombre" onChange={(event) => setName(event.target.value)} />
        <Form.Label className="fs-5 text-dark mt-2 form-label border-5 px-2">Apellido</Form.Label>
        <Form.Control type="text" placeholder="Ingresar apellido" onChange={(event) => setLastname(event.target.value)} />

        <Form.Label className="fs-5 text-dark mt-2 form-label border-5 px-2">Email</Form.Label>
        <Form.Control type="email" placeholder="Ingrese email" onChange={(event) => setEmail(event.target.value)} />
        <Form.Text className="text-muted ms-1">
          No compartiremos tu información con terceros.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label className="fs-5 text-dark form-label border-5 px-2">Contraseña</Form.Label>
        <Form.Control type="password" placeholder="Contraseña" onChange={(event) => setPassword(event.target.value)} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicConfirmPassword">
        <Form.Label className="fs-5 text-dark form-label border-5 px-2">Confirmar contraseña</Form.Label>
        <Form.Control type="password" placeholder="Confirmar contraseña" onChange={(event) => setConfirmPassword(event.target.value)} />
      </Form.Group>

      {/* <Form.Group className="" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Recordarme" />
      </Form.Group> */}

      <Alert className="form-label-alert px-1 text-center">
        {
          typeof (snackbarMessage) == typeof ('message') ?
            snackbarMessage :
            snackbarMessage.map(alert => <p className="my-1 text-dark" key={alert.message}>{alert.message}</p>)
        }
      </Alert>

      <div className="d-flex flex-column align-items-center">
        <Button variant="primary" type="submit" id="confirm" className="align-self-center button-submit mb-2" onClick={submit => submitForm(submit)}>
          Registrarme
        </Button>
        <GoogleSignUp />
        {/* <Button variant="primary" type="submit" className="align-self-center mt-2 button-submit">
          Or sign up with Google
        </Button> */}
      </div>

      <Form.Text className="fs-5 text-center">
        Si ya tienes cuenta, por favor
        <LinkRouter to='/signin' className='ms-1'>iniciar sesión</LinkRouter>
        .
      </Form.Text>
    </Form>
  )
}

export default SignUpForm;
