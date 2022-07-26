// ///////////////////////// CONTROLLERS Category /////////////////////////



// imported MODELS (category)
// ________________________________
const Category = require("../Models/category-model")





// CONTROLLER Category configuration
// ________________________________
// Operation C.R.U.D
// -----------------
// C = Creat
// R = Read
// U = Update
// D = Delete

const categoryController = {

    getAll: async (req, res) => {

        const categories = await Category.find()

        res.status(200).json(categories)
    },
    // --------------------------------------


    creat: async (req, res) => {

        const categoryToAdd = Category(req.body)
        console.log(categoryToAdd);
        await categoryToAdd.save()
        res.status(200).json(categoryToAdd)
    },
    // ---------------------------------------


    getById: async (req, res) => {
        const id = req.params.id


        Category.findById(id)

        if (Category) {
            res.status(200).json(Category)
        }
        else {
            return res.sendStatus(404)
        }
    },
    // ---------------------------------------


    update: async (req, res) => {
        const id = req.params.id


        const category = await Category.findByIdAndUpdate(id,

            // STRUCTURE
            {
                name: req.body.name,
                icon: req.body.icon
            },

            // OPTION
            {
                returnDocument: 'after'
            }
        )

        if (category) {
            res.status(200).json(category)
        }
        else {
            return res.sendStatus(404)
        }
    },
    // --------------------------------------


    delete: async (req, res) => {
        const id = req.params.id


        const categoryToDelete = await Category.findByIdAndDelete(id)

        if (categoryToDelete) {
            res.sendStatus(204)
        }
        else {
            return res.sendStatus(404)
        }
    }
}




// Exported CONTROLLER
// ________________________________
module.exports = categoryController;