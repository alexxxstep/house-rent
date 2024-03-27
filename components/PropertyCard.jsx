// Importing Next.js Image component for optimized image handling
import Image from 'next/image';
// Importing Link component from Next.js for client-side transitions between routes
import Link from 'next/link';

// Importing specific icons from 'react-icons/fa' for use within the property card
import {
  FaBed,
  FaBath,
  FaRulerCombined,
  FaMoneyBill,
  FaMapMarker,
} from 'react-icons/fa';

// Functional component for displaying a property card, takes a property object as props
const PropertyCard = ({ property }) => {
  // Function to determine and format the display of property rates based on availability
  const getRateDisplay = (property) => {
    const { rates } = property;

    // Checks for monthly, weekly, and nightly rates and formats them accordingly
    if (rates.monthly) {
      return `${rates.monthly.toLocaleString()}/mo`;
    } else if (rates.weekly) {
      return `${rates.weekly.toLocaleString()}/wk`;
    } else if (rates.nightly) {
      return `${rates.nightly.toLocaleString()}/night`;
    }
  };

  return (
    <div>
      <div className='rounded-xl shadow-md relative'>
        {/* Optimized image display using Next.js Image component */}
        <Image
          src={`/properties/${property.images[0]}`} // Dynamically sets the source of the image based on property data
          alt='img' // Alt text for the image, consider making this more descriptive for accessibility
          width={0} // Placeholder width, adjust this based on your layout needs
          height={0} // Placeholder height, adjust this based on your layout needs
          sizes='100vw' // Sets the size of the image relative to the viewport width
          className='w-full h-auto rounded-t-xl'
        />
        <div className='p-4'>
          <div className='text-left md:text-center lg:text-left mb-6'>
            <div className='text-gray-600'>{property.type}</div>
            <h3 className='text-xl font-bold'>{property.name}</h3>
          </div>
          {/* Rate display positioned absolutely within the card */}
          <h3 className='absolute top-[10px] right-[10px] bg-white px-4 py-2 rounded-lg text-blue-500 font-bold text-right md:text-center lg:text-right'>
            ${getRateDisplay(property)}
          </h3>

          {/* Icons and property details displayed in a row */}
          <div className='flex justify-center gap-4 text-gray-500 mb-4'>
            <p>
              <FaBed className='inline mr-2' /> {property.beds}{' '}
              <span className='md:hidden lg:inline'>Beds</span>
            </p>
            <p>
              <FaBath className='inline mr-2' /> {property.baths}{' '}
              <span className='md:hidden lg:inline'>Baths</span>
            </p>
            <p>
              <FaRulerCombined className='inline mr-2' />
              {property.square_feet}{' '}
              <span className='md:hidden lg:inline'>sqft</span>
            </p>
          </div>

          {/* Conditional rendering of rate details based on their availability */}
          <div className='flex justify-center gap-4 text-green-900 text-sm mb-4'>
            {property.rates.nightly && (
              <p>
                <FaMoneyBill className='inline mr-2' />
                Nightly
              </p>
            )}
            {property.rates.weekly && (
              <p>
                <FaMoneyBill className='inline mr-2' />
                Weekly
              </p>
            )}
            {property.rates.monthly && (
              <p>
                <FaMoneyBill className='inline mr-2' />
                Monthly
              </p>
            )}
          </div>

          {/* Divider for visual separation */}
          <div className='border border-gray-100 mb-5'></div>

          {/* Location and details link */}
          <div className='flex flex-col lg:flex-row justify-between mb-4'>
            <div className='flex align-middle gap-2 mb-4 lg:mb-0'>
              <FaMapMarker className='text-orange-700 mt-1' />
              <span className='text-orange-700'>
                {property.location.city} {property.location.state}
              </span>
            </div>
            {/* Link to property details, dynamically set based on property ID */}
            <Link
              href={`/properties/${property._id}`}
              className='h-[36px] bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg text-center text-sm'
            >
              Details
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

// Exporting the PropertyCard component for use in other parts of the application
export default PropertyCard;
