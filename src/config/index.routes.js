import taskRoutes from '../modules/task/routes/task.routes'
import express from 'express';

const router = express.Router();

router.use('/todo', taskRoutes);

export default router;
