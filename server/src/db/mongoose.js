const mongoose = require('mongoose');

// Ensure MONGO_URI is defined before attempting to connect
const mongoURI = process.env.MONGO_URI || 'mongodb://localhost:27017/todo';  // Local fallback in case the env var is not set

mongoose.connect(mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
})
    .then(() => console.log('Connected to MongoDB'))
    .catch((err) => {
        console.error('MongoDB connection error:', err);
        process.exit(1);  // Exit the process if the DB connection fails
    });
