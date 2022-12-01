import 'dotenv/config';
import mongoose from 'mongoose';

const connectToDatabase = (
  // eslint-disable-next-line operator-linebreak
  mongoDatabaseURI = process.env.MONGO_URI ||
'mongodb://localhost:27017/glassStore',
) => mongoose.connect(mongoDatabaseURI);

export default connectToDatabase;
