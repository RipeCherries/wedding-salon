import React from 'react';
import PropTypes from 'prop-types';
import PriceFilter from './PriceFilter';
import DiscountFilter from './DiscountFilter';
import SizeFilter from './SizeFilter';
import ColorsFilter from './ColorsFilter';
import StylesFilter from './StylesFilter';
import LengthFilter from './LengthFilter';

export default function Filter({ type, filters, updateFilter, search, onClose }) {
  return (
    <div className='xl:px-4 px-12 flex flex-col gap-6 bg-primary p-4 rounded-xl'>
      <PriceFilter type={type} filters={filters} onFilter={updateFilter} search={search} />
      {type !== 'sales' && <DiscountFilter filters={filters} onFilter={updateFilter} />}
      {(type === 'dresses' || type === 'dressesRental' || type === 'shoes' || type === 'jackets') && (
        <SizeFilter type={type} onFilter={updateFilter} />
      )}
      {(type === 'dresses' ||
        type === 'dressesRental' ||
        type === 'veils' ||
        type === 'shoes' ||
        type === 'jackets') && <ColorsFilter onFilter={updateFilter} />}
      {(type === 'dresses' || type === 'dressesRental' || type === 'veils') && (
        <StylesFilter type={type} onFilter={updateFilter} />
      )}
      {type === 'veils' && <LengthFilter type={type} filters={filters} onFilter={updateFilter} />}
      <button
        type='button'
        onClick={() => onClose()}
        className="bg-main font-bold text-primary mx-6 h-10 rounded-xl items-center justify-center gap-2 xl:hidden flex"
      >
        Применить
      </button>
    </div>
  );
}

Filter.propTypes = {
  type: PropTypes.string.isRequired,
  search: PropTypes.string.isRequired,
  updateFilter: PropTypes.func.isRequired,
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
  onClose: PropTypes.func.isRequired,
};
