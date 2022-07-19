// ///////////////////////// MISE En PLACE ROOTING auth (Router) /////////////////////////



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


authRouter.post('/login', (req, res) => {
    console.log(`authentificated`)
    res.sendStatus(501)
})

authRouter.post('/register', (req, res) => {
    console.log(`registered`)
    res.sendStatus(501)
})




// Exported ROOT
// ________________________________

module.exports = authRouter;