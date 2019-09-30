import { register } from 'prom-client'; 

const getMetric = (req,res) => {
    res.set('Content-Type', register.contentType);
    res.end(register.metrics());
};

export default {
    getMetric 
};