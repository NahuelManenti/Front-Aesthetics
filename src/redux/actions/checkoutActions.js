import axios from 'axios'

let urlLocalHost = 'https://teamlate-back.herokuapp.com/'


const checkoutActions = {
    addProduct: (data)=>{
        return async(dispatch,getState)=>{
            dispatch({type:'ADD_PRODUCT', payload: data})
            dispatch({type:'ADD_PRODUCT_ID', payload: data.id})

        }
    },

    deleteProduct: (data)=>{
        return async(dispatch,getState)=>{
            dispatch({type:'DELETE_PRODUCT', payload: data})
            dispatch({type:'DELETE_PRODUCT_ID', payload: data.id})

        }
    },

    handleCheckout: (boolean) => {
        return async(dispatch, getState) =>{
            dispatch({type: 'HANDLE_CHECKOUT', payload:boolean})
        }
    },

    setTotal: (data)=>{
        return async(dispatch,getState)=>{
            dispatch({type:'SET_TOTAL', payload: data})
            

        }
    },

    cleanCarrito: ()=>{
        return async(dispatch,getState)=>{
            dispatch({type:'CLEAN_CARRITO'})

        }
    },


    // sendInfo: (dataCheckout, basket)=>{
    //     let data = {dataCheckout, basket}
    //     return async(dispatch,getState)=>{
    //         console.log(data)
    //         const res = await axios.post("https://teamlate-back.herokuapp.com", {data})
    //         // dispatch({type:'SET_INFO', payload: res})
    //     }
    // },



    shippingForm: (formData)=>{
        // return async(dispatch,getState)=>{
        //     const res = await axios.post(urlLocalHost+"api/checkout/shipping",formData)
        //      dispatch({
        //         type: 'message',
        //         payload: {
        //             view: true,
        //             message: res.data.message,
        //             success: res.data.success
        //         }
        //     })
        // }
    }
 }

export default checkoutActions
