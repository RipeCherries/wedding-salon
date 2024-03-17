'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { MdNavigateNext } from 'react-icons/md';
import { FaPlay } from 'react-icons/fa';
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
    <section className='py-10 bg-secondary'>
      <div className='max-w-6xl mx-auto'>
        <div className='flex items-center mb-6 gap-6 justify-center'>
          <div className='w-36 h-1 bg-quaternary' />
          <h3 className='text-3xl font-bold text-primary'>HandMade</h3>
          <div className='w-36 h-1 bg-quaternary' />
        </div>
        <div className='flex items-start justify-between gap-6'>
          <div className='w-1/2'>
            <div className='overflow-hidden relative'>
              <div
                className='flex transition ease-out duration-700'
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
              >
                {saloonImages.map((item) => (
                  <Image src={item} width={600} height={600} alt='Фоточка салона' className='rounded-xl' />
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
                    key={`circle${i*51}`}
                    className={`cursor-pointer w-3 h-3 rounded-full ${i === currentIndex ? 'bg-quaternary' : 'bg-main'}`}
                  />
                ))}
              </div>
            </div>
          </div>
          <div className='flex flex-col justify-center items-center w-1/2'>
            <h3 className='text-xl font-bold text-primary mb-4'>Свадебный салон «Luce e Amore»</h3>
            <p className='text-primary text-justify'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Mollis nunc sed id semper risus in hendrerit gravida rutrum. At augue eget arcu
              dictum varius. Purus in mollis nunc sed id semper risus in. Eu ultrices vitae auctor eu augue ut. Ut sem
              nulla pharetra diam sit amet. Pretium nibh ipsum consequat nisl. Rutrum tellus pellentesque eu tincidunt
              tortor. Venenatis lectus magna fringilla urna porttitor rhoncus dolor purus non. Nullam vehicula ipsum a
              arcu cursus vitae congue. Est ultricies integer quis auctor elit. Nunc sed augue lacus viverra vitae. Sit
              amet facilisis magna etiam tempor orci. Vivamus arcu felis bibendum ut tristique et egestas quis ipsum.
              Netus et malesuada fames ac turpis egestas. Ante in nibh mauris cursus mattis molestie a iaculis at.
            </p>
          </div>
        </div>
        {videoModalIsOpen && (
          <VideoModal
            youtubeId='GguJODC2cvI?si=oRtZCkatuEnDR8T9'
            onClose={() => setVideoModalIsOpen((prevState) => !prevState)}
          />
        )}
      </div>
    </section>
  );
}
