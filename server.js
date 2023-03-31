require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();

// errors
app.use(cors());
app.use(express.json({extended: true}));
// rout
app.use('/api/users', require('./src/routes/users'));
app.use('/api/messages', require('./src/routes/messages'));


const start = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI, {
            useUnifiedTopology: true,
        });
        app.listen(process.env.PORT, () =>
            console.log(`Started on port ${process.env.PORT}...`)
        );
    } catch (e) {
        console.log('Server error', e.message);
        process.exit(1);
    }
};

start();