import { put, call, take } from 'redux-saga/effects'
import { PersonasService } from '../../services'

/**
 * @author Roel Mendoza
 * @description Funcion generadora que describe el flujo de acciones que deben despacharse de manera sincrona 
 * al despacharse una accion asincrona como puede ser traer datos de un servidor.
 * Estas funciones generadoras son tomadas por la libreria redux-saga que actua como middleware entre la acción
 * despachada por la aplicación y el estado final como consecuencia de esa acción.
 */
export function * watchGetPersona () {
  while (true) {
    try {
      yield take('GET_PERSONAS')
      yield put({ type: 'POSTING' })
      let data = yield call(PersonasService.getPersonas)
      yield put({ type: 'GET_SUCCED', data })
    } catch (error) {
      yield put({ type: 'GET_ERROR', error })
    }
  }
}
