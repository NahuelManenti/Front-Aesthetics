import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from 'react-redux'
import newsActions from "../redux/actions/newsActions";
import swal from 'sweetalert';

export default function AdminDeleteTreatment() {

  const dispatch = useDispatch();
  const user = useSelector(state => state.userReducer.user)
  // const id = useSelector(state => state.productsReducer.producto_a_eliminar)
  const id = useSelector(state => state.newsReducer.noticia_a_eliminar)


  const product = useSelector((store) => store.newsReducer.oneNew)


  
  // const messageAlert = useSelector(state => state.productReducer.snackbar.message)
  let messageAlert = '¡Novedad eliminada!'

  const [alert, setAlert] = useState(false)
  const [reload, setReload] = useState(false)

  const [productName, setProductName] = useState("")


  useEffect(() => {
    dispatch(newsActions.getOneNew(id))
  }, [])

  const idNews = id
  useEffect(() => {
    setProductName(product.name)
  }, [product]);


  useEffect(() => {
    setProductName('')
  }, [reload]);

  useEffect(() => {
    if (alert == true) {
      swal(messageAlert);
      setAlert(false)
    }
  }, [alert]);

  function submitForm(event) {
    event.preventDefault()
    const idUser = user.id
    // const productData = {
    //   id: id
    // }
    dispatch(newsActions.removeNew(idUser,idNews))
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
                ¡Aquí podrás eliminar novedades de tu tienda!
              </p>
            </div>
          </div>
          <div className="mt-2 md:mt-0 md:col-span-2">
            <form action="#" method="POST">
              <div className="shadow sm:rounded-md sm:overflow-hidden">
                <div className="px-4 py-4 bg-white space-y-6 sm:p-6">
                  <div className="grid grid-cols-3 gap-6">
                    <div className="col-span-3 sm:col-span-2">
                      <h3 className="text-lg font-medium leading-6 text-gray-900">Eliminar novedad</h3>
                      <div className="col-span-6 sm:col-span-3 mt-3">
                        <label htmlFor="product-name" className="block text-sm font-medium text-gray-700">
                          Título de la novedad: { product && <span>{product.name}</span>} 
                        </label>
                      </div>
                      <div className="col-span-6 sm:col-span-3 mt-3">
                        <div className="mt-1">
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="px-4 py-3 bg-gray-50 text-left sm:px-6">
                  <button
                    type="submit"
                    className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    onClick={submit => submitForm(submit)}
                  >
                    Eliminar novedad
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
