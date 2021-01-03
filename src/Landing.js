import React from 'react';

import Particles from 'react-particles-js';

import Footer from './Footer';

const Landing = () => {
  return (
    <div>
      <div className="w-screen flex flex-wrap px-8">
        <div className="w-screen mt-24 xl:mt-0 xl:h-screen xl:w-1/2 xl:flex xl:flex-col xl:justify-center px-8">
          <h2 className="text-8xl 3xl:text-9xl font-bold text-center text-white">
            QuickBites
          </h2>
          <h4 className="text-3xl 3xl:text-4xl font-bold text-center text-white mt-8">
            All-in-One Food-Delivery Search
          </h4>
          <div className="mt-8 flex justify-center space-x-8">
            <button
              href="https://www.apple.com/app-store/"
              target="_blank"
              rel="noreferrer"
            >
              <img src="apple.png" alt="" className="max-h-20" />
            </button>
            <button
              href="https://play.google.com/store"
              target="_blank"
              rel="noreferrer"
            >
              <img src="google.png" alt="" className="max-h-20" />
            </button>
          </div>
        </div>
        <div className="w-screen mt-16 xl:mt-0 mb-10 xl:mb-0 xl:h-screen xl:w-1/2 xl:flex xl:flex-col xl:justify-center px-8">
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
