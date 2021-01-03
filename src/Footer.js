import React from 'react';

import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className="-mt-6 h-6 w-screen">
      <div className="absolute inset-x-8 text-center text-white text-sm sm:text-md">
        © 2021. By{' '}
        <a
          href="https://www.abhijitgupta.io"
          className="transition ease-in duration-100 hover:text-blue-300 underline"
          target="_blank"
          rel="noreferrer"
        >
          Abhijit Gupta.
        </a>{' '}
        <Link
          to="/privacy"
          className="transition ease-in duration-100 hover:text-blue-300 underline"
        >
          Privacy Policy
        </Link>
        .{' '}
        <Link
          to="/terms"
          className="transition ease-in duration-100 hover:text-blue-300 underline"
        >
          Terms and Conditions
        </Link>
      </div>
    </div>
  );
};

export default Footer;
