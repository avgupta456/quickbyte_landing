import React from 'react';

import Background from './Background';

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
      </div>
    </div>
  );
};

export default Landing;
