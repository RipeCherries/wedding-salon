import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { fetchSizes } from '../../../sanity';

export default function SizeFilter({ type, onFilter }) {
  const [sizes, setSizes] = useState([]);
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    async function fetchSizeData() {
      try {
        const data = await fetchSizes(type);
        data.sort((a, b) => a.RU - b.RU);
        setSizes(data);
      } catch (error) { /* empty */ }
    }

    fetchSizeData();
  }, []);

  const handleShowAll = () => {
    setShowAll(true);
  };

  const handleHide = () => {
    setShowAll(false);
  };

  const handleCheckboxChange = (index) => {
    const updatedSizes = [...sizes];
    updatedSizes[index].selected = !updatedSizes[index].selected;
    setSizes(updatedSizes);
    const selectedSizes = updatedSizes.filter((size) => size.selected).map((size) => size.RU);
    onFilter('sizes', selectedSizes);
  };

  return (
    <div>
      <h3 className='text-primary font-bold text-lg mb-2'>Размер:</h3>
      {sizes.slice(0, showAll ? sizes.length : 3).map((size, index) => (
        <button
          type='button'
          className='mt-1 flex items-center gap-4 cursor-pointer hover:underline'
          key={`size-${index * 325}`}
          onClick={() => handleCheckboxChange(index)}
        >
          <div className={`w-4 h-4 border-2 border-primary rounded ${size.selected ? 'bg-quaternary' : ''}`} />
          <p className='text-primary cursor-pointer'>
            {size.RU} {size.INT && `(${size.INT})`}
          </p>
        </button>
      ))}
      {!showAll && sizes.length > 3 && (
        <button type='button' className='underline text-primary' onClick={handleShowAll}>
          Показать больше
        </button>
      )}
      {showAll && (
        <button type='button' className='underline text-primary' onClick={handleHide}>
          Скрыть
        </button>
      )}
    </div>
  );
}

SizeFilter.propTypes = {
  type: PropTypes.string.isRequired,
  onFilter: PropTypes.func.isRequired,
};
