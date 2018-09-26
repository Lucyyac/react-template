import React from 'react'
import { DashboardViewComponent } from './dashboard/dashboard-view.component'

/**
 * @author Roel Mendoza
 * @description Componente principal de la aplicación, este componente engloba toda nuestra aplicación
 * @param {Object} props propiedades recibidas al momento de llamar este componente
 */
export let AppComponent = (props) => (
  <div>
    <DashboardViewComponent></DashboardViewComponent>
  </div>
)
