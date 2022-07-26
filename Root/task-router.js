// ///////////////////////// MISE En PLACE ROOTING Task (Router) /////////////////////////



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

taskRouter.get('/', (req, res) => {
    console.log('Listed of Task')
    res.sendStatus(501)
})

// '/:categoryname les ":" avant le nom du chemin rend le chemin categoryname dynamique
taskRouter.get('/:categoryname', (req, res) => {
    console.log(`Recupered Name Category of Task`)
    res.sendStatus(501)
})

// '/:username les ":" avant le nom du chemin rend le chemin username dynamique
taskRouter.get('/:username', (req, res) => {
    console.log('Listed of username')
    res.sendStatus(501)
})

taskRouter.get('/:id', (req, res) => {
    console.log(`Recupered Task with [ID] is : [${req.params.id}]`)
    res.sendStatus(501)
})

taskRouter.post('/', (req, res) => {
    console.log(`Add an Task`)
    res.sendStatus(501)
})

taskRouter.put('/:id', (req, res) => {
    console.log(`Modified Task with [ID] is : [${req.params.id}]`)
    res.sendStatus(501)
})

taskRouter.delete('/:id', (req, res) => {
    console.log(`Deleted Task with [ID] is : [${req.params.id}]`)
    res.sendStatus(501)
})




// Exported ROOT
// ________________________________

module.exports = taskRouter;