// ///////////////////////// MISE En PLACE ROOTING Users (Router) /////////////////////////



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

usersRouter.get('/', (req, res) => {
    console.log('Listed of Users')
    res.sendStatus(501) 
})

usersRouter.get('/:id', (req, res) => {
    console.log(`Recupered Users with [ID] is : [${req.params.id}]`)
    res.sendStatus(501) 
})

usersRouter.put('/:id', (req, res) => {
    console.log(`Modificated Users with [ID] is : [${req.params.id}]`)
    res.sendStatus(501) 
})

usersRouter.delete('/:id', (req, res) => {
    console.log(`Deleted Users with [ID] is : [${req.params.id}]`)
    res.sendStatus(501) 
})



// Exported ROOT
// ________________________________

module.exports = usersRouter;