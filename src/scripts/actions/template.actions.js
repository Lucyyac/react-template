/* En este script se definiran las acciones que pueden ser despachadas como consecuencia de acciones dentro de 
nuestra aplicación, estas acciones se pueden separar en diferentes archivos y son funciones puras, que retornan
un objeto con el tipo de la accion despachada y si es necesario mas datos adicionales en el objeto*/
export const getPersonas = () => ({
  type: 'GET_PERSONAS'
})
