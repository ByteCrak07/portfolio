'use client';

import { FC } from 'react';
import { GoogleAnalytics, event } from 'nextjs-google-analytics';
import { Analytics as VercelAnalytics } from '@vercel/analytics/react';
import { useReportWebVitals } from 'next/web-vitals';

const Analytics: FC = () => {
  useReportWebVitals(({ id, name, label, value }) => {
    event(name, {
      category: label === 'web-vital' ? 'Web Vitals' : 'Next.js custom metric',
      value: Math.round(name === 'CLS' ? value * 1000 : value),
      label: id,
      nonInteraction: true,
    });
  });

  return (
    <>
      <GoogleAnalytics trackPageViews={{ ignoreHashChange: true }} />
      <VercelAnalytics />
    </>
  );
};

export default Analytics;
