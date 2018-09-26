const PersonasService = {
/**
* @author Roel Mendoza
* @description Esta función simula un metodo con flujo asincrono, imita una función que trae datos de un
* servidor externo
* @returns {Promise} promesa generada 
* @memberof PersonasService
*/
  getPersonas: () => {
    let promise = new Promise((resolve, reject) => {
      setTimeout(() => {
        let response = true
        resolve(response)
      }, 2000)
    })
    return promise
  }
}

export default PersonasService
