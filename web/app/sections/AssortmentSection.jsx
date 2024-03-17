'use client';

import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import ProductCard from '../components/ProductCard';

const assortment = [
  {
    id: 1,
    title: 'Роскошное сияющее свадебное платье',
    price: 128000,
    article: 'LS 112-22',
    image: 'https://nicolewedding.ru/upload/resize_cache/iblock/922/922_1124_2/xqh01y7o0farrmp188hc2xox6gmlxpql.jpg',
  },
  {
    id: 2,
    title: 'Роскошное сияющее свадебное платье',
    price: 128000,
    article: 'LS 112-22',
    image: 'https://nicolewedding.ru/upload/resize_cache/iblock/922/922_1124_2/xqh01y7o0farrmp188hc2xox6gmlxpql.jpg',
  },
  {
    id: 3,
    title: 'Роскошное сияющее свадебное платье',
    price: 128000,
    article: 'LS 112-22',
    image: 'https://nicolewedding.ru/upload/resize_cache/iblock/922/922_1124_2/xqh01y7o0farrmp188hc2xox6gmlxpql.jpg',
  },
  {
    id: 4,
    title: 'Роскошное сияющее свадебное платье',
    price: 128000,
    article: 'LS 112-22',
    image: 'https://nicolewedding.ru/upload/resize_cache/iblock/922/922_1124_2/xqh01y7o0farrmp188hc2xox6gmlxpql.jpg',
  },
  {
    id: 5,
    title: 'Роскошное сияющее свадебное платье',
    price: 128000,
    article: 'LS 112-22',
    image: 'https://nicolewedding.ru/upload/resize_cache/iblock/922/922_1124_2/xqh01y7o0farrmp188hc2xox6gmlxpql.jpg',
  },
  {
    id: 6,
    title: 'Роскошное сияющее свадебное платье',
    price: 128000,
    article: 'LS 112-22',
    image: 'https://nicolewedding.ru/upload/resize_cache/iblock/922/922_1124_2/xqh01y7o0farrmp188hc2xox6gmlxpql.jpg',
  },
  {
    id: 7,
    title: 'Роскошное сияющее свадебное платье',
    price: 128000,
    article: 'LS 112-22',
    image: 'https://nicolewedding.ru/upload/resize_cache/iblock/922/922_1124_2/xqh01y7o0farrmp188hc2xox6gmlxpql.jpg',
  },
  {
    id: 8,
    title: 'Роскошное сияющее свадебное платье',
    price: 128000,
    article: 'LS 112-22',
    image: 'https://nicolewedding.ru/upload/resize_cache/iblock/922/922_1124_2/xqh01y7o0farrmp188hc2xox6gmlxpql.jpg',
  },
  {
    id: 9,
    title: 'Роскошное сияющее свадебное платье',
    price: 128000,
    article: 'LS 112-22',
    image: 'https://nicolewedding.ru/upload/resize_cache/iblock/922/922_1124_2/xqh01y7o0farrmp188hc2xox6gmlxpql.jpg',
  },
  {
    id: 10,
    title: 'Роскошное сияющее свадебное платье',
    price: 128000,
    article: 'LS 112-22',
    image: 'https://nicolewedding.ru/upload/resize_cache/iblock/922/922_1124_2/xqh01y7o0farrmp188hc2xox6gmlxpql.jpg',
  },
  {
    id: 11,
    title: 'Роскошное сияющее свадебное платье',
    price: 128000,
    article: 'LS 112-22',
    image: 'https://nicolewedding.ru/upload/resize_cache/iblock/922/922_1124_2/xqh01y7o0farrmp188hc2xox6gmlxpql.jpg',
  },
  {
    id: 12,
    title: 'Роскошное сияющее свадебное платье',
    price: 128000,
    article: 'LS 112-22',
    image: 'https://nicolewedding.ru/upload/resize_cache/iblock/922/922_1124_2/xqh01y7o0farrmp188hc2xox6gmlxpql.jpg',
  },
];

export default function AssortmentSection() {
  return (
    <section className='py-10 bg-primary'>
      <div className='max-w-6xl mx-auto'>
        <div className='flex items-center mb-6 gap-6 justify-center'>
          <div className='w-36 h-1 bg-quaternary' />
          <h3 className='text-3xl font-bold text-primary'>Возможно Вам понравится</h3>
          <div className='w-36 h-1 bg-quaternary' />
        </div>
        <Slider slidesToShow={4} slidesToScroll={4} speed={1200}>
          {assortment.map((item) => (
            <div key={item.id}>
              <ProductCard info={item} />
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}
