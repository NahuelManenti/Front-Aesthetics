import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from 'react-redux'
import treatmentsActions from "../redux/actions/treatmentsActions";
import swal from 'sweetalert';

export default function AdminModifyTreatment() {
  const dispatch = useDispatch();
  const user = useSelector(state => state.userReducer.user)
  const id = useSelector(state => state.productsReducer.tratamiento_a_modificar)
  // const messageAlert = useSelector(state => state.productReducer.snackbar.message)
  let messageAlert = '¡Tratamiento modificado!'

  const [alert, setAlert] = useState(false)
  const [reload, setReload] = useState(false)

  const [treatmentName, setTreatmentName] = useState("")
  const [treatmentDetails, setTreatmentDetails] = useState("")
  const [treatmentHigh, setTreatmentHigh] = useState('')

  const treatment = useSelector((store) => store.productsReducer.oneProduct)

  useEffect(() => {
    dispatch(treatmentsActions.getOneTreatment(id))
  }, [])


  useEffect(() => {
    setTreatmentName('')
    setTreatmentDetails('')
    setTreatmentHigh('')
  }, [reload]);

  useEffect(() => {
    setTreatmentName(treatment.name)
    setTreatmentDetails(treatment.datails)
  }, [treatment]);

  useEffect(() => {
    if (alert == true) {
      swal(messageAlert);
      setAlert(false)
    }
  }, [alert]);

  function submitForm(event) {
    event.preventDefault()
    const idUser = user.id
    const treatmentData = {
      name: treatmentName,
      datails: treatmentDetails,
      highlight: treatmentHigh,
      idUser: idUser
    }
    dispatch(treatmentsActions.modifyTreatment(treatmentData,id))
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
                ¡Aquí podrás modificar tratamientos de tu tienda!
              </p>
            </div>
          </div>
          <div className="mt-2 md:mt-0 md:col-span-2">
            <form action="#" method="POST">
              <div className="shadow sm:rounded-md sm:overflow-hidden">
                <div className="px-4 py-4 bg-white space-y-6 sm:p-6">
                  <div className="grid grid-cols-3 gap-6">
                    <div className="col-span-3 sm:col-span-2">
                      <h3 className="text-lg font-medium leading-6 text-gray-900">Modificar tratamiento</h3>
                      <div className="col-span-6 sm:col-span-3 mt-3">
                        <label htmlFor="product-name" className="block text-sm font-medium text-gray-700">
                          Nombre del tratamiento:
                        </label>
                        <input
                          type="text"
                          name="product-name"
                          id="product-name"
                          autoComplete="given-name"
                          className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                          onChange={(event) => setTreatmentName(event.target.value)}
                          value={treatmentName}
                        />
                      </div>
                      <div className="col-span-6 sm:col-span-3 mt-3">
                        <label htmlFor="product-highlight" className="mt-3 block text-sm font-medium text-gray-700">
                          Es un tratamiento destacado:
                        </label>
                        <select onChange={(event) => setTreatmentHigh(event.target.value)} className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" aria-label="Default select example">
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
                          
                            onChange={(event) => setTreatmentDetails(event.target.value)}
                            value={treatmentDetails}
                          />
                        </div>
                      </div>
                     
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Foto del tratamiento:</label>
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
                            <input id="file-upload" name="file-upload" type="file" className="sr-only" />
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
                    onClick={submit => submitForm(submit)}
                  >
                    Modificar tratamiento
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
