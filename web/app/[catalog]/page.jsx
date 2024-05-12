'use client';

import React, { useState, useEffect } from 'react';
import Select from 'react-select';
import { FaSun, FaFilter } from 'react-icons/fa';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { fetchProducts, fetchTotalProductsCount } from '../../sanity';
import ProductCard from '../components/ProductCard';
import Filter from '../components/filters/Filter';
import useFilter from '../hooks/useFilter';
import Search from '../pages/Search';
import HandMade from '../pages/HandMade';

const availablePaths = {
  'dresses': 'dresses',
  'dresses-rental': 'dressesRental',
  'veils': 'veils',
  'decorations': 'decorations',
  'shoes': 'shoes',
  'jackets': 'jackets',
  'sales': 'sales',
  'hand-made': 'handMade',
};

export default function Catalog() {
  const pathname = usePathname();

  if (pathname.slice(1) === 'search') {
    return <Search />;
  }

  if (pathname.slice(1) === 'handmade') {
    return <HandMade />;
  }

  if (!(pathname.slice(1) in availablePaths)) {
    return null;
  }

  const [products, setProducts] = useState([]);
  const [currentProductsCount, setCurrentProductsCount] = useState(0);
  const [page, setPage] = useState(1);
  const { filters, updateFilter } = useFilter();
  const [sortBy, setSortBy] = useState('priceMin');
  const options = [
    { value: 'priceMin', label: 'по цене (сначала минимальная)' },
    { value: 'priceMax', label: 'по цене (сначала максимальная)' },
  ];

  const customStyles = {
    control: (provided) => ({
      ...provided,
      backgroundColor: '#fcf9f4',
      border: 'none',
      cursor: 'pointer',
      boxShadow: 'none',
    }),
    option: (provided, state) => ({
      ...provided,
      backgroundColor: state.isSelected ? '#ead5d4' : '#fcf9f4',
      color: '#463a3c',
      cursor: 'pointer',
      '&:active': {
        backgroundColor: '#ead5d4',
      },
    }),
  };

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchProducts(availablePaths[pathname.slice(1)], page, filters, sortBy);
      const productsCount = await fetchTotalProductsCount(availablePaths[pathname.slice(1)], filters);
      setCurrentProductsCount(productsCount);
      setProducts(data);
    };

    fetchData();
  }, [page, filters, sortBy]);

  const loadMore = () => {
    setPage((prevPage) => prevPage + 1);
  };

  const handleSortChange = (selectedSortBy) => {
    setSortBy(selectedSortBy.value);
  };

  const [isShowFilters, setIsShowFilters] = useState(false);
  const showFilters = () => {
    setIsShowFilters(prevState => !prevState);
  };

  return (
    <main className="xl:py-10 py-4">
      <div className="max-w-7xl mx-auto">
        <div className="flex xl:flex-row flex-col xl:gap-16 gap-2">
          <div className="w-1/4 xl:block hidden">
            <Filter type={availablePaths[pathname.slice(1)]} filters={filters} updateFilter={updateFilter} />
          </div>
          <button
            onClick={() => showFilters()}
            type="button"
            className="xl:hidden bg-primary mx-6 h-10 rounded-xl flex items-center justify-center gap-2"
          >
            <FaFilter size={20} style={{ fill: '#463a3c' }} />
            <p className="text-primary font-bold">Фильтры</p>
          </button>
          <div className="flex flex-col xl:w-3/4">
            <div className="flex xl:justify-between justify-center mb-4">
              <div className="flex xl:flex-row flex-col items-center">
                <p className="text-primary font-bold mr-4 cursor-pointer">Сортировка: </p>
                <Select
                  options={options}
                  value={options.find((option) => option.value === sortBy)}
                  onChange={handleSortChange}
                  styles={customStyles}
                />
              </div>
            </div>
            <div className={`${isShowFilters ? 'block' : 'hidden'}`}>
              <Filter
                type={availablePaths[pathname.slice(1)]}
                filters={filters}
                updateFilter={updateFilter}
                onClose={() => showFilters()}
              />
            </div>
            <div
              className={`xl:flex xl:flex-wrap xl:justify-between grid ${products.length <= 0 ? 'grid-cols-1' : 'grid-cols-2'} xl:gap-6 gap-x-10 gap-y-4 xl:mx-0 mx-6 ${isShowFilters ? 'hidden' : 'block'}`}
              style={{ justifyContent: 'flex-start' }}>
              {products.length > 0 ? (
                products.map((item) => (
                  <Link key={item._id} href="/[product]" as={`${pathname}/${item.slug.current}`} passHref>
                    <ProductCard info={item} type="catalog" />
                  </Link>
                ))
              ) : (
                <div className="flex flex-col justify-center items-center w-full mt-24 gap-4">
                  <FaSun size={100} style={{ fill: '#463a3c' }} />
                  <p className="font-semibold text-primary text-2xl">Вам очень идёт счастье!</p>
                </div>
              )}
            </div>
            {currentProductsCount !== products.length && (
              <button type="button"
                      className={`mt-4 bg-primary xl:mx-0 mx-6 py-2 font-bold text-primary rounded-xl hover:underline ${isShowFilters ? 'hidden' : 'block'}`}
                      onClick={() => loadMore()}>
                Загрузить еще
              </button>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}
