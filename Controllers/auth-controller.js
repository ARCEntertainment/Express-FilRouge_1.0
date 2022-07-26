// ///////////////////////// CONTROLLERS Authentication (identification) /////////////////////////


const User = require('../Models/user-model')
const argon2 = require('argon2')
const { required } = require('../Validators/category-validator')
const jwtUtils = require('../Utils/jwt-utils')


// CONTROLLER Authentication configuration
// ________________________________

const authController = {
    login: async (req, res) => {

        const {credential, password } = req.body // Credential = recuperation soit email soit pseudo

        const credentialFilter = {$or : [{email : credential}, {pseudo : credential}]}

        const user = await User.findOne(credentialFilter)


        if (!User) { // le point [!] signifie False au lieux de True par default
            return res.status(401).json({error : 'Bad Credentials'})
        }
        
        const isPasswordValid = await argon2.verify(user.password, password)


        if (!isPasswordValid) {
            return res.status(401).json({error : 'Bad Credentials'})
        }
        const token = await jwtUtils.generate(user)
        return res.json({token})
    },
// -----------------------------------------------------


    // Recuperation des Information dans le BODY
    // --------------------------------
    register: async (req, res) => {
        const { pseudo, email, password, lastname, firstname } = req.body


        // Recuperation Password HASH
        // -----------------------------
        const hashedPassword = await argon2.hash(password)


        // Creation Nouvelle Utilisateur
        // ------------------------------
        const userToInsert = User({
            pseudo,
            email,
            lastname,
            firstname,
            password : hashedPassword

        })

        // Sauvegarde de l'Utilisateur dans la DB
        // ------------------------------
        await userToInsert.save()
        const token = await jwtUtils.generate(userToInsert)
        return res.status(200).json({token})
    }
}


// Exported CONTROLLER
// ________________________________
module.exports = authController