import axios from 'axios'

let urlLocalHost = 'https://backend-aesthetics.up.railway.app/'


const newsActions = {

    getNews: () => {
        return async(dispatch, getState) => {
            const res = await axios.get(urlLocalHost+"api/news")
            dispatch({type:'GET_NEWS', payload:res.data.response})
            
        }
    },
    getOneNew: (id) => {
        return async(dispatch, getState) => {
            
                const res = await axios.get(urlLocalHost+`api/news/${id}`)
                dispatch({type:'ONE_NEW', payload:res.data.response})
          
        }
    },
    addNews: (formData)=>{
        return async(dispatch,getState)=>{
            const res = await axios.post(urlLocalHost+"api/news/upload",formData)
             dispatch({
                type: 'message',
                payload: {
                    view: true,
                    message: res.data.message,
                    success: res.data.success
                }
            })
        }
    },
    modifyNews: (news,id)=>{
        return async (dispatch,getState)=>{
            const res = await axios.put(urlLocalHost+`api/news/${id}`,{ news })
           
            dispatch({
                type: 'message',
                payload: {
                    view: true,
                    message: res.data.message,
                    success: res.data.success
                }
            })
        }

    },
    removeNew: (idUser,idNews) => {
        return async(dispatch, getState) => {
            try {
                const res = await axios.delete(urlLocalHost+`api/products/${idNews}/${idUser}`)
                dispatch({type:'DEL_PRODUCT', payload:res.data.response})
            }catch (err) {
                console.log(err)
            }
        }
    },
    noticiasaModificar: (id) => {
        return async(dispatch, getState) => {

                dispatch({type:'NOTICIA_A_MODIFICAR', payload: id})

        }
    },
    noticiasaEliminar: (id) => {
        return async(dispatch, getState) => {

                dispatch({type:'NOTICIA_A_ELIMINAR', payload: id})

        }
    },
}
export default newsActions


