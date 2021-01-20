import React, { useState } from 'react';

import { useTimeout } from 'react-use';
import Grow from '@material-ui/core/Grow';
import Particles from 'react-particles-js';

import Footer from './Footer';

const Landing = () => {
  const [smallReady, setSmallReady] = useState(false);
  const [largeReady, setLargeReady] = useState(false);
  // eslint-disable-next-line no-unused-vars
  const [showLarge, cancel] = useTimeout(5000);

  return (
    <div>
      <div className="w-screen min-h-screen flex flex-wrap sm:px-8">
        <div className="w-screen mt-12 md:mt-24 xl:mt-0 xl:h-screen xl:w-1/2 xl:flex xl:flex-col xl:justify-center px-8">
          <h2 className="text-5xl sm:text-8xl 3xl:text-9xl font-bold text-center text-white">
            QuickBites
          </h2>
          <h4 className="text-lg sm:text-3xl 3xl:text-4xl font-bold text-center text-white mt-8">
            All-in-One Food Delivery Search
          </h4>
          <div className="mt-8 flex flex-wrap justify-center sm:space-x-8">
            <a
              href="https://apps.apple.com/us/app/quickbites-food-delivery/id1548207751"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src="apple.png"
                alt=""
                className="mx-4 sm:mx-0 max-h-16 2xl:max-h-20"
              />
            </a>
            <a
              href="https://play.google.com/store/apps/details?id=app.quickbites"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src="google.png"
                alt=""
                className="mx-4 sm:mx-0 mt-4 sm:mt-0 max-h-16 2xl:max-h-20"
              />
            </a>
          </div>
        </div>
        <div className="w-screen mt-8 sm:mt-16 xl:mt-0 mb-10 xl:mb-0 xl:h-screen xl:w-1/2 xl:flex xl:flex-col xl:justify-center px-8">
          {largeReady && showLarge() ? (
            <img
              src="iphones.png"
              alt=""
              className="w-full max-w-lg 3xl:max-w-xl mx-auto"
              onLoad={() => setLargeReady(true)}
            />
          ) : (
            <Grow
              in={smallReady}
              style={{ transformOrigin: 'center' }}
              {...(smallReady ? { timeout: 2000 } : {})}
            >
              <img
                src="iphones_small.png"
                alt=""
                className="w-full max-w-lg 3xl:max-w-xl mx-auto"
                onLoad={() => setSmallReady(true)}
              />
            </Grow>
          )}
        </div>
      </div>
      <img
        src="iphones.png"
        alt=""
        className="w-0 h-0"
        onLoad={() => setLargeReady(true)}
      />
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
