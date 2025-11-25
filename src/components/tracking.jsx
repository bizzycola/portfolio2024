import React from 'react';
import Script from 'next/script';

const TrackingScript = () => {
  return (
    <>
      <Script defer src="https://metrics.lchost.dev/api/script.js" data-site-id="d3f12929943b"></Script>
    </>
  );
};

export default TrackingScript;