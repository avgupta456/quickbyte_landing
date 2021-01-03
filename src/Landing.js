import React from 'react';

import Particles from 'react-particles-js';

import Footer from './Footer';

const Landing = () => {
  return (
    <div>
      <Background />
      <div className="absolute w-screen h-screen">
        <div className="flex justify-around">
          <div className="mt-32 content-center">
            <h2 className="text-8xl font-bold text-center text-white">
              QuickBites
            </h2>
            <h4 className="text-4xl font-bold text-center text-white mt-8">
              All-in-One Food-Delivery Search
            </h4>
            <div className="flex mt-8 justify-center space-x-4">
              <a
                href="https://www.apple.com/app-store/"
                target="_blank"
                rel="noreferrer"
              >
                <img src="apple.png" alt="" className="h-20" />
              </a>
              <a
                href="https://play.google.com/store"
                target="_blank"
                rel="noreferrer"
              >
                <img src="google.png" alt="" className="h-20" />
              </a>
            </div>
          </div>
          <img src="iphones.png" alt="" className="right mt-16 w-1/2" />
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
