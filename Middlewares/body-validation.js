// ///////////////////////// MIDDLEWARE Modele YUP Validator /////////////////////////





// STRUCTURE Function (Verification et validation des Modele Task )
// _____________________________________
const bodyValidation = (yupValidator) => {
    return async (req, res, next) => {
        try {
            const validData = await yupValidator.noUnknown().validate(req.body, { abortEarly: false })
            req.body = validData
            next()
        }
        catch (e) {
            res.sendStatus(400)
        }
    }
}

// EXPORTE YUP body Validator
// _____________________________________
module.exports = bodyValidation