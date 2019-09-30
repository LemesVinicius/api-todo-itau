import express from 'express';
import taskController from '../controller/task.controller';

const router = express.Router();

router.route('/')
  .get(taskController.getTasks)
  .post(taskController.saveTask)

route.route('/:id')
  .put()
  .delete()  

export default router;