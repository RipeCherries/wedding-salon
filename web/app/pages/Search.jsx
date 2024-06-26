'use client';

import React, { useState, useEffect } from 'react';
import Select from 'react-select';
import { BiSolidCommentError } from 'react-icons/bi';
import Link from 'next/link';
import { fetchSearchProducts } from '../../sanity';
import ProductCard from '../components/ProductCard';
import Filter from '../components/filters/Filter';
import useFilter from '../hooks/useFilter';

const availablePaths = {
  'dresses': 'dresses',
  'dressesRental': 'dresses-rental',
  'veils': 'veils',
  'decorations': 'decorations',
  'shoes': 'shoes',
  'jackets': 'jackets',
  'handMade': 'hand-made'
};

export default function Search() {
  const [products, setProducts] = useState([]);
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
      const data = await fetchSearchProducts(filters, page, sortBy);
      setProducts(
        data.filter((obj) => obj.title.toLowerCase().includes(localStorage.getItem('searchQuery').toLowerCase())),
      );
    };

    fetchData();
  }, [page, filters, sortBy, localStorage.getItem('searchQuery')]);

  const loadMore = () => {
    setPage((prevPage) => prevPage + 1);
  };

  const handleSortChange = (selectedSortBy) => {
    setSortBy(selectedSortBy.value);
  };

  return (
    <main className='py-10'>
      <div className='max-w-7xl mx-auto'>
        <div className='flex gap-16'>
          <div className='w-1/4'>
            <Filter
              type='search'
              filters={filters}
              updateFilter={updateFilter}
              search={localStorage.getItem('searchQuery')}
            />
          </div>
          <div className='flex flex-col w-3/4'>
            <div className='flex justify-between mb-4'>
              <div className='flex items-center'>
                <p className='text-primary font-bold mr-4 cursor-pointer'>Сортировка: </p>
                <Select
                  options={options}
                  value={options.find((option) => option.value === sortBy)}
                  onChange={handleSortChange}
                  styles={customStyles}
                />
              </div>
            </div>
            <div className='flex flex-wrap justify-between gap-6' style={{ justifyContent: 'flex-start' }}>
              {products.length > 0 ? (
                products.slice(0, page * 6).map((item) => (
                  <Link
                    key={item._id}
                    href='/[product]'
                    as={`${availablePaths[item._type]}/${item.slug.current}`}
                    passHref
                  >
                    <ProductCard info={item} type='catalog' />
                  </Link>
                ))
              ) : (
                <div className='flex flex-col items-center w-full mt-24'>
                  <p className='font-bold text-primary text-6xl'>404</p>
                  <p className='font-semibold text-primary text-2xl'>Извините, по Вашему запросу ничего не найдено</p>
                  <BiSolidCommentError size={100} style={{ fill: '#463a3c' }} />
                </div>
              )}
            </div>
            {page * 6 < products.length && (
              <button type='button' className='mt-4 bg-primary py-2 font-bold text-primary rounded-xl' onClick={() => loadMore()}>
                Загрузить еще
              </button>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}
