import React from 'react';
import Script from 'next/script';

const TrackingScript = () => {
  return (
    <>
      <Script defer src="https://metrics.lchant.dev/script.js" data-website-id="5173fe2d-fb5b-440b-abdb-7ac02f6b5bbc"></Script>
    </>
  );
};

export default TrackingScript;