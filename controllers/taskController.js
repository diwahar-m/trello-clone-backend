import taskModel from "../models/taskModel.js";

const taskList= async(req, res)=> {
    
    try{
        const userId = req.body.userId;
        const userTaskList = await taskModel.find({userId: userId})
        res.json({success: true, message: userTaskList})
    }catch(error){
        console.log(error);
        res.json({success: false, message: "Error"})
    }
}

const createTask= async(req, res)=> {
    try{
        const userId = req.body.userId;
        const newTask = new taskModel({
            userId: userId,
            title: req.body.title,
            descripton: req.body.description || '',
            category: req.body.category,
            date: Date.now()
        })
        const task = await newTask.save()
        console.log(task._id)
        res.json({success: true, task})
    }catch(error){
        console.log(error);
        res.json({success: false, message: "Error"})
    }
}

const updateTask= async(req, res)=> {
    
    try{
        const userId = req.body.userId;
        if(userId){
            await taskModel.findByIdAndUpdate(req.body.id,{
                title: req.body.title,
                description: req.body.description,
                category: req.body.descripton,
                date: Date.now()
            }, {new: true})
            .then(response => {
                console.log(response)
                res.json({success: true, message: response})
            })
            .catch(err => {
                console.log(err);
                 res.json({success: false, message: "Error while updating the task"})
            })
        }else{
            res.json({success: false, message: "Not authorized to update the file"})
        }

    }catch(error){
        console.log(error);
        res.json({success: false, message: "Error"})
    }
}

const deleteTask= async(req, res)=> {
    
    try{
        const userId = req.body.userId;
        if(userId){
            await taskModel.findByIdAndDelete(req.body.id)
            .then(response => {
                console.log(response)
                res.json({success: true, message: "Task Deleted Successfuly!"})
            })
            .catch(err => {
                  console.log(err)
                 res.json({success: false, message: "Error while updating the task"})
            })
        }else{
            res.json({success: false, message: "Not authorized to delete the file"})
        }

    }catch(error){
        console.log(error);
        res.json({success: false, message: "Error"})
    }
}

export {taskList, createTask, updateTask, deleteTask}