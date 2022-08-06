import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from 'react-redux'
import newsActions from "../redux/actions/newsActions";
import swal from 'sweetalert';

export default function AdminModifyTreatment() {

  const dispatch = useDispatch();
  const user = useSelector(state => state.userReducer.user)
  const id = useSelector(state => state.newsReducer.noticia_a_modificar)


  // const messageAlert = useSelector(state => state.productReducer.snackbar.message)
  let messageAlert = '¡Noticia modificada!'

  const [alert, setAlert] = useState(false)
  const [reload, setReload] = useState(false)

  const [newsName, setNewsName] = useState("")
  const [newsDescription, setNewsDescription] = useState("")
 
  const news = useSelector((store) => store.newsReducer.oneNew)

  useEffect(() => {
    dispatch(newsActions.getOneNew(id))
  }, [])


  useEffect(() => {
    setNewsName('')
    setNewsDescription('')
  }, [reload]);

  useEffect(() => {
    setNewsName(news.name)
    setNewsDescription(news.description)
  }, [news]);

  useEffect(() => {
    if (alert == true) {
      swal(messageAlert);
      setAlert(false)
    }
  }, [alert]);

  function submitForm(event) {
    event.preventDefault()
    const idUser = user.id

    const newsData = {
      name: newsName,
      description: newsDescription,
      idUser: idUser,
      
    }
    dispatch(newsActions.modifyNews(newsData,id))
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
                ¡Aquí podrás modificar novedades en tu tienda!
              </p>
            </div>
          </div>
          <div className="mt-2 md:mt-0 md:col-span-2">
            <form action="#" method="POST">
              <div className="shadow sm:rounded-md sm:overflow-hidden">
                <div className="px-4 py-4 bg-white space-y-6 sm:p-6">
                  <div className="grid grid-cols-3 gap-6">
                    <div className="col-span-3 sm:col-span-2">
                      <h3 className="text-lg font-medium leading-6 text-gray-900">Modificar novedad</h3>
                      <div className="col-span-6 sm:col-span-3 mt-3">
                        <label htmlFor="news-name" className="block text-sm font-medium text-gray-700">
                          Título de la novedad:
                        </label>
                        <input
                          type="text"
                          name="news-name"
                          id="news-name"
                          autoComplete="given-name"
                          className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                          onChange={(event) => setNewsName(event.target.value)}
                          value={newsName}
                        />
                      </div>
                      <div className="col-span-6 sm:col-span-3 mt-3">
                        <label htmlFor="news-description" className="mt-3 block text-sm font-medium text-gray-700">
                          Contenido de la novedad:
                        </label>
                        <div className="mt-1">
                          <textarea
                            id="about"
                            name="about"
                            rows={3}
                            className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border border-gray-300 rounded-md"
                            placeholder="Descripción del producto."
                            defaultValue={''}
                            onChange={(event) => setNewsDescription(event.target.value)}
                            value={newsDescription}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Foto de la novedad:</label>
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
                    Modificar novedad
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
