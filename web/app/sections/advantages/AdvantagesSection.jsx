import React from 'react';
import PropTypes from 'prop-types';
import AdvantagesCard from './AdvantagesCard';

export default function AdvantagesSection({ advantages, type }) {
  return (
    <section className={`py-10 ${type === 'mainPage' ? 'bg-primary' : 'bg-main'}`}>
      <div className='max-w-6xl mx-auto'>
        <div className='flex items-center mb-6 gap-6 justify-center'>
          <div className='w-36 h-1 bg-quaternary' />
          <h3 className='text-3xl font-bold text-primary'>Почему выбирают именно нас</h3>
          <div className='w-36 h-1 bg-quaternary' />
        </div>
        <div className='flex flex-wrap justify-center'>
          {advantages.map((item) => (
            <AdvantagesCard key={item.id} advantage={item} type={type} />
          ))}
        </div>
      </div>
    </section>
  );
}

AdvantagesSection.propTypes = {
  advantages: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    icon: PropTypes.node.isRequired,
    text: PropTypes.string.isRequired,
  })).isRequired,
  type: PropTypes.string.isRequired,
}
