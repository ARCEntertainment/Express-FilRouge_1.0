// ///////////////////////// YUP AUTHENTICATION Validator /////////////////////////

const pwdRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[\W|_]).+$/;


// IMPORT Yup
// ____________________________
const yup = require('yup')



// STRUCTURE Validator
// ____________________________

// REGISTER Model
// --------------
const registerValidator = yup.object({
    pseudo : yup.string().required().min(3).max(50).trim(),
    email : yup.string().required().email().max(255).trim(),
    firstname : yup.string().required().max(150).trim(),
    lastname : yup.string().required().max(150).trim(),
    password : yup.string().required().min(8).max(64).matches(pwdRegex),
})

// LOGIN Model
// --------------
const loginValidator = yup.object({
    credential : yup.string().trim().required().max(255),
    password : yup.string().required()
})





// EXPORT Validator
// ____________________________
module.exports = {registerValidator, loginValidator}