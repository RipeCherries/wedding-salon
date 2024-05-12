import React from 'react';
import PropTypes from 'prop-types';
import { BiSolidDiscount } from 'react-icons/bi';
import { urlFor } from '../../sanity';

function formatPrice(price) {
  if (!price) {
    return 0;
  }
  let formattedPrice = price.toString();

  const separator = ' ';

  const parts = formattedPrice.split('.');
  let integerPart = parts[0];
  const decimalPart = parts[1] ? `.${parts[1]}` : '';

  integerPart = integerPart.replace(/\B(?=(\d{3})+(?!\d))/g, separator);

  formattedPrice = integerPart + decimalPart;

  return formattedPrice;
}

export default function ProductCard({ info, type }) {
  const handleMouseEnter = (id) => {
    const title = document.getElementById(id);
    title.classList.add('underline');
  };

  const handleMouseLeave = (id) => {
    const title = document.getElementById(id);
    title.classList.remove('underline');
  };

  return (
    <div
      className={`relative ${type === 'mainPage' ? 'bg-main' : 'bg-primary'} flex flex-col items-center p-2 rounded-xl xl:w-72 xl:h-[430px] w-44 h-80 cursor-pointer`}
      onMouseEnter={() => handleMouseEnter(info._id)}
      onMouseLeave={() => handleMouseLeave(info._id)}
    >
      <img
        className='xl:w-80 xl:h-80 w-64 h-48 rounded-xl mb-2 object-cover'
        src={urlFor(info.img.images[0]).url()}
        alt={info.img.images[0].alt}
      />
      <p id={info._id} className='whitespace-normal text-center text-base text-primary font-semibold xl:mb-3 mb-1'>
        {info.title}
      </p>
      <div className='flex xl:flex-row flex-col xl:gap-6 gap-1'>
        <p className={`text-center text-primary font-bold ${info.discount.hasDiscount ? 'line-through' : ''}`}>
          {formatPrice(info.price)} ₽ {info._type === 'dressesRental' && '/ 5 суток'}
        </p>
        {info.discount.hasDiscount && <p className='text-primary font-bold'>{formatPrice(info.discount.newPrice)} ₽</p>}
      </div>
      {info.discount.hasDiscount && (
        <div>
          <div className="absolute top-0 right-0 bg-primary gap-2 items-center px-4 py-2 rounded-xl xl:hidden flex">
            <p className="text-primary text-xs font-bold">{info.discount.discountPercentage} %</p>
          </div>
          <div className="absolute top-6 left-0 bg-primary gap-2 items-center px-4 py-2 rounded-xl xl:flex hidden">
              <BiSolidDiscount size={28} style={{ fill: '#463a3c' }} />
            <p className="text-primary text-xl font-bold">{info.discount.discountPercentage} %</p>
          </div>
        </div>
      )}
    </div>
  );
}

ProductCard.propTypes = {
  info: PropTypes.shape({
    _type: PropTypes.string.isRequired,
    _id: PropTypes.string.isRequired,
    img: PropTypes.shape({
      images: PropTypes.arrayOf(
        PropTypes.shape({
          alt: PropTypes.string.isRequired,
          _key: PropTypes.string.isRequired,
          _type: PropTypes.string.isRequired,
        }),
      ).isRequired,
    }).isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    discount: PropTypes.shape({
      hasDiscount: PropTypes.bool,
      newPrice: PropTypes.number,
      discountPercentage: PropTypes.number,
    })
  }).isRequired,
  type: PropTypes.string.isRequired,
};
