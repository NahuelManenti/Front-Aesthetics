const initialState ={
    products:[],
    auxiliar:[],
    oneProduct:{},
    snackbar: {
      view: false,
      message: '',
      success:false},
    filter:[],
    filterbybrand:[],
    producto_a_modificar:'',
    producto_a_eliminar:''
    
}

const productsReducer = (state = initialState, action)=>{

    switch(action.type){

        case "GET_PRODUCTS":
          
            return{
              ...state,
              products: action.payload,
              auxiliar: action.payload,
              filter: action.payload

            }
            // case "GET_PRODUCTS_HIGH":
          
            // return{
            //   ...state,
            //   highProducts:action.payload,
              

            // }

            case 'PRODUCTO_A_MODIFICAR':
        return{
          ...state,
          producto_a_modificar: action.payload

        }
        case 'PRODUCTO_A_ELIMINAR':
        return{
          ...state,
          producto_a_eliminar: action.payload

        }
        case "ONE_PRODUCT":
        return {
            ...state,
            oneProduct: action.payload
            
            
          }
          case 'message':
            return {
                ...state,
                snackbar: action.payload,   
            }
          case"FILTER_PRODUCTS":
          let productFilter =  state.products.filter(product=>product.name.toLowerCase().includes(action.payload.trim().toLowerCase()))
          return {
            ...state,
           filter:productFilter
          }
          case"FILTER_PRODUCTS_BY_BRAND":
          // let productFilterByBrand =  state.products.filter(product=> product.brand===action.payload.brand)
          return {
            ...state,
           filterbybrand:action.payload
          }
            default:
                return state
    }

}
export default productsReducer
