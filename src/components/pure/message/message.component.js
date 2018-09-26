import React from 'react'
import styles from './message.component.css'
import PropTypes from 'prop-types'

/**
 * @author Roel Mendoza
 * @description Este componente representa la capa mas baja de nuestra jerarquia de componentes, son elementos JSX 
 * los cuales se encargan de renderizar parte la aplicación pero sin funcionalidad, la funcionalidad es recibida por 
 * contenedor que mapea las acciones y  las propiedades de este tipo de objetos.
 * @param {function} onClickButton función que ejecutara el boton cada vez que es pulsado.
 * @returns {Object} JSX element que renderiza una pequeña parte de la aplicación
 */
export const MessageComponent = ({ onClickButton }) => (
  <div className={styles.container}>
    <div>
      <h3 className={styles.subtittle}>
        Pulsa el botón para cargar personas
      </h3>
    </div>
    <div>
      <button onClick={onClickButton}>Cargar</button>
    </div>
  </div>
)

MessageComponent.propTypes = {
  onClickButton: PropTypes.func
}
