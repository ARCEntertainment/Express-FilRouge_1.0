//? ///////////////////////// CONTROLLERS Task /////////////////////////



//todo imported MODELS (category)
//todo ________________________________
const Category = require("../Models/category-model")
const Task = require("../Models/task-model")





//todo CONTROLLER Category configuration
//todo ________________________________
//* Operation C.R.U.D
//* -----------------
//* C = Creat
//* R = Read
//* U = Update
//* D = Delete

const taskController = {

    //! Get Control
    getALL: async (req, res) => {

        const tasks = await Task.find()

            .populate({
                path: 'categoryId',
                select: { name: 1, icon: 1 }
            })

            .populate({
                path: 'senderUserId',
                select: { firstname: 1, lastname: 1, pseudo: 1 }
            })

            .populate({
                path: 'receverUserId',
                select: { firstname: 1, lastname: 1, pseudo: 1 }
            })


        res.status(200).json(tasks)
    },


    getById: async(req, res) => {
        const id = req.params.id

        const tasks = await Task.findById(id)

            .populate({
                path: 'categoryId',
                select: { name: 1, icon: 1 }
            })

            .populate({
                path: 'senderUserId',
                select: { firstname: 1, lastname: 1, pseudo: 1 }
            })

            .populate({
                path: 'receverUserId',
                select: { firstname: 1, lastname: 1, pseudo: 1 }
            })

            if (!tasks) {
                return res.sendStatus(404)
            }
            // ELSE
            res.status(200).json(tasks)
        
    },


    getByCategory: async(req, res) => { 
        const idCat = req.params.id

        const categoryNameFilter = {categoryId : idCat}

        const tasks = await Task.find(categoryNameFilter)

            .populate({
                path: 'categoryId',
                select: { name: 1, icon: 1 }
            })

            if (!tasks) {
                return res.sendStatus(404)
            }
            // ELSE
            res.status(200).json(tasks)
    },


    getByUser: async(req, res) => { 
        const idUser = req.params.id

        const userNameFilter = {receverUserId : idUser}

        const tasks = await Task.find(userNameFilter)

            .populate({
                path: 'receverUserId',
                select: { firstname: 1, lastname: 1, pseudo: 1 }
            })

            if (!tasks) {
                return res.sendStatus(404)
            }
            // ELSE
            res.status(200).json(tasks)
    },


    //! Creat / Update / Delete
    creat: async (req, res) => {

        const taskToAdd = Task(req.body)

        await taskToAdd.save()

        res.status(200).json(taskToAdd)
    },
    //! --------------------------------------

    update: async (req, res) => {
        const id = req.params.id

        const { name, description, categoryId, receverUserId, expectedEndingDate, status } = req.body;
        const taskToUpdate = await Task.findByIdAndUpdate(id, {

            //! OBLIGATOIR
            name,
            categoryId,
            receverUserId,
            status,

            //! NON OBLIGATOIR
            description: description ? description : null,
            expectedEndingDate: expectedEndingDate ? expectedEndingDate : null,

        }, { returnDocument: 'after' })

        if (!taskToUpdate) {
            return res.sendStatus(404)
        }
        // ELSE Si Trouve ID
        res.sendStatus(204)
    },
    //! --------------------------------------

    delete: async (req, res) => {
        const id = req.params.id

        const taskToDelete = await Task.findByIdAndDelete(id)

        if (!taskToDelete) {
            return res.sendStatus(404)
        }
        //* ELSE si trouve
        res.sendStatus(204)
    }
}




//todo Exported CONTROLLER
//todo ________________________________
module.exports = taskController