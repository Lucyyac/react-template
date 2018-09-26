import React from 'react'
import { PersonasViewActions } from '../../actions/personas-view-actions.component'
import styles from './dashboard-view.component.css'

/**
 * @author Roel Mendoza
 * @description Ejemplo de pantalla dashboard, ejemplo para representar la jerarquia en las capas de componentes, 
 * las pantallas a su vez son View Components mas grandes ya que por lo general contienen un grupo de View Components
 * mas pequeños
 */
export const DashboardViewComponent = () => {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <PersonasViewActions/>
      </div>
    </div>
  )
}
