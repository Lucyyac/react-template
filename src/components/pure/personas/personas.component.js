import React from 'react'
import PropTypes from 'prop-types'
import styles from './personas.component.css'

export const PersonasComponent = ({ displayPersonas }) => (
  <div className={styles.container}>
    {displayPersonas ? null : <h3>No existen personas</h3>}
    {displayPersonas ? <ul>
      <li><p>Roel</p></li>
      <li><p>Juan</p></li>
      <li><p>Neo</p></li>
      <li><p>Karla</p></li>
    </ul> : null}
  </div>
)

PersonasComponent.propTypes = {
  displayPersonas: PropTypes.bool
}
