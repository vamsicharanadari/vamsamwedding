import { Outlet } from 'react-router-dom';
import Footer from './Footer';
import Navbar from './Navbar';

function Layout() {
  return (
    <div className="min-h-screen bg-lux-gradient text-maroon-800 font-body">
      <Navbar />
      <main className="mx-auto w-full max-w-6xl px-4 pb-14 pt-6 md:px-8 md:pb-20 md:pt-10">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default Layout;
