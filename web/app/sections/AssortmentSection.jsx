'use client';

import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Link from 'next/link';
import ProductCard from '../components/ProductCard';
import { fetchTopProducts } from '../../sanity';

const availablePaths = {
  'dresses': 'dresses',
  'dressesRental': 'dresses-rental',
  'veils': 'veils',
  'decorations': 'decorations',
  'shoes': 'shoes',
  'jackets': 'jackets',
  'handMade': 'hand-made',
};

export default function AssortmentSection() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchTopProducts('topProducts');
      setProducts(data);
    };

    fetchData();
  }, []);

  return (
    <section className='py-10 bg-primary'>
      <div className='max-w-7xl mx-auto'>
        <div className='flex items-center mb-6 gap-6 justify-center'>
          <div className='w-36 h-1 bg-quaternary' />
          <h3 className='text-3xl font-bold text-primary'>Возможно, Вам понравится</h3>
          <div className='w-36 h-1 bg-quaternary' />
        </div>
        <Slider slidesToShow={4} slidesToScroll={products.length / 4} speed={1200}>
          {products.map((item) => (
            <Link key={item._id} href='/[product]' as={`${availablePaths[item._type]}/${item.slug.current}`} passHref>
              <ProductCard info={item} type='mainPage' />
            </Link>
          ))}
        </Slider>
      </div>
    </section>
  );
}
