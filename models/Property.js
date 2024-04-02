// Importing necessary functions from mongoose
import { Schema, model, models } from 'mongoose';

// Creating a schema for the property, defining the shape and rules of property documents
const PropertySchema = new Schema(
  {
    owner: {
      type: Schema.Types.ObjectId, // Reference to a User document
      ref: 'User', // This indicates that the ObjectId points to a document in the 'User' collection
      required: true, // Every property must have an owner
    },
    name: {
      type: String,
      required: true, // The name of the property is required
    },
    type: {
      type: String,
      required: true, // The type of property (e.g., apartment, house) is required
    },
    description: {
      type: String, // An optional field for additional details about the property
    },
    location: {
      // Nested object for the location details
      street: {
        type: String,
      },
      city: {
        type: String,
        required: true,
      },
      state: {
        type: String,
        required: true,
      },
      zipcode: {
        type: String,
      },
    },
    beds: {
      type: Number,
      required: true, // The number of bedrooms is required
    },
    baths: {
      type: Number,
      required: true, // The number of bathrooms is required
    },
    square_feet: {
      type: Number,
      required: true, // The size of the property in square feet is required
    },
    amenities: [
      {
        type: String, // An array to list amenities included with the property
      },
    ],
    rates: {
      // Nested object for different rental rates
      nightly: {
        type: Number,
      },
      weekly: {
        type: Number,
      },
      monthly: {
        type: Number,
      },
    },
    seller_info: {
      // Nested object for seller's contact information
      name: {
        type: String,
      },
      email: {
        type: String,
        required: true, // The seller's email is required for contact
      },
      phone: {
        type: String,
      },
    },
    images: [
      {
        type: String, // An array to store URLs of images of the property
      },
    ],
    isFeatured: {
      type: Boolean,
      default: false, // Whether the property is featured; defaults to not featured
    },
  },
  {
    timestamps: true, // Automatically adds createdAt and updatedAt timestamps
  }
);

// Compiling the schema into a model or retrieving it if it already exists
const Property = models.Property || model('Property', PropertySchema);

// Exporting the Property model for use elsewhere in the application
export default Property;
