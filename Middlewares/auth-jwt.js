const jwtUtils = require('../Utils/jwt-utils')
const User = require('../Models/user-model')



// STRUCTURE Verification et Decode
// ____________________________________________________

const authentication = (role/*option*/) => {

    return async (req, res, next) => {
        const authHeader = req.headers['authorization']
        const token = authHeader ? authHeader.split(' ')[1] : false;


        // Si pas de TOKEN / REFUSER
        if (!token){
            return res.sendStatus(401)   //pas autorisé
        }


        // Si TOKEN Trouvé / DECODER
        let decodedToken;

        try {
            decodedToken = await jwtUtils.decode(token)
            console.log(decodedToken);
        }

        catch(error) {
            return res.sendStatus(403) // pas reussi a decodé
        }


        // Si TOKEN Decodé / VALIDER

        // ----Verification du tableau des ROLE dans [DB]
        // --------------
        if (role){
            const userDB = await User.findById(decodedToken.id)
            const userDBRole = userDB.role

            if (!role.includes(userDBRole)) {
                return res.sendStatus(403)
            }
        }


        req.user = decodedToken

        next()

    }
}


module.exports = authentication