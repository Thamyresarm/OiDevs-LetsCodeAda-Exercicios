const { Router } = require('express')
const routes = new Router()

const HealthController = require('./controllers/health-ctrl')
const CharacterController = require('./controllers/char-ctrl')

routes.get('/health', HealthController.check)

/**
 * Exemplo uso de Middlwares
 
     routes.get('/personagens',(req, res, next) => {
         console.log('Eu sou um Middlware')
        next()
    }, CharacterController.list)
 
 */


routes.get('/personagens', CharacterController.list)

module.exports = routes