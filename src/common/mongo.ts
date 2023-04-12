import mongoose from 'mongoose';

const dbHost = process.env.DATABASE_HOST;
const dbPort = process.env.DATABASE_PORT;
const dbName = process.env.DATABASE_NAME;


const url = 'mongodb://localhost:27019';

export const getConnection = async () => {
  mongoose.set('strictQuery', false);
  if (mongoose.connection.readyState !== mongoose.ConnectionStates.connected) {
    return await mongoose.connect(url, { dbName :'socialmedia-data',  serverSelectionTimeoutMS: 30000 });
  }
};