// Imports the Image component from Next.js for optimized image handling.
import Image from 'next/image';

// Defines a functional component that takes a single prop, `image`, representing the filename or path segment of the image.
const PropertyHeaderImage = ({ image }) => {
  return (
    // Wraps the Image component in a section and div elements,
    // providing styling and layout structure using Tailwind CSS classes.
    <section>
      <div className='container-xl m-auto'>
        <div className='grid grid-cols-1'>
          {/* The Image component displays the property image.
          The image source (`src`) is dynamically constructed
          using the `image` prop, assuming the images are stored
          in a folder named `properties` in the public directory. */}
          <Image
            src={`/properties/${image}`} // Dynamic source path based on the `image` prop
            alt='' // The alt attribute is left empty; ideally, it should include a descriptive text for accessibility.
            className='object-cover h-[400px] w-full' // Tailwind CSS classes for styling the image: cover the container, set a fixed height, and full width.
            width={0} // Width and height are set to 0; the image dimensions are controlled via CSS and the `sizes` attribute.
            height={0}
            sizes='100vw' // Indicates the image size should be 100% of the viewport width, a responsive setting.
            priority={true} // Gives the image loading priority, useful for critical above-the-fold images to ensure they are preloaded.
          />
        </div>
      </div>
    </section>
  );
};

// Exports the PropertyHeaderImage component for use in other parts of the application.
export default PropertyHeaderImage;
