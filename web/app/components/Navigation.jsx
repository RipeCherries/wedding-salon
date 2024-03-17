'use client';

import React, { useState } from 'react';
import Link from 'next/link';

export default function Navigation() {
  const [searchVisible, setSearchVisible] = useState(false);

  const toggleSearch = () => {
    setSearchVisible((prevState) => !prevState);
  };

  return (
    <nav className='bg-secondary py-1 sticky top-16 z-50 h-16'>
      <div className='max-w-6xl mx-auto'>
        <ul className='flex justify-between py-4'>
          <li>
            <Link href='/' className='text-primary font-semibold py-4 hover:font-bold'>
              Свадебные платья
            </Link>
          </li>
          <li>
            <Link href='/' className='text-primary font-semibold py-4 hover:font-bold'>
              Фаты
            </Link>
          </li>
          <li>
            <Link href='/' className='text-primary font-semibold py-4 hover:font-bold'>
              Прокат
            </Link>
          </li>
          <li>
            <Link href='/' className='text-primary font-semibold py-4 hover:font-bold'>
              Аксессуары
            </Link>
          </li>
          <li>
            <Link href='/' className='text-primary font-semibold py-4 hover:font-bold'>
              Туфли
            </Link>
          </li>
          <li>
            <Link href='/' className='text-primary font-semibold py-4 hover:font-bold'>
              Утро невесты
            </Link>
          </li>
          <li>
            <Link href='/' className='text-primary font-semibold py-4 hover:font-bold'>
              Пальто/накидки
            </Link>
          </li>
          <li>
            <Link href='/' className='text-primary font-semibold py-4 hover:font-bold'>
              Скидки
            </Link>
          </li>
          <li>
            <Link href='/' className='text-primary font-semibold py-4 hover:font-bold'>
              HandMade
            </Link>
          </li>
          <li>
            <button
              onClick={() => toggleSearch()}
              type='button'
              className={`text-primary hover:font-bold ${searchVisible ? 'font-bold' : 'font-semibold'}`}
            >
              Поиск
            </button>
          </li>
        </ul>
      </div>
      {searchVisible && (
        <div className='py-2 bg-secondary'>
          <div className='max-w-6xl mx-auto flex w-full gap-4'>
            <input
              className='h-12 w-full rounded-xl border-primary border-2 pl-4 text-primary bg-main placeholder-primary outline-none'
              type='text'
              placeholder='Введите запрос'
            />
            <button type='button' className='px-8 bg-quaternary rounded-xl text-secondary font-semibold'>
              Найти
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
