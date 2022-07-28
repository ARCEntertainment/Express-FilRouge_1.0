// ///////////////////////// YUP USER Validator /////////////////////////




// IMPORT Yup
// ____________________________
const yup = require('yup')



// STRUCTURE Validator
// ____________________________

// USER Model
// --------------
const userValidator = yup.object({
    pseudo : yup.string().required().min(3).max(50).trim(),
    email : yup.string().required().email().max(255).trim(),
    firstname : yup.string().required().max(150).trim(),
    lastname : yup.string().required().max(150).trim(),
})



// EXPORT Validator
// ____________________________
module.exports = userValidator