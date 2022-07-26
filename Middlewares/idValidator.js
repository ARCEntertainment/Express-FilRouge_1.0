// ///////////////////////// MIDDLEWARE ID Validator /////////////////////////


// IMPORTATION Mongoose
// _____________________________________
const mongoose = require('mongoose')



// STRUCTURE Function (Verification validation [ID])
// _____________________________________
const idValidator = () => {

    return (req, res, next) => {
        const id = req.params.id

        if (!mongoose.isValidObjectId(id)) {
            res.sendStatus(400)
            return
        }

        next()
    }
}



// EXPORTE Id Validator
// _____________________________________
module.exports = idValidator