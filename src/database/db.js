import mongoose from 'mongoose';

const connectDatabase = () => {
    console.log('Connecting to database...');

    mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true }).then(() => console.log('Connected to database, Heey :)')).catch((error) => console.log(error));
}

export default connectDatabase; 