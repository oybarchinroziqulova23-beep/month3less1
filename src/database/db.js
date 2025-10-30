import mongoose from 'mongoose';
import { config } from '../config/index.js';

export async function dbconnect() {
  try {
    await mongoose.connect(config.db.url);
    console.log('MongoDB connected successfully');
  } catch (error) {
    console.error(' Database connection failed:', error.message);
    process.exit(1);
  }
}
