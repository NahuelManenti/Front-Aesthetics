const initialState ={
    news:[],
    auxiliar:[],
    oneNew:{},
    snackbar: {
      view: false,
      message: '',
      success:false},
  
    noticia_a_modificar:'',
    noticia_a_eliminar:''
    
}

const newsReducer = (state = initialState, action)=>{

    switch(action.type){

        case "GET_NEWS":
          
            return{
              ...state,
              news: action.payload,
              auxiliar: action.payload,
              filter: action.payload

            }
            case "ONE_NEW":
            return {
                ...state,
                oneNew: action.payload
                
                
              }
           

            case 'NOTICIA_A_MODIFICAR':
        return{
          ...state,
          noticia_a_modificar: action.payload

        }
        case 'NOTICIA_A_ELIMINAR':
        return{
          ...state,
          noticia_a_eliminar: action.payload

        }
       
          case 'message':
            return {
                ...state,
                snackbar: action.payload,   
            }
         
            default:
                return state
    }

}
export default newsReducer