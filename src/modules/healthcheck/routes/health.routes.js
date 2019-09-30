import express from 'express';
import healthController from '../controller/health.controller';

const router = express.Router();

router.route('/')
    .get(healthController.getHealth);

export default router;    