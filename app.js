import express from 'express';
import path from 'path';
import cookieParser from 'cookie-parser';
import logger from 'morgan';
import mongoose from 'mongoose';


import { collectDefaultMetrics } from 'prom-client'; 

import indexRouter from './src/config/index.routes';

collectDefaultMetrics({ timeout: 5000 });

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/api', indexRouter);

mongoose.connect('mongodb://localhost:27017/test-api', {useNewUrlParser: true});

module.exports = app;
