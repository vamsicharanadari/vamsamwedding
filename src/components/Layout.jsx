import { Outlet } from 'react-router-dom';
import Footer from './Footer';
import Navbar from './Navbar';

function Layout() {
  return (
    <div className="min-h-screen bg-ivory-50 text-maroon-800 font-body">
      <Navbar />
      <main className="mx-auto w-full max-w-6xl px-4 py-8 md:px-8">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default Layout;
