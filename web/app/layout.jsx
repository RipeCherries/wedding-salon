import React from 'react';
import PropTypes from 'prop-types';
import { Montserrat } from 'next/font/google';

import Header from './components/Header';
import Hero from './components/Hero';
import Footer from './components/Footer';
import Navigation from './components/Navigation';

import './globals.css';

const montserrat = Montserrat({ subsets: ['cyrillic'] });

export const metadata = {
  title: 'Luce e Amore - свадебный салон',
};

export default function RootLayout({ children }) {
  return (
    <html lang='ru'>
      <body className={montserrat.className}>
        <main className='flex flex-col justify-between'>
          <Header />
          <Hero />
          <Navigation />
          <div className='mb-auto relative'>{children}</div>
          <Footer />
        </main>
      </body>
    </html>
  );
}

RootLayout.propTypes = {
  children: PropTypes.node.isRequired,
};
