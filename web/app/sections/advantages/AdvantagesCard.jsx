import React from 'react';
import PropTypes from 'prop-types';

export default function AdvantagesCard({ reason }) {
  return (
    <div className='min-w-56 max-w-56 p-6 rounded-2xl flex flex-col items-center'>
      <div className='w-28 h-28 rounded-full bg-main flex justify-center items-center mb-2'>{reason.icon}</div>
      <p className='text-primary font-semibold text-s text-center'>{reason.text}</p>
    </div>
  );
}

AdvantagesCard.propTypes = {
  reason: PropTypes.shape({
    icon: PropTypes.node.isRequired,
    text: PropTypes.string.isRequired,
  }).isRequired,
};