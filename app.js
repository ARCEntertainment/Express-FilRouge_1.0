//       -----------------------ORDRE OBLIGATOIRE--------------------
// ///////////////// STRUCTURE et MISE-en-PLACE de BASE (P1) //////////////////////////////


// 1) Initialising Project BASE
// ______________________________

require('dotenv-flow').config();
const { MESSAGE, NODE_ENV, PORT } = process.env;
console.log('lancé en', NODE_ENV, ' : ', MESSAGE);

const { application } = require('Express');



// 2) Mise en place SERVER EXPRESS
// _________________________________

const express = require('Express')
const router = require('./Root')
const server = express()



// 3) ROOT Definitive
// ________________________________
server.use('/api', router)



// 4) LECTURE du SERVER
// __________________________________

server.listen(PORT, () => {
    console.log(`Server up on port : ${PORT}[${NODE_ENV}]`)
})




