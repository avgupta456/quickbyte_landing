import React from 'react';

import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className="absolute bottom-2 h-8 w-screen overflow-x-hidden">
      <div className="absolute inset-x-0 text-center text-gray-400 text-lg">
        © 2021. By{' '}
        <a
          href="https://www.abhijitgupta.io"
          className="transition ease-in duration-500 hover:text-red-500 underline"
          target="_blank"
          rel="noreferrer"
        >
          Abhijit Gupta.
        </a>{' '}
        <Link
          to="/privacy"
          className="transition ease-in duration-500 hover:text-red-500 underline"
        >
          Privacy Policy
        </Link>
        .{' '}
        <Link
          to="/terms"
          className="transition ease-in duration-500 hover:text-red-500 underline"
        >
          Terms of Service
        </Link>
      </div>
    </div>
  );
};

export default Footer;
