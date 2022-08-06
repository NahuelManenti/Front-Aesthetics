import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import "../css/Details.css";
import Nav from 'react-bootstrap/Nav';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { useState } from 'react';
import productActions from '../redux/actions/productActions';
import checkoutActions from '../redux/actions/checkoutActions';
import { useDispatch } from 'react-redux';
import {Link as LinkRouter} from "react-router-dom";


export default function DetailsProducts() {

const{id}= useParams()
const dispatch = useDispatch()
useEffect(()=>{
  dispatch(productActions.getOneProduct(id))
},[])
const product = useSelector((store)=>store.productsReducer.oneProduct)
const carrito = useSelector((store)=>store.checkoutReducer.carrito)
const[cantidad, setCantidad] = useState(1)

let data = {
  id: id,
  name: product.name,
  image: product.image,
  price: product.price,
  cantidad: cantidad,
  stock: product.productStock,
  subtotal: cantidad * product.price
}

const user = useSelector((store)=>store.userReducer.user)

  return (
    <div className="padre-details-products">
    <div className="card-detalles">
    <Card style={{ width: '15rem' }}>
      <Card.Img variant="top" src={product.image} />
      <Card.Body>
        <Card.Title>{product.name}</Card.Title>
        <Card.Title>${product.price}</Card.Title>
        <Card.Title>Stock: {product.productStock}</Card.Title>
        {user && user.role =='admin'? <></> : <input className="cantidad-product" type="number" min='0' max={product.productStock} placeholder={cantidad} onChange={(event) => setCantidad(event.target.value) } />}
        {user && user.role =='admin'? <></> : <Button className="boton-carrito" onClick={() => dispatch(checkoutActions.addProduct(data))}>Añadir al carrito</Button> }
        {(user && user.role == 'admin' && <LinkRouter to='/adminmodifyproduct' className='modificar-adm' onClick={() => dispatch(productActions.productoaModificar(id))}><h5><button className='button'>Modificar</button></h5></LinkRouter> 
              )}
        {(user && user.role == 'admin' && <LinkRouter to='/admindeleteproduct' className='eliminar-adm' onClick={() => dispatch(productActions.productoaEliminar(id))}><h5><button className='button2'>Eliminar</button></h5></LinkRouter> 
              )}
      </Card.Body>
    </Card>
    </div>

    <div className='tabs-detalles-modo'>
    <Tabs 
      defaultActiveKey="descripcion"
      id="uncontrolled-tab-example"
      className="mb-3"
    >
      <Tab className="font-details-products" eventKey="descripcion" title="Descripción" tabClassName="color-solapa">
        {product.description}
      </Tab>
      <Tab className="font-details-products" eventKey="modoDeUso" title="Modo de uso" tabClassName="color-solapa">
        {product.useMode}
      </Tab>
    </Tabs>
    </div>

    
    </div>
  );
}





