// ///////////////////////// MISE En PLACE ROOTING Category (Router) /////////////////////////



// Initialising EXPRESS
// _______________________________

const categoryRouter = require('express').Router();
const categoryController = require('../Controllers/category-controller');
const authentication = require('../Middlewares/auth-jwt');
const bodyValidation = require('../Middlewares/body-validation');
const idValidator = require('../Middlewares/idValidator');
const categoryValidator = require('../Validators/category-validator');



// ROOT configuration
// ________________________________
// .get    = Recuperation / Afficher
// .post   = Ajout
// .put    = Modification
// .delete = Supression



// --- Appel du Middleware ID Validator Dans la ROOT ById (Varification validité [ID])
// ---------------
// categoryRouter.use(idValidator()) 


// ------methode long (repetition)--------------

categoryRouter.get('/', categoryController.getAll)

categoryRouter.get('/:id', idValidator(), categoryController.getById)

categoryRouter.post('/', authentication(['User', 'Moderator', 'Admin']), bodyValidation(categoryValidator), categoryController.creat)

categoryRouter.put('/:id', authentication(['Admin', 'Moderator']), idValidator(), bodyValidation(categoryValidator), categoryController.update)

categoryRouter.delete('/:id', authentication(['Admin']), idValidator(), categoryController.delete)

// ------methode court (not Repetition)--------------

// categoryRouter.router('/')
//     .get(categoryController.getAll)
//     .post(categoryController.creat)

// categoryRouter.router('/:id')
//     .get(idValidator(), categoryController.getById)
//     .put(idValidator(), categoryController.update)
//     .delete(idValidator(), categoryController.delete)




// Exported ROOT
// ________________________________

module.exports = categoryRouter;