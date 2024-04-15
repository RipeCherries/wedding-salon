import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { fetchMinMaxPrice } from '../../../sanity';

export default function PriceFilter({ type, filters, onFilter, search }) {
  const handleMinPriceChange = (e) => {
    onFilter('minPrice', e.target.value);
  };

  const handleMaxPriceChange = (e) => {
    onFilter('maxPrice', e.target.value);
  };

  useEffect(() => {
    async function fetchPriceData() {
      try {
        const { minPriceValue, maxPriceValue } = await fetchMinMaxPrice(type, search);
        onFilter('minPrice', minPriceValue);
        onFilter('maxPrice', maxPriceValue);
      } catch (error) {
        /* empty */
      }
    }

    fetchPriceData();
  }, []);

  return (
    <div>
      <h3 className='text-primary font-bold text-lg mb-2'>Цена:</h3>
      <div className='flex justify-between items-center'>
        <label htmlFor='minPrice' className='flex items-center'>
          От:
          <input
            id='minPrice'
            type='number'
            className='bg-main border-primary border-2 rounded-lg py-1 text-center w-24 px-2 placeholder-primary outline-none ml-2'
            value={filters.minPrice}
            onChange={handleMinPriceChange}
          />
        </label>
        <label htmlFor='maxPrice' className='flex items-center'>
          До:
          <input
            id='maxPrice'
            type='number'
            className='bg-main border-primary border-2 rounded-lg py-1 text-center w-24 px-2 placeholder-primary outline-none ml-2'
            value={filters.maxPrice}
            onChange={handleMaxPriceChange}
          />
        </label>
      </div>
    </div>
  );
}

PriceFilter.propTypes = {
  type: PropTypes.string.isRequired,
  search: PropTypes.string.isRequired,
  onFilter: PropTypes.func.isRequired,
  filters: PropTypes.shape({
    minPrice: PropTypes.string.isRequired,
    maxPrice: PropTypes.string.isRequired,
    hasDiscount: PropTypes.bool.isRequired,
    sizes: PropTypes.arrayOf(PropTypes.string).isRequired,
    colors: PropTypes.arrayOf(PropTypes.string).isRequired,
    styles: PropTypes.arrayOf(PropTypes.string).isRequired,
    minVeilsLength: PropTypes.string.isRequired,
    maxVeilsLength: PropTypes.string.isRequired,
  }).isRequired,
};
