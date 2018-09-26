import React from 'react'
import { AppComponent } from './views'
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Route } from 'react-router-dom'
/**
 * @author Roel Mendoza
 * @description Este componente se encarga de pasar el store (Provider) y el Routeador (Router) a todos los componentes de la App
 * @param {Object} store objeto store que representa el estado de nuestra aplicación 
 * @returns {JSX element}  
 */
const RootComponent = ({ store }) => //eslint-disable-line
  (<Provider store={store}>
    <Router>
      <Route path="/" component={AppComponent}></Route>
    </Router>
  </Provider>)

export default RootComponent
