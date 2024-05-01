import React from 'react';
import PropTypes from 'prop-types';
import { Montserrat } from 'next/font/google';

import Header from './components/Header';
import Hero from './components/Hero';
import Footer from './components/Footer';
import Navigation from './components/Navigation';
import Metrika from './components/Metrika';

import './globals.css';

const montserrat = Montserrat({ subsets: ['cyrillic'] });

export const metadata = {
  title: 'Luce e Amore - свадебный салон в Новосибирске',
  description: 'Погрузитесь в мир романтики и изысканных свадебных нарядов в салоне "Luce e Amore". Откройте для себя коллекции платьев разных брендов, фасонов и размеров от 38 до 62. Наша заботливая команда с удовольствием поможет вам подобрать идеальное платье, отражающее вашу неповторимую красоту в этот важный день.',
  keywords: 'свадебный салон, свадебные платья, коллекция свадебных платьев, романтические наряды, платья для невесты, Luce e Amore, свадебные аксессуары, подбор свадебного наряда, роскошные свадебные наряды, индивидуальный подход, размеры для невесты, модные бренды, свадебные платья в новосибирске, свадебный салон новосибирск, новосибирск'
};

export default function RootLayout({ children }) {
  return (
    <html lang="ru">
    <body className={montserrat.className}>
    <main className="flex flex-col justify-between">
      <Header />
      <Hero />
      <Navigation />
      <div className="mb-auto relative">{children}</div>
      <Footer />
    </main>
    <Metrika />
    </body>
    </html>
  );
}

RootLayout.propTypes = {
  children: PropTypes.node.isRequired,
};
