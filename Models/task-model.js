// ///////////////////////// CREATION MODEL et SHEMA (Task) /////////////////////////

const category = require('../Models/category-model')
const user = require('../Models/user-model')

// Initialising MONGOOSE (Schema)
// _______________________________
const { Schema, model, Types } = require('mongoose')



// SCHEMA configuration
// ________________________________
const taskSchema = new Schema(

    // STRUCTURE
    {
        name: {
            type:String,
            require: true,
            trim: true
        },

        description: {
            type: String,
            trim: true
        },

        categoryId: {
            type: Types.ObjectId,
            ref: category,
            require: true
        },

        senderUserId: {
            type: Types.ObjectId,
            ref: user,
            require: true
        },

        receverUserId: {
            type: Types.ObjectId,
            ref: user,
            require: true
        },

        expectedEndingDate: {
            type: String,
            require: false
        },

        status: {
            type: String,
            require: true,
            enum: ['Created', 'Pending', 'Done'],
            default: 'Created'
        }
    }, 

    // OPTION
    {
        collection: 'Task',
        timestamps: true
    })






// MODEL creation
// ________________________________
const Task = model('Task', taskSchema )




// Exported MODEL
// ________________________________
module.exports = Task