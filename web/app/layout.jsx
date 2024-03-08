import React from 'react';
import PropTypes from 'prop-types';
import { Montserrat } from 'next/font/google';

import Header from './components/Header';

import './globals.css';

const montserrat = Montserrat({ subsets: ['cyrillic'] });

export const metadata = {
  title: 'Luce e Amore - свадебный салон',
};

export default function RootLayout({ children }) {
  return (
    <html lang='ru'>
      <body className={montserrat.className}>
        <main>
          <Header />
          <div className='max-w-6xl mx-auto pt-6'>{children}</div>
        </main>
      </body>
    </html>
  );
}

RootLayout.propTypes = {
  children: PropTypes.node.isRequired,
};