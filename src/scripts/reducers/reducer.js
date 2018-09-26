/* Estado inicial de la aplicación*/
const initialState = {
  personas: {
    isLoading: false,
    state: false,
    error: false
  }
}

/**
 * @author Roel Mendoza
 * @description Este metodo denominado reducer se encarga de manejar el estado en lo que concierne a personas (state.personas)
 * @param {Object} state objeto que representa el estado de la aplicación, mas espesificamente a lo relacionado con personas
 * @param {Object} action la acción despachada y que sera manejada por este reducer
 * @returns {Object} el nuevo estado 
 */
const personasReducer = (state = { isLoading: false, state: false, error: false }, action) => {
  switch (action.type) {
    case 'POSTING':
      return Object.assign({}, state, { isLoading: true })
    case 'GET_SUCCED':
      return Object.assign({}, state, { state: action.data })
  }
}

/**
 * @author Roel Mendoza
 * @description Este es el reducer principal de la aplicación, incluira todos los casos posibles de acciones en la aplicación 
 * y llamara a los reducers espesificos para cada parte del state
 * @param {Object} store objeto store que representa el estado general de nuestra aplicación
 * @param {Object} action la acción despachada y que sera manejada por los reducers de redux  
 * @returns {Object} el nuevo estado de la aplicación  
 */
const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_PERSONAS':
    case 'GET_SUCCED':
      return Object.assign({}, state, {
        personas: personasReducer(state.personas, action)
      })
    default:
      return state
  }
}

export default rootReducer
