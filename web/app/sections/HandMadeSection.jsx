'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { MdNavigateNext } from 'react-icons/md';
import { FaPlay } from 'react-icons/fa';
import Link from 'next/link';
import VideoModal from '../components/VideoModal';

const saloonImages = [
  'https://nicolewedding.ru/upload/resize_cache/iblock/e31/720_548_2/e316d7ae5001a873d227c7ba397e77e8.jpg',
  'https://nicolewedding.ru/upload/resize_cache/iblock/9e3/720_548_2/9e33ff2ca415b699a21269db28d976e1.jpg',
  'https://nicolewedding.ru/upload/resize_cache/iblock/b9c/720_548_2/b9c97078f25f74a470905b76c098e7b7.jpg',
  'https://nicolewedding.ru/upload/resize_cache/iblock/07a/720_548_2/07aeff22845354ea8a86cbd9c14da66a.jpg',
  'https://nicolewedding.ru/upload/resize_cache/iblock/7d3/720_548_2/7d3477649123dfe95bde285027985637.jpg',
  'https://nicolewedding.ru/upload/resize_cache/iblock/75e/720_548_2/75e826ca5f4319f35bfd40027d6b010f.jpg',
  'https://nicolewedding.ru/upload/resize_cache/iblock/c9e/720_548_2/c9e94a0ca76c5b6c9427b4ed54b49370.jpg',
];

export default function HandMadeSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [videoModalIsOpen, setVideoModalIsOpen] = useState(false);

  const previousSlide = () => {
    if (currentIndex === 0) {
      setCurrentIndex(saloonImages.length - 1);
    } else {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const nextSlide = () => {
    if (currentIndex === saloonImages.length - 1) {
      setCurrentIndex(0);
    } else {
      setCurrentIndex(currentIndex + 1);
    }
  };

  return (
    <section className='xl:py-10 py-4 bg-primary'>
      <div className='max-w-6xl mx-auto'>
        <div className="flex items-center xl:mb-6 mb-4 xl:gap-6 gap-4 justify-center">
          <div className="xl:w-36 w-20 h-1 bg-quaternary" />
          <h3 className="xl:text-3xl text-xl font-bold text-primary">HandMade</h3>
          <div className="xl:w-36 w-20 h-1 bg-quaternary" />
        </div>
        <div className='flex xl:flex-row flex-col items-start justify-between gap-6'>
          <div className='xl:w-1/2'>
            <div className='overflow-hidden relative'>
              <div
                className='flex transition ease-out duration-700'
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
              >
                {saloonImages.map((item, index) => (
                  <img
                    src={item}
                    key={`image-${index * 1488}`}
                    alt="Фоточка салона"
                    className="rounded-xl"
                  />
                ))}
              </div>
              <button
                onClick={previousSlide}
                type='button'
                className='absolute top-1/2 left-2 transform -translate-y-1/2 bg-quaternary p-2 rounded-full'
              >
                <MdNavigateNext className='rotate-180' size={32} style={{ fill: '#fcf9f4' }} />
              </button>
              <button
                onClick={nextSlide}
                type='button'
                className='absolute top-1/2 right-2 transform -translate-y-1/2 bg-quaternary p-2 rounded-full'
              >
                <MdNavigateNext size={32} style={{ fill: '#fcf9f4' }} />
              </button>
              <button
                onClick={() => setVideoModalIsOpen((prevState) => !prevState)}
                type='button'
                className='absolute top-6 left-6 px-4 py-2 bg-main rounded-lg'
              >
                <FaPlay size={20} style={{ fill: '#463a3c' }} />
              </button>
              <div className='absolute bottom-2 w-full flex justify-center gap-4'>
                {saloonImages.map((item, i) => (
                  <button
                    onClick={() => setCurrentIndex(i)}
                    type='button'
                    key={`circle${i * 51}`}
                    className={`cursor-pointer w-3 h-3 rounded-full ${i === currentIndex ? 'bg-quaternary' : 'bg-main'}`}
                  />
                ))}
              </div>
            </div>
          </div>
          <div className='flex flex-col justify-center items-center xl:w-1/2 mx-6 xl:mx-0'>
            <h3 className='text-xl font-bold text-primary mb-4'>«Luce e Amore»</h3>
            <p className='text-primary text-justify'>
              Luce e Amore представляет эксклюзивные коллекции ручной работы, созданные с любовью и заботой. Каждая
              свеча, соль для ванны, шипучая бомбочка и ароматическое саше из воска - это маленький шедевр, призванный
              наполнить ваш дом теплом и уютом. Вдохновленные красотой природы и глубокими чувствами, наши продукты
              станут источником гармонии и благополучия. Они несут в себе искру радости и покоя, пробуждая чувства и
              создавая атмосферу любви и взаимопонимания. Позвольте Luce e Amore стать частью вашей жизни, добавляя свет
              и любовь в каждый момент. Создайте свой собственный ритуал красоты и умиротворения с нашими натуральными,
              экологически чистыми продуктами.
            </p>
            <Link
              href='/[catalog]'
              as='hand-made'
              className='bg-main mt-10 px-8 py-2 font-semibold text-primary rounded-xl hover:underline'
            >
              Товары
            </Link>
          </div>
        </div>
        {videoModalIsOpen && (
          <VideoModal
            url='https://www.youtube.com/embed/dQw4w9WgXcQ?si=4vlQ1pEM1V_9S1Gh'
            onClose={() => setVideoModalIsOpen((prevState) => !prevState)}
          />
        )}
      </div>
    </section>
  );
}
