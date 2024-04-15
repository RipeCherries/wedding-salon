'use client';

import React, { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import { fetchProduct } from '../../../sanity';
import Gallery from '../../components/Gallery';

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

const availablePaths = {
  'dresses': 'dresses',
  'dresses-rental': 'dressesRental',
  'veils': 'veils',
  'decorations': 'decorations',
  'shoes': 'shoes',
  'jackets': 'jackets',
  'hand-made': 'handMade'
};

export default function ProductPage() {
  const pathname = usePathname();
  const parts = pathname.split('/');
  const category = parts[1];
  const slug = parts[2];

  const [product, setProduct] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await fetchProduct(availablePaths[category], slug);
        console.log(data[0]);
        setProduct(data[0]);
        setIsLoading(true);
      } catch (error) {
        console.error('Failed to fetch min and max price:', error);
      }
    }

    fetchData();
  }, []);

  const handleColorMouseEnter = (index) => {
    const tooltip = document.getElementById(`tooltip-${index}`);
    tooltip.classList.remove('hidden');
  };

  const handleColorMouseLeave = (index) => {
    const tooltip = document.getElementById(`tooltip-${index}`);
    tooltip.classList.add('hidden');
  };

  if (!isLoading) {
    return null;
  }

  return (
    <main className='py-10'>
      <div className='max-w-6xl mx-auto'>
        <div className='flex gap-24'>
          <div className='w-1/2'>
            <Gallery images={product.img.images} video={product.video} />
          </div>
          <div className='w-1/2 flex flex-col justify-between'>
            <div>
              <h3 className='text-primary font-bold uppercase text-xl mb-6'>{product.title}</h3>
              <p className='text-primary text-justify mb-4'>{product.description}</p>
              {product.color && (
                <div className='flex mb-4'>
                  <p className='text-primary font-bold mr-4'>Доступные цвета:</p>
                  {product.color.map((color, index) => (
                    <div className='relative'>
                      <div
                        className='w-6 h-6 rounded-full border-primary border-2 mr-1 cursor-help'
                        style={{ backgroundColor: `${color.colorHEX}` }}
                        onMouseEnter={() => handleColorMouseEnter(index)}
                        onMouseLeave={() => handleColorMouseLeave(index)}
                      />
                      <div
                        className='absolute -left-full bg-primary px-2 py-1 rounded-xl mt-1.5 tooltip hidden z-40 text-primary font-semibold'
                        id={`tooltip-${index}`}
                      >
                        {color.colorName}
                      </div>
                    </div>
                  ))}
                </div>
              )}
              {product.size && (
                <div className='flex mb-4'>
                  <p className='text-primary font-bold mr-4'>Доступные размеры:</p>
                  {product.size.map((item) => (
                    <p className='text-primary mr-4'>
                      {item.RU} {item.INT && `(${item.INT})`}
                    </p>
                  ))}
                </div>
              )}
              {product.style && (
                <div className='flex'>
                  <p className='text-primary font-bold mr-4'>Фасон:</p>
                  <p>{product.style[0].styleName}</p>
                </div>
              )}
            </div>
            <div className='flex items-center gap-4'>
              {product.discount.hasDiscount && (
                <p className='ext-primary font-bold text-4xl'>{formatPrice(product.discount.newPrice)} ₽</p>
              )}
              <p
                className={`text-primary ${product.discount.hasDiscount ? 'line-through text-2xl' : 'font-bold text-4xl'}`}
              >
                {formatPrice(product.price)} ₽
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
