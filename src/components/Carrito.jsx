import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useEffect, useState } from "react";
import '../css/Form.css';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Alert from 'react-bootstrap/Alert'
import { Link as LinkRouter } from 'react-router-dom'
import userActions from "../redux/actions/userActions";
import checkoutActions from "../redux/actions/checkoutActions";
import PayPal from "../components/PayPal";


import GoogleSignIn from "./GoogleSignIn";
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from 'react-router-dom'




export default function Carrito() {

const dispatch = useDispatch();

  const carrito = useSelector((store) => store.checkoutReducer.carrito)
  
  const[cantidad, setCantidad] = useState(1)
  // const[total, setTotal] = useState(0)
  let total = 0;

  for(let i=0 ; i < carrito.length ; i++) {
    total += (carrito[i].subtotal)
  }

  return (

    <div>
      {(carrito && carrito.map(producto =>
        <div>
          <p>Nombre: {producto.name}</p>
          <p>Precio Unidad:{producto.price}</p>
          {/* <input type="number" placeholder={producto.cantidad} min='0' max={producto.stock} /> */}
          <p>Cantidad: {producto.cantidad}</p>
          <p>Subtotal: {producto.subtotal} </p>
          <br></br>
        </div>
      )
      )}
    <p>Total: {total}</p>
    <PayPal total={total} />
    </div>





  )


}