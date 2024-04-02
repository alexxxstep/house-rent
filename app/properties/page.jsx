// Import the PropertyCard component to display individual properties.
import PropertyCard from '@/components/PropertyCard';
import { fetchProperties } from '@/utils/requests';

// The PropertiesPage functional component.
const PropertiesPage = async () => {
  // JSX for the component. It conditionally renders a message if no properties are found,
  // or a grid of PropertyCard components if properties exist.

  const properties = await fetchProperties();

  // Sort the properties by create date
  properties.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));

  return (
    <div>
      <section className='px-4 py-6'>
        <div className='container-xl lg:container m-auto px-4 py-6'>
          {properties.length === 0 ? (
            <p>No properties found</p> // Displayed if there are no properties.
          ) : (
            <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
              {' '}
              {properties.map((property, index) => (
                <PropertyCard property={property} key={index} />
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

// Export the PropertiesPage component for use in the application.
export default PropertiesPage;
