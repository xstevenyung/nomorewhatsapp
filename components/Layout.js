import Footer from '../components/Footer';

export default function Layout({ children }) {
  return (
    <>
      <main className="bg-gray-50 border-t-8 border-blue-500">{children}</main>

      <Footer />
    </>
  );
}
