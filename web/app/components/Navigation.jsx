'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navigation() {
  const pathname = usePathname();

  const searchRef = useRef(null);

  const [searchVisible, setSearchVisible] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setSearchVisible(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [searchRef]);

  const toggleSearch = () => {
    setSearchVisible((prevState) => !prevState);
  };

  return (
    <>
      <nav className="bg-secondary py-1 sticky xl:top-20 top-0 z-50 xl:h-16 xl:overflow-x-visible overflow-x-auto">
        <div className="max-w-6xl xl:mx-auto mx-4">
          <ul className="flex xl:justify-between gap-x-4 text-center items-center">
            <li>
              <Link href="/[catalog]" as="/dresses"
                    className="text-primary font-semibold py-4 hover:font-bold xl:block hidden">
                Свадебные платья
              </Link>
              <Link href="/[catalog]" as="/dresses"
                    className="text-primary font-semibold py-4 hover:font-bold xl:hidden block">
                Платья
              </Link>
            </li>
            <li>
              <Link href="/[catalog]" as="veils" className="text-primary font-semibold py-4 hover:font-bold">
                Фаты
              </Link>
            </li>
            <li>
              <Link href="/[catalog]" as="/dresses-rental" className="text-primary font-semibold py-4 hover:font-bold">
                Прокат
              </Link>
            </li>
            <li>
              <Link href="/[catalog]" as="/decorations" className="text-primary font-semibold py-4 hover:font-bold">
                Аксессуары
              </Link>
            </li>
            <li>
              <Link href="/[catalog]" as="/shoes" className="text-primary font-semibold py-4 hover:font-bold">
                Туфли
              </Link>
            </li>
            <li>
              <Link href="/[catalog]" as="/jackets"
                    className="text-primary font-semibold py-4 hover:font-bold xl:block hidden">
                Пальто/накидки
              </Link>
              <Link href="/[catalog]" as="/jackets"
                    className="text-primary font-semibold py-4 hover:font-bold xl:hidden block">
                Накидки
              </Link>
            </li>
            <li>
              <Link href="/[catalog]" as="/sales" className="text-primary font-semibold py-4 hover:font-bold">
                Скидки
              </Link>
            </li>
            <li>
              <Link href="/[catalog]" as="hand-made" className="text-primary font-semibold py-4 hover:font-bold">
                HandMade
              </Link>
            </li>
            <li>
              <button
                onClick={() => toggleSearch()}
                type="button"
                className={`text-primary hover:font-bold ${searchVisible ? 'font-bold' : 'font-semibold'} mr-4 xl:mr-0`}
              >
                Поиск
              </button>
            </li>
          </ul>
        </div>
      </nav>
      {searchVisible && (
        <div className="py-2 bg-secondary" ref={searchRef}>
          <div className="max-w-6xl xl:mx-auto flex justify-center w-full gap-4">
            <input
              className="h-12 xl:w-full rounded-xl border-primary border-2 pl-4 text-primary bg-main placeholder-primary outline-none"
              type="text"
              placeholder="Введите запрос"
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <Link
              href="/[catalog]"
              as="search"
              className="px-8 bg-quaternary rounded-xl text-secondary font-semibold flex items-center"
              onClick={() => {
                toggleSearch();
                localStorage.setItem('searchQuery', searchQuery);
                if (pathname.slice(1) === 'search') window.location.reload();
              }}
            >
              Найти
            </Link>
          </div>
        </div>
      )}
    </>
  );
}
