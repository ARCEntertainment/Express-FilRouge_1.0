// ///////////////////////// CREATION MODEL et SHEMA (category) /////////////////////////



// Initialising MONGOOSE (Schema)
// _______________________________
const { Schema, model } = require('mongoose')



// SCHEMA configuration
// ________________________________
const categoryShema =
    new Schema(

        // STRUCTURE
        {
            name: {
                type: String,
                required: true,
                unique: true,
                trim: true
            },
            icon: {
                type: String,
                required: true,
                trim: true
            }
        },

        // OPTION
        {
            collection: 'Category',
            timestamps: true
        })





// MODEL creation
// ________________________________
const Category = model('Category', categoryShema)




// Exported MODEL
// ________________________________
module.exports = Category