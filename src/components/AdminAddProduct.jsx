
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from 'react-redux'
import productActions from "../redux/actions/productActions";
import swal from 'sweetalert';
import { Link as LinkRouter, useNavigate } from 'react-router-dom'

export default function AdminAddProduct() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector(state => state.userReducer.user)
  // const messageAlert = useSelector(state => state.productsReducer.snackbar.message)
  let messageAlert = '¡Producto Cargado!'

  const [alert, setAlert] = useState(false)
  const [reload, setReload] = useState(false)

  const [productName, setProductName] = useState("")
  const [productBrand, setProductBrand] = useState("")
  const [productPrice, setProductPrice] = useState(0)
  const [productDescription, setProductDescription] = useState("")
  const [useMode, setUseMode] = useState("")
  const [productImage, setProductImage] = useState("")
  const [productStock, setProductStock] = useState(0)
  const [productHigh, setProductHigh] = useState("")

  // useEffect(() => {
  //   if (messageAlert.startsWith('Haz')) {
  //     navigate('/home', {replace:true})
  //   }
  // }, [messageAlert])



  useEffect(() => {
    setProductName('')
    setProductBrand('')
    setProductPrice(0)
    setProductDescription('')
    setUseMode('')
    setProductImage('')
    setProductStock(0)
  }, [reload]);

  useEffect(() => {
    if (alert == true) {
      swal(messageAlert);
      setAlert(false)
    }
  }, [alert]);
  const [files,setFiles] = useState([])
  async function  handleCreation(event) {
    event.preventDefault()
    const file = await files[0]
    const idUser = await user.id
    const formData = new FormData()
            formData.append('name',await productName)
            formData.append('brand',await productBrand)
            formData.append('price',await productPrice)
            formData.append('description',await productDescription)
            formData.append('useMode',await useMode)
            formData.append('idUser',await idUser)
            formData.append('productStock',await productStock)
            formData.append('productHigh', productHigh)
            formData.append('file',file)
        await dispatch(productActions.addProduct(formData))
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
                ¡Aquí podrás agregar productos a tu tienda!
              </p>
            </div>
          </div>
          <div className="mt-2 md:mt-0 md:col-span-2">
            <form action="#" method="POST">
              <div className="shadow sm:rounded-md sm:overflow-hidden">
                <div className="px-4 py-4 bg-white space-y-6 sm:p-6">
                  <div className="grid grid-cols-3 gap-6">
                    <div className="col-span-3 sm:col-span-2">
                      <h3 className="text-lg font-medium leading-6 text-gray-900">Agregar producto</h3>
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
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Foto del producto:</label>
                    <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                      <div className="space-y-1 text-center">
                        <svg
                          className="mx-auto h-12 w-12 text-gray-400"
                          stroke="currentColor"
                          fill="none"
                          viewBox="0 0 48 48"
                          aria-hidden="true"
                        >
                          <path
                            d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                            strokeWidth={2}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                        <div className="flex text-sm text-gray-600">
                          <label
                            htmlFor="file-upload"
                            className="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500"
                          >
                            <span>Subir una imagen</span>
                            <input onChange={(event)=>setFiles(event.target.files)} id="file-upload" name="file-upload" type="file" className="sr-only"  required />
                          </label>
                          <p className="pl-1">o arrastrar aquí y soltar.</p>
                        </div>
                        <p className="text-xs text-gray-500">PNG, JPG, GIF up to 10MB</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="px-4 py-3 bg-gray-50 text-center sm:px-6">
                  <button
                    type="submit"
                    className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    onClick={submit => handleCreation(submit)}
                  >
                    Agregar producto
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
