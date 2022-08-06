import axios from 'axios'

let urlLocalHost = 'https://teamlate-back.herokuapp.com/'

const productActions = {

    getProducts: () => {
        return async(dispatch, getState) => {
            const res = await axios.get(urlLocalHost+"api/products")
            dispatch({type:'GET_PRODUCTS', payload:res.data.response.products})
            
        }
    },

    addProduct: (formData)=>{
       
            return async(dispatch,getState)=>{
                const res = await axios.post(urlLocalHost+"api/products/upload",formData)
                 dispatch({
                    type: 'message',
                    payload: {
                        view: true,
                        message: res.data.message,
                        success: res.data.success
                    }
                })
            }
        }
        
    ,
    modifyProduct: (product,id)=>{
        return async (dispatch,getState)=>{
            const res = await axios.put(urlLocalHost+`api/products/${id}`,{product})
            
           
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

    removeProduct: (idUser,idProduct) => {
        return async(dispatch, getState) => {
            try {
                const res = await axios.delete(urlLocalHost+`api/products/${idProduct}/${idUser}`)
                
                dispatch({type:'DEL_PRODUCT', payload:res.data.response})
                
            }catch (err) {
                console.log(err)
            }
        }
    },

    getOneProduct: (id) => {
        return async(dispatch, getState) => {
            
                const res = await axios.get(urlLocalHost+`api/products/${id}`)
                dispatch({type:'ONE_PRODUCT', payload:res.data.response})
          
        }
    },
    productoaModificar: (id) => {
        return async(dispatch, getState) => {

                dispatch({type:'PRODUCTO_A_MODIFICAR', payload: id})

        }
    },
    productoaEliminar: (id) => {
        return async(dispatch, getState) => {

                dispatch({type:'PRODUCTO_A_ELIMINAR', payload: id})

        }
    },
    filterProducts: (input) => {
        return (dispatch,getState)=>{
            dispatch({type:'FILTER_PRODUCTS', payload:input})
        }
    },
    filterProductsbyBrand: (product, checkbox) => {
        let filtered = product.filter(producto => producto.brand == checkbox)
        return (dispatch,getState)=>{
            dispatch({type:'FILTER_PRODUCTS_BY_BRAND', payload:filtered})
        }
    }

}

export default productActions