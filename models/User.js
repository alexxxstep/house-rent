// Importing necessary functionalities from the mongoose package
import { Schema, model, models } from 'mongoose';

// Defining the schema for the User model
const UserSchema = new Schema(
  {
    email: {
      type: String, // Specifies the data type for email
      unique: [true, 'Email already exists!'], // Ensures email is unique in the database and provides a custom error message
      required: [true, 'Email is required!'], // Makes the email field required and provides a custom error message
    },
    username: {
      type: String, // Specifies the data type for username
      required: [true, 'Username is required!'], // Makes the username field required and provides a custom error message
    },
    image: {
      type: String, // Specifies the data type for image, which is a URL to the user's image
      // No validation rules are specified for the image, making it an optional field
    },
    bookmarks: [
      {
        type: Schema.Types.ObjectId, // Specifies that each bookmark is an ObjectId (a reference to another document)
        ref: 'Property', // Specifies the model to which the ObjectId refers, enabling population of bookmarked properties
      },
    ],
  },
  {
    timestamps: true, // Automatically adds createdAt and updatedAt timestamps to the model
  }
);

// Compiles the schema into a model or retrieves it if it already exists.
// This prevents OverwriteModelError in hot-reload environments.
const User = models.User || model('User', UserSchema);

// Exports the User model for use elsewhere in the application
export default User;
