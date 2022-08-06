const initialState = {
  carrito: [],
  productos: [],
  auxiliar: [],
  oneNew: {},
  snackbar: {
    view: false,
    message: '',
    success: false
  },
  handleCheckout: false,
  total: 0


}

let contenido = initialState.carrito

const checkoutReducer = (state = initialState, action) => {

  switch (action.type) {

    case "ADD_PRODUCT":
      let carrota = state.carrito.slice()
      let index = state.productos.indexOf(action.payload.id);
      if (index != -1) {
        carrota[index] = action.payload

      } else {
        carrota.push(action.payload)
      }
      return {
        ...state,
        carrito: carrota,
        auxiliar: action.payload,
        filter: action.payload
      }



    case "ADD_PRODUCT_ID":
      let indexota = state.productos.slice()
      let indexID = indexota.indexOf(action.payload);
      if (indexID != -1) {
        indexota[indexID] = action.payload
      } else {
        indexota.push(action.payload)
      }

      return {
        ...state,
        productos: indexota,
      }

    case "DELETE_PRODUCT":
      let carroto = state.carrito.slice()
      let indexDelete = state.productos.indexOf(action.payload.id);
      carroto.splice(indexDelete, 1);
      return {
        ...state,
        carrito: carroto,
      }

    case "DELETE_PRODUCT_ID":
      let indexoto = state.productos.slice()
      let indexotoID = state.productos.indexOf(action.payload);
      indexoto.splice(indexotoID, 1);
      return {
        ...state,
        productos: indexoto,
      }

    case 'HANDLE_CHECKOUT':
      return {
        ...state,
        handleCheckout: action.payload,
      }

    case "SET_TOTAL":
      return {
        ...state,
        total: action.payload
      }

    case "CLEAN_CARRITO":
      return {
        ...state,
        carrito: [],
        productos: []
      }

    case "SET_INFO":
      return {
        ...state,
        total: action.payload
      }


    default:
      return state
  }

}
export default checkoutReducer