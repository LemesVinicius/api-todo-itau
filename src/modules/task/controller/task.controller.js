import Task from '../model/task.model';

const saveTask = (req, res) => {
    const { body } = req;
    
    const task = new Task({
        ...body
    });

    return task.save()
        .then( () => res.status(201).json(task))
        .catch( err => {
            console.log(err);
            res.status(500).json({
                err: 'erro ao salvar task'
            })
        })
}

const getTasks = (req, res) => {
   return Task.find({})
        .then( tasksReturned => res.status(200).json(tasksReturned) )
}

const editTask = (req, res) => {
    
    const {params, body} = req;

    return Task.findByIdAndUpdate(params.id,{...body})
        .then( () => res.status(200).json(task))
        .catch( err => {
            console.log(err);
            res.status(500).json({
                err: 'erro ao atualizar a task'
            })
        })

}

const deleteTask = (req, res) => {
    const {params } = req;

    return Task.findByIdAndRemove(params.id,{})
        .then( () => res.status(200).json({ msg: "task excluida" }))
            .catch( err => {
                console.log(err);
                res.status(500).json({
                    err: 'erro ao atualizar a task'
                })
            })
}    

export default {
    saveTask,
    getTasks,
    editTask,
    deleteTask
};