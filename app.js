//       -----------------------ORDRE OBLIGATOIRE--------------------
// ///////////////// STRUCTURE et MISE-en-PLACE de BASE (P1) //////////////////////////////


// 1) Initialising Project BASE
// ______________________________

require('dotenv-flow').config();
const { MESSAGE, NODE_ENV, PORT, DB_CONNECTION } = process.env;
console.log('lancé en', NODE_ENV, ' : ', MESSAGE);

const { application } = require('Express');


// ---Library NoSQL (mongoose)
// ---------------
const mongoose = require('mongoose')






// 2) Mise en place SERVER EXPRESS
// _________________________________

// /!\ Library gestion error async await Middleware 
// ---------------
require('express-async-errors')

// ---------------
const express = require('Express')
const router = require('./Root')
const server = express()


// /!\ First MiddleWare (a metre en premier)
server.use(express.json())







// 3) ROOT Definitive
// ________________________________

// --Root Connection middleware DB (mongodb)
// ---------------
server.use(async (req, res, next) => {
    await mongoose.connect(DB_CONNECTION)
    console.log('-* Good Connected *-')
    next()
})

// --Root request
// ---------------
server.use('/api', router)







// 4) LECTURE du SERVER
// __________________________________

server.listen(PORT, () => {
    console.log(`Server up on port : ${PORT}[${NODE_ENV}]`)
})




