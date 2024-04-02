// Imports the database connection utility from the project's configuration.
// The '@' symbol is often used to denote a path alias, pointing to a specific directory in the project.
import connectDB from '@/config/database';

// Imports the Property model defined with Mongoose, used to interact with the properties collection in MongoDB.
import Property from '@/models/Property';

// Defines an asynchronous function to handle GET requests on the /api/properties endpoint.
export const GET = async (request) => {
  try {
    // Attempts to establish a connection to the database using the connectDB utility.
    // It's important to connect to the database before performing any operations.
    await connectDB();

    // Fetches all documents from the properties collection using Mongoose's find method.
    // The empty object {} as an argument to find() means no specific filtering criteria are applied,
    // thus returning all documents in the collection.
    const properties = await Property.find({});

    // Returns a successful HTTP response containing the properties data.
    // JSON.stringify is used to convert the properties array to a JSON string.
    // The response has a status code of 200, indicating success.
    return new Response(JSON.stringify(properties), {
      status: 200,
    });
  } catch (error) {
    // Catches any errors that occur during the database connection or fetching process.
    // Returns a response with a status code of 500, indicating an internal server error,
    // and a text message indicating something went wrong.
    return new Response('Something went wrong', { status: 500 });
  }
};
