import taskRoutes from '../modules/task/routes/task.routes'
import metricsRoutes from '../modules/metrics/routes/metrics.routes'
import healthController from '../modules/healthcheck/routes/health.routes'
import express from 'express';

const router = express.Router();

router.use('/todo', taskRoutes);
router.use('/metrics', metricsRoutes);
router.use('/healthcheck', healthController)

export default router;
