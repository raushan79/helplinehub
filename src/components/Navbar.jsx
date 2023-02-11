import React from 'react';
import { Link, useRouteMatch } from 'react-router-dom';

const Navbar = () => {
  let match = useRouteMatch('/');

  return (
    <nav className="flex items-center justify-between p-4 bg-gray-800 text-white">
      <Link to="/" className={`text-lg font-medium ${match.isExact ? 'underline' : ''}`}>
        Home
      </Link>
      <Link to="/add" className="text-lg font-medium">
        Add Helpline Number
      </Link>
      <Link to="/search" className="text-lg font-medium">
        SearchBar
      </Link>
    </nav>
  );
};

export default Navbar;
