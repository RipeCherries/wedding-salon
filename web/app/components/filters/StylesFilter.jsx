import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { fetchStyles } from '../../../sanity';

export default function StylesFilter({ type, onFilter }) {
  const [styles, setStyles] = useState([]);
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    async function fetchSizeData() {
      try {
        const data = await fetchStyles(type);
        setStyles(data);
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
    const updatedStyles = [...styles];
    updatedStyles[index].selected = !updatedStyles[index].selected;
    setStyles(updatedStyles);
    const selectedStyles = updatedStyles.filter((style) => style.selected).map((style) => style.styleName);
    onFilter('styles', selectedStyles);
  };

  return (
    <div>
      <h3 className='text-primary font-bold text-lg mb-2'>Фасон:</h3>
      {styles.slice(0, showAll ? styles.length : 3).map((style, index) => (
        <button
          type='button'
          className='mt-1 flex items-center gap-4 cursor-pointer hover:underline'
          key={`style-${index * 325}`}
          onClick={() => handleCheckboxChange(index)}
        >
          <div className={`w-4 h-4 border-2 border-primary rounded ${style.selected ? 'bg-quaternary' : ''}`} />
          <input
            className={`mr-4 cursor-pointer ${style.selected ? 'checked:bg-quaternary' : 'bg-main'} hidden`}
            type='checkbox'
            id={`style-${index}`}
            checked={style.selected}
            onChange={() => handleCheckboxChange(index)}
          />
          <label htmlFor={`style-${index}`} className='text-primary cursor-pointer'>
            {style.styleName}
          </label>
        </button>
      ))}
      {!showAll && styles.length > 3 && (
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

StylesFilter.propTypes = {
  type: PropTypes.string.isRequired,
  onFilter: PropTypes.func.isRequired,
};

