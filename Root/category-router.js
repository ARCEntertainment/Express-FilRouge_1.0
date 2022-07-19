// ///////////////////////// MISE En PLACE ROOTING Category (Router) /////////////////////////



// Initialising EXPRESS
// _______________________________

const categoryRouter = require('express').Router();



// ROOT configuration
// ________________________________
// .get    = Recuperation / Afficher
// .post   = Ajout
// .put    = Modification
// .delete = Supression


// ------methode long (repetition)--------------

categoryRouter.get('/', (req, res) => {
    console.log('Listed of Category')
    res.sendStatus(501) // Error : Fonction pas encore implémenté (not implemented)
})

categoryRouter.get('/:id', (req, res) => {
    console.log(`Recupered Category with id is ${req.params.id}`)
    res.sendStatus(501) // Error : Fonction pas encore implémenté (not implemented)
})

categoryRouter.post('/', (req, res) => {
    console.log(`Send New Category`)
    res.sendStatus(501) // Error : Fonction pas encore implémenté (not implemented)
})

categoryRouter.put('/:id', (req, res) => {
    console.log(`Modificated Category with id is ${req.params.id}`)
    res.sendStatus(501) // Error : Fonction pas encore implémenté (not implemented)
})

categoryRouter.delete('/:id', (req, res) => {
    console.log(`Deleted Category with id is ${req.params.id}`)
    res.sendStatus(501) // Error : Fonction pas encore implémenté (not implemented)
})

// ------methode court (not Repetition)--------------

// categoryRouter.router('/')
//     .get((req, res) => { res.sendStatus(501) })
//     .post((req, res) => { res.sendStatus(501) })

// categoryRouter.router('/:id')
//     .get((req, res) => { res.sendStatus(501) })
//     .put((req, res) => { res.sendStatus(501) })
//     .delete((req, res) => { res.sendStatus(501) })


// Exported ROOT
// ________________________________

module.exports = categoryRouter;