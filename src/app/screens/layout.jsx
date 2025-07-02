import Navbar from '../../components/common/Navbar';
import Footer from '../../components/common/Footer';
import FSC from '../../components/common/FSC';

export const metadata = {
  title: 'Your App Name',
  description: 'Your app description',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main>{children}</main>
        <FSC />
        <Footer />
      </body>
    </html>
  );
};
