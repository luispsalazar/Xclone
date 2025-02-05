import monggose from 'mongoose';

const connectMongoDB = async () => {
    try {
        const conn = await monggose.connect(process.env.MONGO_URI)
        console.log(`MongoDB Connected: ${conn.connection.host}`);
    } catch (error) {
        console.error(`Error connecting to MongoDB: ${error.message}`);
        process.exit(1);
    }
};

export default connectMongoDB;