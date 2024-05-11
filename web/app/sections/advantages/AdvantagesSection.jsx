import React from 'react';
import PropTypes from 'prop-types';
import AdvantagesCard from './AdvantagesCard';

export default function AdvantagesSection({ advantages, type }) {
  return (
    <section className={`xl:py-10 py-4 ${type === 'mainPage' ? 'bg-primary' : 'bg-main'}`}>
      <div className='max-w-6xl mx-auto'>
        <div className="flex items-center xl:mb-6 mb-4 xl:mx-0 mx-6 xl:gap-6 gap-4 justify-center">
          <div className="xl:w-36 w-20 h-1 bg-quaternary" />
          <h3 className="xl:text-3xl text-xl font-bold text-center text-primary">Почему выбирают именно нас</h3>
          <div className="xl:w-36 w-20 h-1 bg-quaternary" />
        </div>
        <div className='xl:flex xl:flex-wrap grid grid-cols-2 ml-4 justify-center'>
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
