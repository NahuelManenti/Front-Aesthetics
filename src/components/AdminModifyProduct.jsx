import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from 'react-redux'
import productActions from "../redux/actions/productActions";
import swal from 'sweetalert';
import { Link as LinkRouter, useNavigate } from 'react-router-dom'

export default function AdminAddProduct() {
  const navigate = useNavigate();

  const dispatch = useDispatch();
  const user = useSelector(state => state.userReducer.user)
  const id = useSelector(state => state.productsReducer.producto_a_modificar)


  // const messageAlert = useSelector(state => state.productsReducer.snackbar.message)
  let messageAlert = '¡Producto modificado!'

  const [alert, setAlert] = useState(false)
  const [reload, setReload] = useState(false)

  const [productName, setProductName] = useState("")
  const [productBrand, setProductBrand] = useState("")
  const [productPrice, setProductPrice] = useState(0)
  const [productDescription, setProductDescription] = useState("")
  const [useMode, setUseMode] = useState("")
  const [productImage, setProductImage] = useState("")
  const [productStock, setProductStock] = useState(0)
  const [productHigh, setProductHigh] = useState(false)

  const product = useSelector((store)=>store.productsReducer.oneProduct)

  // useEffect(() => {
  //   if (messageAlert.startsWith('Haz')) {
  //     swal(messageAlert);
  //     setAlert(false)
  //     navigate('/home', {replace:true})
  //   }
  // }, [alert])

  useEffect(()=>{
    dispatch(productActions.getOneProduct(id))
  },[])


  useEffect(() => {
    setProductName('')
    setProductBrand('')
    setProductPrice(0)
    setProductDescription('')
    setUseMode('')
    setProductImage('')
  }, [reload]);

  useEffect(() => {
    setProductName(product.name)
    setProductBrand(product.brand)
    setProductPrice(product.price)
    setProductDescription(product.description)
    setUseMode(product.useMode)
    setProductStock(product.productStock)
  }, [product]);

  useEffect(() => {
    if (alert == true) {
      swal(messageAlert);
      setAlert(false)
    }
  }, [alert]);

  
  


  function submitForm(event) {
    event.preventDefault()
    const idUser = user.id


    const productData = {
      name: productName,
      brand: productBrand,
      price: productPrice,
      description: productDescription,
      useMode: useMode,
      idUser: idUser,
      productStock: productStock,
      productHigh: productHigh

    }
    dispatch(productActions.modifyProduct(productData,id))
    setAlert(!alert)
    setReload(!reload)
  }

  return (
    <>
      <div>
        <div className="md:grid md:grid-cols-3 md:gap-6">
          <div className="md:col-span-1">
            <div className="px-4 sm:px-0 mt-2">
              <h3 className="text-lg font-medium leading-6 text-gray-900">Panel del Administrador</h3>
              <p className="mt-1 text-sm text-gray-600">
                ¡Aquí podrás modificar productos de tu tienda!
              </p>
            </div>
          </div>
          <div className="mt-2 md:mt-0 md:col-span-2">
            <form action="#" method="POST">
              <div className="shadow sm:rounded-md sm:overflow-hidden">
                <div className="px-4 py-4 bg-white space-y-6 sm:p-6">
                  <div className="grid grid-cols-3 gap-6">
                    <div className="col-span-3 sm:col-span-2">
                      <h3 className="text-lg font-medium leading-6 text-gray-900">Modificar producto</h3>
                      <div className="col-span-6 sm:col-span-3 mt-3">
                        <label htmlFor="product-name" className="block text-sm font-medium text-gray-700">
                          Nombre del producto:
                        </label>
                        <input
                          type="text"
                          name="product-name"
                          id="product-name"
                          autoComplete="given-name"
                          className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                          onChange={(event) => setProductName(event.target.value)}
                          value={productName}
                        />
                      </div>
                      <div className="col-span-6 sm:col-span-3 mt-3">
                        <label htmlFor="product-brand" className="block text-sm font-medium text-gray-700">
                          Marca del producto:
                        </label>
                        <input
                          type="text"
                          name="product-brand"
                          id="product-brand"
                          autoComplete="given-brand"
                          className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                          onChange={(event) => setProductBrand(event.target.value)}
                          value={productBrand}
                        />
                      </div>
                      <div className="mt-3">
                        <label htmlFor="product-price" className="block text-sm font-medium text-gray-700">
                          Precio:
                        </label>
                        <div className="mt-1 relative rounded-md shadow-sm">
                          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <span className="text-gray-500 sm:text-sm">$</span>
                          </div>
                          <input
                            type="number"
                            name="product-price"
                            id="product-price"
                            className="focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-7 pr-3 sm:text-sm border-gray-300 rounded-md"
                            placeholder="0.00"
                            onChange={(event) => setProductPrice(event.target.value)}
                            value={productPrice}
                          />
                        </div>
                      </div>
                      <div className="col-span-6 sm:col-span-3 mt-3">
                        <div className="col-span-6 sm:col-span-3 mt-3">
                          <label htmlFor="product-stock" className="block text-sm font-medium text-gray-700">
                            Stock:
                          </label>
                          <input
                            type="number"
                            name="product-stock"
                            id="product-stock"
                            autoComplete="given-price"
                            className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                            onChange={(event) => setProductStock(event.target.value)}
                            value={productStock}
                          />
                        </div>
                        <label htmlFor="product-highlight" className="mt-3 block text-sm font-medium text-gray-700">
                          Es un producto destacado:
                        </label>
                        <select onChange={(event) => setProductHigh(event.target.value)} className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" aria-label="Default select example">
                           <option defaultValue={false} >No</option>
                           <option value={true}>Sí</option>
                        </select>
                        <label htmlFor="product-description" className="mt-3 block text-sm font-medium text-gray-700">
                          Descripción:
                        </label>
                        <div className="mt-1">
                          <textarea
                            id="about"
                            name="about"
                            rows={3}
                            className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border border-gray-300 rounded-md"
                            placeholder="Descripción del producto."
                          
                            onChange={(event) => setProductDescription(event.target.value)}
                            value={productDescription}
                          />
                        </div>
                      </div>
                      <div className="col-span-6 sm:col-span-3 mt-3">
                        <label htmlFor="product-useMode" className="block text-sm font-medium text-gray-700">
                          Modo de uso:
                        </label>
                        <div className="mt-1">
                          <textarea
                            id="about"
                            name="about"
                            rows={3}
                            className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border border-gray-300 rounded-md"
                            placeholder="Modo de uso del producto."
                            onChange={(event) => setUseMode(event.target.value)}
                            value={useMode}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="px-4 py-3 bg-gray-50 text-center sm:px-6">
                  <button
                    type="submit"
                    className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    onClick={submit => submitForm(submit)}
                  >
                    Modificar producto
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}
