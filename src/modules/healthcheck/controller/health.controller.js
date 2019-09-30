import mongoose from 'mongoose';
const statusMongo = { 
    0:'disconnected',
    1: 'connected',
    2: 'connecting',
    3: 'disconnecting'
};
const getHealth = (req,res) => {
    return res.status(200).json({ mongo: statusMongo[mongoose.connection.readyState] })
};

export default {
    getHealth 
};