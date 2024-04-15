import { ClipLoader } from 'react-spinners';

// CSS styles object to override default ClipLoader styles
const override = {
  display: 'block', // Makes the loader display as a block element
  margin: '100px auto', // Centers the loader horizontally with a margin and sets the vertical margin to 100px
};

const Spinner = ({ loading }) => {
  return (
    <>
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

export default Spinner;
