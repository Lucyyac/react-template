import React from 'react'
import ReactDom from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import RootComponent from './src/components/Root.component'
import rootReducer from './src/scripts/reducers/reducer'
import { watchGetPersona } from './src/scripts/sagas'
import createSagaMiddleware from 'redux-saga'

/**
 * @author Roel Mendoza
 * Index principal de la aplicación, en este script iniciamos el store de redux, las sagas de redux saga y renderizamos 
 * nuestra aplicación con ReactDom.render usando el componente Root  
 */
const sagaMiddleware = createSagaMiddleware()
const store = createStore(rootReducer,
  applyMiddleware(sagaMiddleware))
sagaMiddleware.run(watchGetPersona)
ReactDom.render(<RootComponent store={store} />, document.getElementById('renderer'))
