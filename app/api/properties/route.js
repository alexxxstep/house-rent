import connectDB from '@/config/database';

export const GET = async (request) => {
  try {
    await connectDB();
    return new Response(JSON.stringify({ message: 'Hello' }), { status: 200 });
  } catch (error) {
    console.log(error);
    return new Response(`Something went wrong - ${error}`, { status: 500 });
  }
};
