// ///////////////////////// MISE En PLACE ROOTING Task (Router) /////////////////////////

const taskController = require('../Controllers/task-controller');
const idValidator = require('../Middlewares/idValidator')
const bodyValidation = require('../Middlewares/body-validation');
const {insertTaskValidator, updateTaskValidator} = require('../Validators/task-validatort');



// Initialising EXPRESS
// _______________________________

const taskRouter = require('express').Router();



// ROOT configuration
// ________________________________
// .get    = Recuperation / Afficher
// .post   = Ajout
// .put    = Modification
// .delete = Supression


// ----------TASK--------------

taskRouter.get('/', taskController.getALL)

// '/:categoryname les ":" avant le nom du chemin rend le chemin categoryname dynamique
taskRouter.get('/category/:id', taskController.getByCategory)


// '/:username les ":" avant le nom du chemin rend le chemin username dynamique
taskRouter.get('/user/:id', taskController.getByUser)

taskRouter.get('/:id', idValidator(), taskController.getById)

taskRouter.post('/', bodyValidation(insertTaskValidator), taskController.creat)

taskRouter.put('/:id', idValidator(), bodyValidation(updateTaskValidator), taskController.update)

taskRouter.delete('/:id', idValidator(), taskController.delete)




// Exported ROOT
// ________________________________

module.exports = taskRouter;