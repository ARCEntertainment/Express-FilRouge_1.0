// ///////////////////////// CONTROLLERS Category /////////////////////////

const UserDTO = require("../DTO/user-dto")
const User = require("../Models/user-model")



// imported MODELS (category)
// ________________________________





// FUNCTION Mappage USERS
// _________________________________

const userMapToDTO = (user) => new UserDTO(user.id, user.email , user.pseudo , user.firstname, user.lastname)


// CONTROLLER Category configuration
// ________________________________
// Operation C.R.U.D
// -----------------
// C = Creat
// R = Read
// U = Update
// D = Delete

const userController = {

    getAll: async (req, res) => {

        const users = await User.find()


        const usersDTO = users.map(userMapToDTO)

        res.status(200).json(usersDTO)
    },

    getById: async (req, res) => {
        const id = req.params.id

        const user = await User.findById(id)

        if (!user) {
            return res.sendStatus(404)
        }
        // ELSE si trouvé
        const usersDTO = userMapToDTO(user)

        res.status(200).json(usersDTO)


    },

    update: async (req, res) => {
        const id = req.params.id

        const {pseudo, email, firstname, lastname} = req.body
        const userToUpdate = await User.findByIdAndUpdate(id, {

            pseudo,
            email,
            firstname,
            lastname

        }, {returnDocument: 'after'})

        if (!userToUpdate) {
            return res.sendStatus(404)
        }
        // ELSE si trouvé ID
        const usersDTO = userMapToDTO(userToUpdate)
        return res.status(200).json(usersDTO)



    },

    delete: async (req, res) => {
        const id = req.params.id

        const userToDelete = await User.findByIdAndDelete(id)

        if (!userToDelete) {
            return res.sendStatus(404)
        }
        // ELSE si trouve ID
        return res.sendStatus(204)
    }
}


module.exports = userController