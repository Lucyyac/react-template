import React from 'react'
import styles from './personas-view.component.css'
import { Route, Link } from 'react-router-dom'
import { PersonasComponent, MessageComponent } from '../../../pure'
import PropTypes from 'prop-types'

/**
 * @author Roel Mendoza
 * @description Ejemplo de un View Component, este tipo de componente forma parte de la segunda capa en la jerarquia de 
 * componentes, este tipo de componente utiliza pure components y los estructura (layout) de manera especifica.
 * @param {Object} props propiedades recibidas al ser llamado
 * @returns {JSX} elemento jsx
 */
export const PersonasViewComponent = (props) => {
  let { personas, onClickButton } = props
  return (
    <div>
      <div className={styles.container}>
        <Link to='/message'><button className='item'>Principal</button></Link>
        <Link to='/personas'><button className='item'>Personas</button></Link>
      </div>
      <div>
        <Route path='/personas' render={() => {
          return <PersonasComponent displayPersonas={personas} />
        }} />
        <Route path='/message' render={() => {
          return <MessageComponent onClickButton={onClickButton} />
        }} />
      </div>
    </div>
  )
}

PersonasViewComponent.propTypes = {
  personas: PropTypes.bool,
  onClickButton: PropTypes.func
}
