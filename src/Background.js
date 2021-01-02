import React from 'react';

const Background = () => {
  return (
    <div>
      <div className="absolute h-screen w-screen overflow-x-hidden">
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

export default Background;
