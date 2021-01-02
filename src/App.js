import React from 'react';

import Background from './Background.js';

function App() {
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
          <div className="flex justify-center right mt-24">
            <img src="iphone.png" alt="" className="w-96" />
            <img src="iphone.png" alt="" className="w-96" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
