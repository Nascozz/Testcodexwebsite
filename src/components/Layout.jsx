import { useEffect, useState } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import Navbar from './Navbar.jsx';
import Footer from './Footer.jsx';

export default function Layout() {
  const location = useLocation();
  const [showFlash, setShowFlash] = useState(false);

  useEffect(() => {
    setShowFlash(true);
    const timeout = setTimeout(() => setShowFlash(false), 520);
    return () => clearTimeout(timeout);
  }, [location.pathname]);

  return (
    <div className="app-shell">
      <Navbar />
      <AnimatePresence mode="wait">
        <motion.main
          key={location.pathname}
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -24 }}
          transition={{ duration: 0.55, ease: 'easeInOut' }}
        >
          <Outlet />
        </motion.main>
      </AnimatePresence>
      <AnimatePresence>
        {showFlash && (
          <motion.div
            className="page-transition-flash"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.85 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4, ease: 'easeOut' }}
          />
        )}
      </AnimatePresence>
      <Footer />
    </div>
  );
}
