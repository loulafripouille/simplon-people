const ERROR_MESSAGES = {
  400: 'Votre requête est mal formatée',
  401: 'Vous devez vous (re)connecter pour accéder au contenu',
  403: 'Vous n\'êtes pas autorisé à accéder à ce contenu',
  404: 'Impossible de trouver ce que vous demandez',
  500: 'Une erreur technique est survenue, la loose...'
}

class ErrorHandler {
  install (Vue) {
    this.addMessageGetter(Vue)
  }

  addMessageGetter (Vue) {
    Vue.prototype.$getErrorMessage = (statusCode) => {
      const code = parseInt(statusCode)
      
      if (!Number.isInteger(code)) {
        throw new Error('You must pass an Interget', code)
      } else if (!ERROR_MESSAGES.hasOwnProperty(code)) {
        throw new Error('The status code passed is not implemented', code)
      }

      return ERROR_MESSAGES[code]
    }
  }
}

export default new ErrorHandler()