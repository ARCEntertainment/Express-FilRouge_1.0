// ///////////////////////// MISE En PLACE ROOTING auth (Router) /////////////////////////

const authController = require('../Controllers/auth-controller');
const bodyValidation = require('../Middlewares/body-validation');
const { registerValidator, loginValidator } = require('../Validators/auth-validator');



// Initialising EXPRESS
// _______________________________

const authRouter = require('express').Router();



// ROOT configuration
// ________________________________
// .get    = Recuperation / Afficher
// .post   = Ajout
// .put    = Modification
// .delete = Supression


// ---------AUTHENTIFICATION----------


authRouter.post('/login', bodyValidation(loginValidator), authController.login);

authRouter.post('/register', bodyValidation(registerValidator), authController.register);




// Exported ROOT
// ________________________________

module.exports = authRouter;