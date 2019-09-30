import express from 'express';
import metricsController from '../controller/metrics.controller';

const router = express.Router();

router.route('/')
    .get(metricsController.getMetric);

export default router;    