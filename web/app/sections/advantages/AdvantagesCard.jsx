import React from 'react';
import PropTypes from 'prop-types';

export default function AdvantagesCard({ advantage, type }) {
  return (
    <div className='min-w-56 max-w-56 p-6 rounded-2xl flex flex-col items-center'>
      <div
        className={`w-28 h-28 rounded-full ${type === 'mainPage' ? 'bg-main' : 'bg-primary'} flex justify-center items-center mb-2`}
      >
        {advantage.icon}
      </div>
      <p className='text-primary font-semibold text-s text-center'>{advantage.text}</p>
    </div>
  );
}

AdvantagesCard.propTypes = {
  advantage: PropTypes.shape({
    icon: PropTypes.node.isRequired,
    text: PropTypes.string.isRequired,
  }).isRequired,
  type: PropTypes.string.isRequired,
};
