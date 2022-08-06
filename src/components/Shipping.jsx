
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from 'react-redux'
import productActions from "../redux/actions/productActions";
import swal from 'sweetalert';
import PayPal from "./PayPal";
import { comment } from "postcss";
import checkoutActions from '../redux/actions/checkoutActions';

export default function Shipping() {

  const dispatch = useDispatch();
  const user = useSelector(state => state.userReducer.user)
  const messageAlert = useSelector(state => state.productsReducer.snackbar.message)
  // let messageAlert = '¡Hola!'

  const [alert, setAlert] = useState(false)
  const [reload, setReload] = useState(false)

  const [sucursal, setSucursal] = useState('yes')
  const [name, setName] = useState('')
  const [lastName, setLastName] = useState('')
  const [phone, setPhone] = useState('')
  const [country, setCountry] = useState('')
  const [adress, setAdress] = useState('')
  const [city, setCity] = useState('')
  const [province, setProvince] = useState('')
  const [zipCode, setZipCode] = useState('')
  const [comments, setComments] = useState('')

  useEffect(() => {
    if (alert == true) {
      swal(messageAlert);
      setAlert(false)
    }
  }, [alert]);

  async function handleForm(event) {
    event.preventDefault()
    let formData = {
      sucursal: sucursal,
      name: name,
      lastName: lastName,
      phone: phone,
      country: country,
      adress: adress,
      city: city,
      province: province,
      zipCode: zipCode,
      comments: comments
    }
    dispatch(checkoutActions.shippingForm(formData))
    setAlert(!alert)
    setReload(!reload)
  }

  return (
    <>
      <div className="mt-10 sm:mt-0">
        <div className="md:grid md:grid-cols-3 md:gap-6">
          {/* <div className="md:col-span-1">
            <div className="px-4 sm:px-0">
              <h3 className="text-lg font-medium leading-6 text-gray-900 mt-4">Datos de envío</h3>
              <p className="mt-1 text-sm text-gray-600">¡Aquí podrás cargar los datos para el envío de tu compra!.</p>
            </div>
          </div>
          <div className="mt-4 md:mt-0 md:col-span-2">
            <form action="#" method="POST">
              <div className="shadow overflow-hidden sm:rounded-md">
                <div className="px-4 py-5 bg-white sm:p-6">
                  <label htmlFor="product-highlight" className="mt-0 block text-sm font-medium text-gray-700">
                    Retiro en sucursal:
                  </label>
                  <select onChange={(event) => setSucursal(event.target.value)} className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" aria-label="Default select example">
                    <option value='yes'>Sí</option>
                    <option value='no' >No</option>
                  </select>
                  { sucursal == 'yes' ? 
                  <p className="mt-3">Retira en sucursal</p>
                  :
                  
                  
                  <div className="grid grid-cols-6 gap-6 mt-10">
                    <div className="col-span-6 sm:col-span-3">
                      <label htmlFor="first-name" className="block text-sm font-medium text-gray-700">
                        Nombre
                      </label>
                      <input
                        type="text"
                        name="first-name"
                        id="first-name"
                        autoComplete="given-name"
                        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                        onChange={(event) => setName(event.target.value)}
                      />
                    </div>

                    <div className="col-span-6 sm:col-span-3">
                      <label htmlFor="last-name" className="block text-sm font-medium text-gray-700">
                        Apellido
                      </label>
                      <input
                        type="text"
                        name="last-name"
                        id="last-name"
                        autoComplete="family-name"
                        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                        onChange={(event) => setLastName(event.target.value)}
                      />
                    </div>

                    <div className="col-span-6 sm:col-span-4">
                      <label htmlFor="email-address" className="block text-sm font-medium text-gray-700">
                        Teléfono
                      </label>
                      <input
                        type="text"
                        name="email-address"
                        id="email-address"
                        autoComplete="email"
                        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                        onChange={(event) => setPhone(event.target.value)}
                      />
                    </div>

                    <div className="col-span-6 sm:col-span-3">
                      <label htmlFor="country" className="block text-sm font-medium text-gray-700">
                        País
                      </label>
                      <select
                        id="country"
                        name="country"
                        autoComplete="country-name"
                        className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        onChange={(event) => setCountry(event.target.value)}
                       > 
                        <option>Argentina</option>
                      </select>
                    </div>

                    <div className="col-span-6">
                      <label htmlFor="street-address" className="block text-sm font-medium text-gray-700">
                        Dirección
                      </label>
                      <input
                        type="text"
                        name="street-address"
                        id="street-address"
                        autoComplete="street-address"
                        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                        onChange={(event) => setAdress(event.target.value)}
                    />
                    </div>

                    <div className="col-span-6 sm:col-span-6 lg:col-span-2">
                      <label htmlFor="city" className="block text-sm font-medium text-gray-700">
                        Ciudad
                      </label>
                      <input
                        type="text"
                        name="city"
                        id="city"
                        autoComplete="address-level2"
                        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                        onChange={(event) => setCity(event.target.value)}
                      />
                    </div>

                    <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                      <label htmlFor="region" className="block text-sm font-medium text-gray-700">
                        Provincia
                      </label>
                      <input
                        type="text"
                        name="region"
                        id="region"
                        autoComplete="address-level1"
                        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                        onChange={(event) => setProvince(event.target.value)}
                      />
                    </div>

                    <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                      <label htmlFor="postal-code" className="block text-sm font-medium text-gray-700">
                        Código postal
                      </label>
                      <input
                        type="text"
                        name="postal-code"
                        id="postal-code"
                        autoComplete="postal-code"
                        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                        onChange={(event) => setZipCode(event.target.value)}
                      />
                    </div>
                  </div>}
                  <label htmlFor="product-description" className="mt-3 block text-sm font-medium text-gray-700">
                    Comentarios adicionales:
                  </label>
                  <div className="mt-1">
                    <textarea
                      id="about"
                      name="about"
                      rows={3}
                      className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border border-gray-300 rounded-md"
                      placeholder="Detalles para la entrega"
                      onChange={(event) => setComments(event.target.value)}
                      value={comments}
                    />
                  </div>
                </div>
              </div>
            </form>
          </div> */}
        </div>
      </div>

      {/* <div className="hidden sm:block" aria-hidden="true">
        <div className="py-5">
          <div className="border-t border-gray-200" />
        </div>
      </div> */}
      <div className="mt-10 sm:mt-0 border-t border-black-700">
        <div className="md:grid md:grid-cols-3 md:gap-6">
          <div className="md:col-span-1 mt-4">
            <div className="px-4 sm:px-0">
              <h3 className="text-lg font-medium leading-6 text-gray-900">Pagar compra</h3>
              <p className="mt-1 text-sm text-gray-600">¡Pagá seguro con PayPal!</p>
            </div>
          </div>
          <div className="mt-5 flex justify-center md:mt-0 md:col-span-2">
            <PayPal />
          </div>
        </div>
      </div>
    </>
  )
}
