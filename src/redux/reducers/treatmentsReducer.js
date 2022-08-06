const initialState ={
    treatments:[],
    auxiliar:[],
    oneTreatment:{},
    filter:[],
    tratamiento_a_modificar:'',
    tratamiento_a_eliminar:''


}

const treatmentsReducer = (state = initialState, action)=>{

    switch(action.type){

        case "GET_TREATMENTS":
            return{
              ...state,
              treatments: action.payload,
              auxiliar: action.payload,
              filter: action.payload
            }
            case 'TRAATAMIENTO_A_MODIFICAR':
        return{
          ...state,
          tratamiento_a_modificar: action.payload

        }
        case 'TRAATAMIENTO_A_ELIMINAR':
        return{
          ...state,
          tratamiento_a_eliminar: action.payload

        }
        case "ONE_TREATMENT":
        return {
            ...state,
            oneTreatment: action.payload
            
            
          }
          case"FILTER_TREATMENTS":
          let treatmentFilter =  state.treatments.filter(treatment=>treatment.name.toLowerCase().startsWith(action.payload.trim().toLowerCase()))
          return {
            ...state,
           filter:treatmentFilter
          }
            default:
                return state
    }

}
export default treatmentsReducer