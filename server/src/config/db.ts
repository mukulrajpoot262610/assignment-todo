import mongoose from 'mongoose';

const MONGODB_URI = 'mongodb://localhost:27017/todo-db';

const options = {
    autoIndex: false,
    maxPoolSize: 10,
    family: 4,
    useNewUrlParser: true,
};

const DBConnect = async () => {
    try {
        const response = await mongoose.connect(MONGODB_URI, options);
        if (response) {
            console.log('MongoDB connected...');
        }
    } catch (err) {
        console.log(err);
        process.exit(1);
    }
};

export default DBConnect;
