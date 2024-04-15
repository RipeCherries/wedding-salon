import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { fetchColors } from '../../../sanity';

export default function ColorsFilter({ onFilter }) {
  const [colors, setColors] = useState([]);

  useEffect(() => {
    async function fetchColorData() {
      try {
        const data = await fetchColors();
        setColors(data);
      } catch (error) { /* empty */ }
    }

    fetchColorData();
  }, []);

  const handleColorClick = (index) => {
    const updatedColors = [...colors];
    updatedColors[index].selected = !updatedColors[index].selected;
    setColors(updatedColors);
    const selectedSizes = updatedColors.filter((color) => color.selected).map((color) => color.colorName);
    onFilter('colors', selectedSizes);
  };

  return (
    <div className='color-filter'>
      <h3 className='text-primary font-bold text-lg mb-2'>Цвет:</h3>
      <div className='flex flex-col'>
        {colors.map((color, index) => (
          <button
            type='button'
            className='mt-1 flex items-center gap-4 cursor-pointer hover:underline'
            key={`color-${index * 325}`}
            onClick={() => handleColorClick(index)}
          >
            <div className={`w-4 h-4 border-2 border-primary rounded ${color.selected ? 'bg-quaternary' : ''}`} />
            <div className='flex gap-2 items-center'>
              <div
                className='w-4 h-4 rounded-full mr-1 cursor-pointer'
                style={{ backgroundColor: `${color.colorHEX}` }}
              />
              <p className='text-primary cursor-pointer'>{color.colorName}</p>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}

ColorsFilter.propTypes = {
  onFilter: PropTypes.func.isRequired,
};
