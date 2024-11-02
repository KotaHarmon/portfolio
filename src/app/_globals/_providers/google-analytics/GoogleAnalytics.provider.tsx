"use client";
import { useEffect } from "react";
import ReactGA from "react-ga4";

export function GoogleAnalyticsProvider() {
  useEffect(() => {
    ReactGA.initialize(String(process.env.NEXT_PUBLIC_GOOGLE_MEASUREMENT_ID), {
      nonce: process.env.NEXT_PUBLIC_NONCE,
      /// these settings don't work and cookies are still set
      // gaOptions: {
      //   storage: 'none',
      //   storeGac: false,
      //   anonymizeIp: true,
      // },
    });
  }, []);

  return null;
}

export default GoogleAnalyticsProvider;
