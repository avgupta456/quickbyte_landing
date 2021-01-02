import React from 'react';

const Background = () => {
  return (
    <div>
      <div className="hidden lg:block absolute h-screen w-screen overflow-x-hidden">
        <div className="relative h-full w-full bg-gray-50">
          <svg
            className="block absolute right-0 inset-y-0 h-full w-full text-red-500"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
          >
            <defs>
              <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" style={{ stopColor: '#DC3030' }} />
                <stop offset="100%" style={{ stopColor: '#E46464' }} />
              </linearGradient>
            </defs>
            <polygon points="0,0 100,0 100,20 0,90" fill="url(#grad1)" />
          </svg>
        </div>
      </div>
    </div>
  );
};

const Landing = () => {
  return (
    <div>
      <Background />
      <div className="absolute w-screen h-screen">
        <div className="flex justify-around">
          <div className="mt-32 content-center">
            <h2 className="text-6xl lg:text-8xl font-bold text-red-500 lg:text-white lg:hover:text-red-50 text-center">
              QuickBites
            </h2>
            <h4 className="text-2xl lg:text-4xl font-bold text-red-500 lg:text-white lg:hover:text-red-50 mt-8 text-center">
              All-in-One Food-Delivery Search
            </h4>
            <div className="flex mt-8 justify-center space-x-4">
              <img src="apple.png" alt="" className="h-20" />
              <img src="google.png" alt="" className="h-20" />
            </div>
          </div>
          <div className="flex justify-center right mt-16">
            <img src="iphone.png" alt="" className="w-96" />
            <img src="iphone.png" alt="" className="w-96" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
