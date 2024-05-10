import React from 'react';

export default function Hero() {
  return (
    <div className='relative'>
      <video autoPlay muted loop className='absolute inset-0 w-full h-full object-cover'>
        <source src="/video/hero.mp4" type="video/mp4" />
        Ваш браузер не поддерживает видео.
      </video>
      <div className='w-full h-full absolute top-0 left-0 from-gradientStart to-gradientEnd bg-gradient-to-b' />
      <div className='max-w-6xl mx-auto flex flex-col items-center relative z-10 xl:py-10 py-4'>
        <img
          src="/images/logo.svg"
          alt="Логотип свадебного салона Luce e Amore"
          className='xl:w-72 w-48'
        />
        <h1 className='xl:text-5xl text-2xl font-semibold text-justify text-primary second__font'>Салон свадебных платьев</h1>
        <h2 className='xl:text-2xl text-lg mt-4 text-justify text-primary font-semibold second__font'>
          Место, где любовь светит ярче
        </h2>
      </div>
    </div>
  );
}
