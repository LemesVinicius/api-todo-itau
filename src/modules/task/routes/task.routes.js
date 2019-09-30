import express from 'express';
import taskController from '../controller/task.controller';

const router = express.Router();

router.route('/')
  .get(taskController.getTasks)
  .post(taskController.saveTask)

router.route('/:id')
  .put(taskController.editTask)
  .delete(taskController.deleteTask)  

export default router;