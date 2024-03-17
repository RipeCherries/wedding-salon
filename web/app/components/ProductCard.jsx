import React from 'react';
import PropTypes from 'prop-types';
import Image from 'next/image';

function formatPrice(price) {
  let formattedPrice = price.toString();

  const separator = ' ';

  const parts = formattedPrice.split('.');
  let integerPart = parts[0];
  const decimalPart = parts[1] ? `.${parts[1]}` : '';

  integerPart = integerPart.replace(/\B(?=(\d{3})+(?!\d))/g, separator);

  formattedPrice = integerPart + decimalPart;

  return formattedPrice;
}

export default function ProductCard({ info }) {
  return (
    <div className='bg-main flex flex-col items-center py-3 px-3 rounded-xl w-52'>
      <Image src={info.image} width={200} height={350} alt={info.title} className='rounded-xl mb-2' />
      <p className='max-w-52 whitespace-normal text-center text-primary font-semibold mb-3'>{info.title}</p>
      <p className='text-center text-primary font-bold'>{formatPrice(info.price)} ₽</p>
      <p>{info.id}</p>
    </div>
  );
}

ProductCard.propTypes = {
  info: PropTypes.shape({
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    id: PropTypes.number.isRequired,
  }).isRequired,
};
