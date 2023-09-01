import mongoose from 'mongoose';

const connectDatabase = () => {
    console.log('Connecting to database...');

    mongoose.connect('mongodb+srv://ROOT:Jvz5QMaO57PZyD5b@cluster0.47rtvth.mongodb.net/?retryWrites=true&w=majority', { useNewUrlParser: true}).then(() => console.log('Connected to database, Heey :)')).catch((error) => console.log(error));
}

export default connectDatabase;