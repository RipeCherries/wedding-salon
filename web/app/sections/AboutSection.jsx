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

export default function AboutSection() {
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
    <section className='xl:py-10 py-4'>
      <div className='max-w-6xl mx-auto'>
        <div className="flex items-center xl:mb-6 mb-4 xl:gap-6 gap-4 justify-center">
          <div className="xl:w-36 w-20 h-1 bg-quaternary" />
          <h3 className="xl:text-3xl text-xl font-bold text-primary">О нас</h3>
          <div className="xl:w-36 w-20 h-1 bg-quaternary" />
        </div>
        <div className='flex xl:flex-row flex-col items-start justify-between gap-6'>
          <div className='xl:w-1/2'>
            <div className='overflow-hidden relative xl:mt-12'>
              <div
                className='flex transition ease-out duration-700'
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
              >
                {saloonImages.map((item, index) => (
                  <img
                    src={item}
                    key={`image-${index * 1488}`}
                    alt='Фоточка салона'
                    className='rounded-xl'
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
                    key={`circle${i * 50}`}
                    className={`cursor-pointer w-3 h-3 rounded-full ${i === currentIndex ? 'bg-quaternary' : 'bg-main'}`}
                  />
                ))}
              </div>
            </div>
          </div>
          <div className='flex flex-col justify-center items-center xl:w-1/2  mx-6 xl:mx-0'>
            <h3 className='text-xl font-bold text-primary mb-4'>Свадебный салон «Luce e Amore»</h3>
            <p className='text-primary text-justify mb-2 text-sm indent-8'>
              Дорогие невесты, Мы приглашаем Вас в свадебный салон «Luce e Amore», где любовь светит ярче и освещает
              потрясающие свадебные платья различных брендов, фасонов, цветов и размеров от 38 до 62. В место, которое
              дарит яркие, положительные эмоции и настроение, туда, где каждое платье подобрано нами с любовью и
              вниманием к деталям, чтобы подчеркнуть вашу неповторимую красоту в этот особенный день.
            </p>
            <p className='text-primary text-justify mb-2 text-sm indent-8'>
              Для нас большое значение имеет индивидуальная работа с каждой невестой, поэтому для вашего удобства мы
              закладываем то количество времени, в течение которого мы можем с нашей невестой абсолютно в комфортных
              условиях успеть примерить все понравившиеся платья. В процессе примерки дополнить образ невесты и
              остановить свой выбор на лучшем из них.
            </p>
            <p className='text-primary text-justify mb-2 text-sm indent-8'>
              И поверьте, наша невероятная команда сделает это с большой радостью, максимальной тщательностью, хорошим
              настроением, особой заботой и вниманием ко всем деталям, вашим пожеланиям и важным для вас аспектам.
            </p>
            <p className='text-primary text-justify mb-4 text-sm indent-8'>
              А ещё, для наших прекрасных невест мы специально подготовили исключительные и запоминающиеся подарки от
              нашего бренда «Luce e Amore» в знак признательности за ваше доверие в выборе именно нашего свадебного
              салона, которые мы дарим в день выдачи свадебного платья.
            </p>
            <a
              href='https://wa.me/qr/WHQKHZ2MRPR2M1'
              target='_blank'
              rel="noreferrer"
              className='bg-primary px-8 py-2 font-semibold text-primary rounded-xl hover:underline'
            >
              Записаться
            </a>
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
