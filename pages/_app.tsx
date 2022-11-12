import 'styles/global.css';
import { useState } from 'react';
import { ThemeProvider } from 'next-themes';
import { SessionProvider } from 'next-auth/react';

import { Analytics } from '@vercel/analytics/react';

import Loading from './Loading';

export default function App({
  Component,
  pageProps: { session, ...pageProps }
}) {
  return (
    <SessionProvider session={session}>
      <ThemeProvider attribute="class">
        <main className="font-mono">
          <Component {...pageProps} />
          <Analytics />
        </main>
      </ThemeProvider>
    </SessionProvider>
  );
}
