// ///////////////////////// YUP category Validator /////////////////////////




// IMPORT Yup
// ____________________________
const yup = require('yup')



// STRUCTURE Validator
// ____________________________
const categoryValidator = yup.object({
    name: yup.string().required().trim().max(50),
    icon: yup.string().required().trim()
})




// EXPORT Validator
// ____________________________
module.exports = categoryValidator