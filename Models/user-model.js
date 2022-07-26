// ///////////////////////// CREATION MODEL et SHEMA (utilisateur) /////////////////////////



// Initialising MONGOOSE (Schema)
// _______________________________
const { Schema, model } = require('mongoose')
const { string } = require('yup')



// SCHEMA configuration
// ________________________________

const userSchema = new Schema(

    // STRUCTURE
    {
        pseudo: {
            type: String,
            unique: true,
            require: true,
            trim: true

        },
        email: {
            type: String,
            unique: true,
            require: true,
            trim: true
        },

        password: {
            type: String,
            require: true,
        },

        firstname: {
            type: String,
            trim: true,
            require: true
        },

        lastname: {
            type: String,
            trim: true,
            require: true
        },

        role: {
            type: String,
            enum: ['User', 'Moderator', 'Admin'],
            require: true,
            default: 'User'
        }
    },

    // OPTION
    {
        collection: 'Users',
        timestamps: true,
    }

)


// MODEL creation
// ________________________________
const User = model('User', userSchema)



// Exported MODEL
// ________________________________
module.exports = User