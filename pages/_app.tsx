import 'styles/global.css';
import { useState, useEffect } from 'react';
import { ThemeProvider } from 'next-themes';
import { SessionProvider } from 'next-auth/react';

import { Analytics } from '@vercel/analytics/react';
import Loading from '../components/Loading';

export default function App({
  Component,
  pageProps: { session, ...pageProps }
}) {
  return (
    <SessionProvider session={session}>
      {/* <Loading /> */}
      <ThemeProvider attribute="class">
        <main className="font-mono ">
          <Component {...pageProps} />
          <Analytics />
        </main>
      </ThemeProvider>
    </SessionProvider>
  );
}
