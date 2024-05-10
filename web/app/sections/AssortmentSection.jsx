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
    <section className='xl:py-10 py-4 bg-primary'>
      <div className='max-w-7xl mx-auto'>
        <div className="flex items-center xl:mb-6 mb-4 xl:gap-6 gap-4 justify-center">
          <div className="xl:w-36 w-20 h-1 bg-quaternary" />
          <h3 className="xl:text-3xl text-xl font-bold text-primary">Новая коллекция</h3>
          <div className="xl:w-36 w-20 h-1 bg-quaternary" />
        </div>
        <div className='xl:block hidden'>
          <Slider slidesToShow={4} slidesToScroll={products.length / 4} speed={1200}>
            {products.map((item) => (
              <Link key={item._id} href='/[product]' as={`${availablePaths[item._type]}/${item.slug.current}`} passHref>
                <ProductCard info={item} type='mainPage' />
              </Link>
            ))}
          </Slider>
        </div>
        <div className='xl:hidden block'>
          <Slider slidesToShow={1} slidesToScroll={1} speed={1200}>
            {products.map((item) => (
              <Link key={item._id} href='/[product]' as={`${availablePaths[item._type]}/${item.slug.current}`} passHref>
                <ProductCard info={item} type='mainPage' />
              </Link>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
}
