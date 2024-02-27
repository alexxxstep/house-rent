import '@/assets/styles/globals.css';

export const metadata = {
  title: 'Property Pulse',
  description: 'Find The Perfect Rental Property',
};

const MainLayout = ({ children }) => {
  return (
    <html lang='en'>
      <body>
        <div>{children}</div>
      </body>
    </html>
  );
};

export default MainLayout;
