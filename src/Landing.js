import React from 'react';

import Particles from 'react-particles-js';

import Footer from './Footer';

const Landing = () => {
  return (
    <div>
      <div className="w-screen min-h-screen flex flex-wrap sm:px-8">
        <div className="w-screen mt-12 md:mt-24 xl:mt-0 xl:h-screen xl:w-1/2 xl:flex xl:flex-col xl:justify-center px-8">
          <h2 className="text-5xl sm:text-8xl 3xl:text-9xl font-bold text-center text-white">
            QuickBites
          </h2>
          <h4 className="text-lg sm:text-3xl 3xl:text-4xl font-bold text-center text-white mt-8">
            All-in-One Food-Delivery Search
          </h4>
          <div className="mt-8 flex flex-wrap justify-center sm:space-x-8">
            <button
              href="https://www.apple.com/app-store/"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src="apple.png"
                alt=""
                className="mx-4 sm:mx-0 max-h-16 2xl:max-h-20"
              />
            </button>
            <button
              href="https://play.google.com/store"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src="google.png"
                alt=""
                className="mx-4 sm:mx-0 mt-4 sm:mt-0 max-h-16 2xl:max-h-20"
              />
            </button>
          </div>
        </div>
        <div className="w-screen mt-8 sm:mt-16 xl:mt-0 mb-10 xl:mb-0 xl:h-screen xl:w-1/2 xl:flex xl:flex-col xl:justify-center px-8">
          <img
            src="iphones.png"
            alt=""
            className="w-full max-w-screen-sm 3xl:max-w-screen-md mx-auto"
          />
        </div>
      </div>
      <div
        className="fixed top-0 bottom-0 left-0 right-0"
        style={{ backgroundColor: '#DC3030', zIndex: -10 }}
      >
        <Particles
          className="hidden sm:block"
          params={{
            particles: {
              number: { value: 50 },
              size: { value: 3 },
            },
          }}
        />
      </div>
      <Footer />
    </div>
  );
};

export default Landing;
