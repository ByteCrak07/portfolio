'use client';

import { FC, useEffect } from 'react';
import { GoogleAnalytics, event } from 'nextjs-google-analytics';
import { Analytics as VercelAnalytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';
import Hotjar from '@hotjar/browser';
import { useReportWebVitals } from 'next/web-vitals';

type EventOptions = Record<string, any> & {
  category?: string;
  label?: string;
  value?: number;
  nonInteraction?: boolean;
  userId?: string;
};

const analyticsEvent = (action: string, options?: EventOptions) => {
  if (process.env.NODE_ENV === 'production') {
    event(action, options);

    // disable web-vitals reporting for hotjar
    const category = options?.category;
    if (
      (!category ||
        !(category === 'Web Vitals' || category === 'Next.js custom metric')) &&
      Hotjar.isReady()
    )
      Hotjar.event(action);
  } else {
    console.log('[Dev Analytics Event]', { action, ...options });
  }
};

const Analytics: FC = () => {
  useEffect(() => {
    if (process.env.NODE_ENV === 'production')
      Hotjar.init(process.env.NEXT_PUBLIC_HOTJAR_SITE_ID, 6);
  }, []);

  useReportWebVitals(({ id, name, label, value }) => {
    analyticsEvent(name, {
      category: label === 'web-vital' ? 'Web Vitals' : 'Next.js custom metric',
      value: Math.round(name === 'CLS' ? value * 1000 : value),
      label: id,
      nonInteraction: true,
    });
  });

  return (
    <>
      {process.env.NODE_ENV === 'production' && (
        <GoogleAnalytics trackPageViews strategy='lazyOnload' />
      )}
      <VercelAnalytics />
      <SpeedInsights />
    </>
  );
};

export default Analytics;
export { analyticsEvent };
