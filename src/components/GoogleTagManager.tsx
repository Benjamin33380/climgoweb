'use client';

import { useEffect } from 'react';

const GTM_ID = process.env.NEXT_PUBLIC_GTM_ID || '';

export default function GoogleTagManager() {
  useEffect(() => {
    if (typeof window !== 'undefined' && GTM_ID) {
      // Script GTM
      (function(w: any, d: any, s: any, l: any, i: any) { // eslint-disable-line @typescript-eslint/no-explicit-any
        w[l] = w[l] || [];
        w[l].push({'gtm.start': new Date().getTime(), event: 'gtm.js'});
        const f = d.getElementsByTagName(s)[0];
        const j = d.createElement(s) as HTMLScriptElement;
        const dl = l != 'dataLayer' ? '&l=' + l : '';
        j.async = true;
        j.src = 'https://www.googletagmanager.com/gtm.js?id=' + i + dl;
        if (f.parentNode) {
          f.parentNode.insertBefore(j, f);
        }
      })(window, document, 'script', 'dataLayer', GTM_ID);
    }
  }, []);

  if (!GTM_ID) return null;

  return (
    <>
      <noscript>
        <iframe
          src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
          height="0"
          width="0"
          style={{ display: 'none', visibility: 'hidden' }}
        />
      </noscript>
    </>
  );
} 