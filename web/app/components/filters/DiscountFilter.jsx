import React from 'react';
import PropTypes from 'prop-types';

export default function DiscountFilter({ filters, onFilter }) {
  const handleToggle = () => {
    onFilter('hasDiscount', !filters.hasDiscount);
  };

  return (
    <div className='flex justify-between'>
      <h3 className='text-primary font-bold text-lg'>Скидка:</h3>
      {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
      <label htmlFor='discountToggle' className='inline-flex items-center cursor-pointer'>
        <div className='relative'>
          <input
            id='discountToggle'
            type='checkbox'
            className='sr-only'
            checked={filters.hasDiscount}
            onChange={handleToggle}
          />
          <div className='block border-2 border-primary bg-main w-10 h-6 rounded-full' />
          <div
            className={`dot absolute left-1 top-1 bg-quaternary w-4 h-4 rounded-full transition ${filters.hasDiscount ? 'transform translate-x-full' : ''}`}
           />
        </div>
      </label>
    </div>
  );
}

DiscountFilter.propTypes = {
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
