import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { getPersonas } from '../../scripts/actions'
import { PersonasViewComponent } from '../views/dashboard/personas-view/personas-view.component'

/**
 * @author Roel Mendoza
 * @description Este metodo forma parte de la libreria react-redux, nos permite mapear el estado actual 
 * de la aplicación y pasar los datos necesarios de este a nuestro target component como propiedades del
 * componente.
 * @param {Object} state objeto con el estado actual de la aplicación
 * @returns {Object} objeto con propiedades que recibira nuestro target component.
 */
const mapStateToProps = (state) => {
  return {
    personas: state.personas.state
  }
}

/**
 * @author Roel Mendoza
 * @description Este metodo forma parte de la libreria react-redux, nos permito mapear las acciones que podran ser
 * despachadas como consecuencia de eventos dentro de nuestra aplicacion
 * @param {function} dispatch funcion que despacha las acciones para que sean manejadas por el reducer de redux
 * @returns {Object} objeto con propiedades que recibira nuestro target component.
 */
const mapDispatchToProps = (dispatch) => (
  {
    onClickButton: () => {
      dispatch(getPersonas())
    }
  }
)

/**
 * @author Roel Mendoza
 * @description Este metodo forma parte de la libreria react-redux, nos permite crear un componente acción partiendo
 * de dos funciones especiales que nos ayudan a mapear las propiedades de nuestro target component, este tipo de 
 * componentes forman la tercera capa de nuestros componentes, y generalmente su función sera dar funcionalidad
 * a los View Components 
 * @returns {Object} Action component del target component.
 */
export const PersonasViewActions = withRouter(connect(mapStateToProps, mapDispatchToProps)(PersonasViewComponent))
