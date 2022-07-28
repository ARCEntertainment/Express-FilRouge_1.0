// ///////////////////////// MISE En PLACE ROOTING Users (Router) /////////////////////////

const userController = require('../Controllers/user-controller');
const idValidator = require('../Middlewares/idValidator');
const userValidator = require('../Validators/user-validator');
const bodyValidation = require('../Middlewares/body-validation')
const authentication = require('../Middlewares/auth-jwt');


// Initialising EXPRESS
// _______________________________

const usersRouter = require('express').Router();




// ROOT configuration
// ________________________________
// .get    = Recuperation / Afficher
// .post   = Ajout
// .put    = Modification
// .delete = Supression


// ----------USERS--------------

usersRouter.get('/', userController.getAll)

usersRouter.get('/:id', authentication(['User', 'Moderator', 'Admin']), idValidator(), userController.getById)

usersRouter.put('/:id', authentication(['Admin', 'Moderator']), idValidator(), bodyValidation(userValidator), userController.update)

usersRouter.delete('/:id', authentication(['Admin']), idValidator(), userController.delete)


// Exported ROOT
// ________________________________

module.exports = usersRouter;