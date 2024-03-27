// Directive for Next.js to ensure this component runs on the client side only
'use client';

// Importing the ClipLoader component from the 'react-spinners' library
import { ClipLoader } from 'react-spinners';

// CSS styles object to override default ClipLoader styles
const override = {
  display: 'block', // Makes the loader display as a block element
  margin: '100px auto', // Centers the loader horizontally with a margin and sets the vertical margin to 100px
};

// Functional component LoadingPage that takes a 'loading' prop
const LoadingPage = ({ loading }) => {
  return (
    <>
      {/* ClipLoader component from react-spinners with custom props */}
      <ClipLoader
        color='#3B82F6' // Sets the color of the spinner
        loading={loading} // Controls the visibility of the spinner based on the 'loading' prop
        cssOverride={override} // Applies the custom CSS styles defined above
        size={150} // Sets the size of the spinner
        aria-label='Loading Spinner' // Accessibility label for screen readers
      />
    </>
  );
};

// Exporting LoadingPage component as the default export of the module
export default LoadingPage;
