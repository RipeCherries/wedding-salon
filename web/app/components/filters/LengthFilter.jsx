import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { fetchMinMaxLength } from '../../../sanity';

export default function LengthFilter({ type, filters, onFilter }) {
  const handleMinLength = (e) => {
    onFilter('minVeilsLength', e.target.value);
  };

  const handleMaxLength = (e) => {
    onFilter('maxVeilsLength', e.target.value);
  };

  useEffect(() => {
    async function fetchLengthData() {
      try {
        const { minVeilsLengthValue, maxVeilsLengthValue } = await fetchMinMaxLength(type);
        onFilter('minVeilsLength', minVeilsLengthValue);
        onFilter('maxVeilsLength', maxVeilsLengthValue);
      } catch (error) { /* empty */ }
    }

    fetchLengthData();
  }, []);

  return (
    <div>
      <h3 className='text-primary font-bold text-lg mb-2'>Длина фаты:</h3>
      <div className='flex justify-between items-center'>
        <label htmlFor="minLength" className="flex items-center">
          От:
          <input
            id="minLength"
            type="number"
            className='bg-main border-primary border-2 rounded-lg py-1 text-center w-24 px-2 placeholder-primary outline-none ml-2'
            value={filters.minVeilsLength}
            onChange={handleMinLength}
          />
        </label>

        <label htmlFor="maxLength" className="flex items-center">
          До:
          <input
            id="maxLength"
            type="number"
            className='bg-main border-primary border-2 rounded-lg py-1 text-center w-24 px-2 placeholder-primary outline-none ml-2'
            value={filters.maxVeilsLength}
            onChange={handleMaxLength}
          />
        </label>
      </div>
    </div>
  );
}

LengthFilter.propTypes = {
  type: PropTypes.string.isRequired,
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