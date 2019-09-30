import mongoose from 'mongoose';

const TaskSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    status: { 
        type: String, 
        default: 'pending', 
        enum: ['pending', 'completed']
    },    
});

const Task = mongoose.model('Task', TaskSchema);

export default Task;
