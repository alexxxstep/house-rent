// Importing the mongoose library to interact with MongoDB
import mongoose from 'mongoose';

// Flag to track the connection status to avoid multiple connections
let connected = false;

// Asynchronous function to establish a connection to the MongoDB database
const connectDB = async () => {
  // Setting mongoose to use strict query mode for better error handling and security
  mongoose.set('strictQuery', true);

  // Check if already connected to the database to prevent multiple connections
  if (connected) {
    console.log('MongoDB is already connected...');
    return; // Exit the function if the connection is already established
  }

  // Try to connect to MongoDB using the connection string from environment variables
  try {
    await mongoose.connect(process.env.MONGODB_URI); // process.env.MONGODB_URI should contain your MongoDB connection string
    connected = true; // Update the connection flag to true on successful connection
    console.log('MongoDB connected...'); // Log success message
    return; // Exit the function after successful connection
  } catch (error) {
    // Log any errors that occur during the connection attempt
    console.log(error);
  }
};

// Exporting the connectDB function to be used elsewhere in the application
export default connectDB;
