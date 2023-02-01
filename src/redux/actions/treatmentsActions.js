import axios from 'axios'

let urlLocalHost = 'https://backend-aesthetics.up.railway.app/'

const treatmentsActions = {

    getTreatments: () => {
        return async(dispatch, getState) => {
            const res = await axios.get(urlLocalHost+"api/treatment")
            
            dispatch({type:'GET_TREATMENTS', payload:res.data.response.treatments})
            
        }
    },

    addTreatment: (formData)=>{
        return async(dispatch,getState)=>{
            const res = await axios.post(urlLocalHost+"api/treatment/upload",formData)
            // dispatch({type:'UPLOAD_TREATMENT', payload:res.data.response})
        }
    },


    modifyTreatment: (treatment,id)=>{
        return async (dispatch,getState)=>{
            const res = await axios.put(urlLocalHost+`api/treatment/${id}`,{treatment})
           
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

    removeTreatment: (idUser,idTreatment) => {
        return async(dispatch, getState) => {
            try {
                const res = await axios.delete(urlLocalHost+`api/products/${idTreatment}/${idUser}`)
                dispatch({type:'DEL_TREATMENT', payload:res.data.response})
            }catch (err) {
                console.log(err)
            }
        }
    },

    getOneTreatment: (id) => {
        return async(dispatch, getState) => {
            
                const res = await axios.get(urlLocalHost+`api/treatment/${id}`)
                 
                dispatch({type:'ONE_TREATMENT', payload:res.data.response})
          
        }
    },
    tratamientoaModificar: (id) => {
        return async(dispatch, getState) => {

                dispatch({type:'TRATAMIENTO_A_MODIFICAR', payload: id})

        }
    },
    tratamientoaEliminar: (id) => {
        return async(dispatch, getState) => {

                dispatch({type:'TRATAMIENTO_A_ELIMINAR', payload: id})

        }
    },

    filterTreatments: (input) => {
        return (dispatch,getState)=>{
            dispatch({type:'FILTER_TREATMENTS', payload:input})
        }
    }
}

export default treatmentsActions