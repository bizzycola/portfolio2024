import React from 'react';
import Script from 'next/script';

const TrackingScript = () => {
  return (
    <>
      <Script defer src="https://metrics.lchant.dev/script.js" data-website-id="8d9d97f8-448d-4eee-9b6b-eb56d270bd2e"></Script>
    </>
  );
};

export default TrackingScript;