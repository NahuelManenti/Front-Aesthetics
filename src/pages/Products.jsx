import React, { useState } from "react";
import MultiActionAreaCard from "../components/CardProducts";
import productActions from "../redux/actions/productActions";
import { useDispatch, useSelector } from "react-redux";
import {Link as LinkRouter} from "react-router-dom";
import { useParams } from 'react-router-dom';
import Button from "react-bootstrap/esm/Button";

export default function Products() {
  const [search, setSearch] = React.useState('')
  const dispatch = useDispatch()
  const user = useSelector((store)=>store.userReducer.user)
  const[categorias, setCategorias] = useState([]);
  const[categoriasFiltradas, setCategoriasFiltradas] = useState([]);

  React.useEffect(() => {
    dispatch(productActions.filterProducts(search))
  }, [search]);
  const product = useSelector(store => store.productsReducer.filter)
  const filtered = useSelector(store => store.productsReducer.filterbybrand)

  React.useEffect(() => {
    setCategorias(product.map(producto => producto.brand))
    setCategoriasFiltradas(categorias.filter( (ele,pos)=>categorias.indexOf(ele) == pos))
  }, [product]);

  return (
    <>
  
      <div className='padre-buscadores'>
        <div className='divInput'>
          <input className='inputSearch'
            type='text'
            placeholder='Buscar por producto'
            onKeyUp={(e) => {
              setSearch(e.target.value)
            }}
          />
        </div>
        <div className="btn-admin">
      {(user && user.role == 'admin' && 
      <LinkRouter to='/adminaddproduct' className='agregar-adm'>
        <h5><button className="button3">Agregar producto</button></h5>
      </LinkRouter> )}
      </div>
        <select onChange={(event) => dispatch(productActions.filterProductsbyBrand(product, event.target.value))} className="barra-marcas mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" aria-label="Default select example">
          <option selected>Buscar por marca</option>
          {
          categoriasFiltradas.map(categoria =>
            <option value={categoria}>{categoria}</option>
          )}
        </select>
      </div>

      <div className="padre-card-products">
        {filtered.length > 0 ?
          <MultiActionAreaCard cardFilter={filtered} />
          :
          product.length > 0 ? <MultiActionAreaCard cardFilter={product} /> : <div><img  className="border-img" src="https://i.ibb.co/y80GpYz/2.png" alt="nohayresultados"/></div>
        }

      </div>
    </>
  );
}