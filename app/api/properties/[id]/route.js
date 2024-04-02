import connectDB from '@/config/database';
import Property from '@/models/Property';

// GET requests on the /api/properties/:id
export const GET = async (request, { params }) => {
  try {
    // Attempts to establish a connection to the database using the connectDB utility.
    // It's important to connect to the database before performing any operations.
    await connectDB();

    const property = await Property.findById(params.id);

    if (!property) {
      return new Response('Property not found', { status: 404 });
    }

    return new Response(JSON.stringify(property), {
      status: 200,
    });
  } catch (error) {
    // Catches any errors that occur during the database connection or fetching process.
    // Returns a response with a status code of 500, indicating an internal server error,
    // and a text message indicating something went wrong.
    return new Response('Something went wrong', { status: 500 });
  }
};
