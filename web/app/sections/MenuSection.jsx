import React from 'react';
import Link from 'next/link';

export default function MenuSection() {
  return (
    <section className='py-10'>
      <div className='max-w-8xl mx-auto'>
        <div className='flex items-center mb-6 gap-6 justify-center'>
          <div className='w-36 h-1 bg-quaternary' />
          <h3 className='text-3xl font-bold text-primary'>Свадебный салон «Luce e Amore»</h3>
          <div className='w-36 h-1 bg-quaternary' />
        </div>
        <div className='flex flex-row w-full justify-center gap-4'>
          <div className='flex flex-col w-1/2 gap-4'>
            <Link href='/'>
              <div
                className='bg-no-repeat bg-left relative rounded-3xl w-full h-44 flex items-center'
                style={{ backgroundImage: `url('/images/dress.jpg')` }}
              >
                <div className='w-full h-full absolute top-0 left-0 bg-main bg-opacity-50 hover:bg-opacity-0 ease-out duration-700 rounded-3xl' />
                <p className='pl-8 text-primary font-bold text-3xl z-10'>
                  Свадебные
                  <br />
                  платья
                </p>
              </div>
            </Link>
            <div className='flex flex-row w-full gap-4'>
              <div className='flex flex-col w-2/3 gap-4'>
                <Link href='/'>
                  <div
                    className='bg-no-repeat bg-cover relative rounded-3xl w-full h-44 flex items-center'
                    style={{ backgroundImage: `url('/images/mantle.jpg')` }}
                  >
                    <div className='w-full h-full absolute top-0 left-0 bg-main bg-opacity-50 hover:bg-opacity-0 ease-out duration-700 rounded-3xl' />
                    <p className='pl-8 text-primary font-bold text-3xl z-10'>
                      Польта
                      <br />
                      Накидки
                    </p>
                  </div>
                </Link>
                <Link href='/'>
                  <div
                    className='bg-no-repeat bg-cover bg-center relative rounded-3xl w-full h-44 flex items-center'
                    style={{ backgroundImage: `url('/images/shoes.jpeg')` }}
                  >
                    <div className='w-full h-full absolute top-0 left-0 bg-main bg-opacity-60 hover:bg-opacity-0 ease-out duration-700 rounded-3xl' />
                    <p className='pl-8 text-primary font-bold text-3xl z-10'>Туфли</p>
                  </div>
                </Link>
              </div>
              <div className='w-1/3'>
                <Link href='/'>
                  <div
                    className='bg-no-repeat bg-cover bg-left relative rounded-3xl w-full h-full flex items-end justify-center'
                    style={{ backgroundImage: `url('/images/rental.jpg')` }}
                  >
                    <div className='w-full h-full absolute top-0 left-0 bg-main bg-opacity-40 hover:bg-opacity-0 ease-out duration-700 rounded-3xl' />
                    <p className='mb-7 text-primary font-bold text-3xl z-10'>Прокат</p>
                  </div>
                </Link>
              </div>
            </div>
          </div>
          <div className='flex flex-col w-1/4 h-full gap-4'>
            <div className='h-1/2'>
              <Link href='/'>
                <div
                  className='bg-no-repeat bg-cover bg-right relative rounded-3xl w-full h-72 flex items-end justify-center'
                  style={{ backgroundImage: `url('/images/veil.jpg')` }}
                >
                  <div className='w-full h-full absolute top-0 left-0 bg-main bg-opacity-50 hover:bg-opacity-0 ease-out duration-700 rounded-3xl' />
                  <p className='mb-7 text-primary font-bold text-3xl z-10'>Фаты</p>
                </div>
              </Link>
            </div>
            <div className='h-1/2'>
              <Link href='/'>
                <div
                  className='bg-no-repeat bg-cover bg-bottom relative rounded-3xl w-full h-64  flex items-end justify-center'
                  style={{ backgroundImage: `url('/images/accessories.jpg')` }}
                >
                  <div className='w-full h-full absolute top-0 left-0 bg-main bg-opacity-30 hover:bg-opacity-0 ease-out duration-700 rounded-3xl' />
                  <p className='mb-7 text-primary font-bold text-3xl z-10'>Аксессуары</p>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
