//  //////////////////////// ROUTER PARENT structure //////////////////////////////////////


// Implentation Route
// _______________________________
const authRouter = require('./auth-router')
const usersRouter = require('./users-router')
const categoryRouter = require('./category-router')
const taskRouter = require('./task-router')



// Initialising EXPRESS
// _______________________________
const router = require('express').Router();




// Importation ROOT
// _________________________________
router.use('/auth', authRouter)
router.use('/user', usersRouter)
router.use('/category', categoryRouter)
router.use('/task', taskRouter)




// Exported ROOT
// ________________________________

module.exports = router;