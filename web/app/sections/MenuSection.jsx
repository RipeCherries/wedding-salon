import React from 'react';
import Link from 'next/link';

export default function MenuSection() {
  return (
    <section className="xl:py-10 py-4">
      <div className="max-w-8xl mx-auto">
        <div className="flex items-center xl:mb-6 mb-4 xl:gap-6 gap-4 justify-center">
          <div className="xl:w-36 w-20 h-1 bg-quaternary" />
          <h3 className="xl:text-3xl text-xl font-bold text-primary">Ассортимент</h3>
          <div className="xl:w-36 w-20 h-1 bg-quaternary" />
        </div>
        <div className="flex xl:flex-row flex-col xl:w-full justify-center gap-4 xl:mx-0 mx-6">
          <div className="flex flex-col gap-4 xl:w-1/4">
            <Link href="/[catalog]" as="/dresses-rental">
              <div
                className="bg-no-repeat bg-cover bg-left relative rounded-3xl w-full xl:h-80 h-40 flex items-end justify-center"
                style={{ backgroundImage: `url('/images/rental.jpg')` }}
              >
                <div
                  className="w-full h-full absolute top-0 left-0 bg-main bg-opacity-50 hover:bg-opacity-30 ease-out duration-700 rounded-3xl" />
                <p className="mb-7 text-primary font-bold text-3xl z-10">Прокат</p>
              </div>
            </Link>
            <Link href="/[catalog]" as="/decorations">
              <div
                className="bg-no-repeat bg-cover bg-center relative rounded-3xl w-full xl:h-52 h-40 flex items-end justify-center"
                style={{ backgroundImage: `url('/images/accessories.jpg')` }}
              >
                <div
                  className="w-full h-full absolute top-0 left-0 bg-main bg-opacity-50 hover:bg-opacity-30 ease-out duration-700 rounded-3xl" />
                <p className="mb-7 text-primary font-bold text-3xl z-10">Аксессуары</p>
              </div>
            </Link>
          </div>
          <div className="flex flex-col gap-4 xl:w-1/5">
            <Link href="/[catalog]" as="veils">
              <div
                className="bg-no-repeat bg-cover bg-top relative rounded-3xl w-full xl:h-44 h-40 flex items-end justify-center"
                style={{ backgroundImage: `url('/images/veil.jpg')` }}
              >
                <div
                  className="w-full h-full absolute top-0 left-0 bg-main bg-opacity-50 hover:bg-opacity-30 ease-out duration-700 rounded-3xl" />
                <p className="mb-7 text-primary font-bold text-3xl z-10">Фаты</p>
              </div>
            </Link>
            <Link href="/[catalog]" as="/jackets">
              <div
                className="bg-no-repeat bg-cover bg-center relative rounded-3xl w-full xl:h-40 h-40 flex items-center"
                style={{ backgroundImage: `url('/images/mantle.jpg')` }}
              >
                <div
                  className="w-full h-full absolute top-0 left-0 bg-main bg-opacity-50 hover:bg-opacity-30 ease-out duration-700 rounded-3xl" />
                <p className="pl-8 text-primary font-bold text-3xl z-10">
                  Пальто
                  <br />
                  Накидки
                </p>
              </div>
            </Link>
            <Link href="/[catalog]" as="/shoes">
              <div
                className="bg-no-repeat bg-cover bg-bottom relative rounded-3xl w-full xl:h-44 h-40 flex items-center"
                style={{ backgroundImage: `url('/images/shoes.jpg')` }}
              >
                <div
                  className="w-full h-full absolute top-0 left-0 bg-main bg-opacity-50 hover:bg-opacity-30 ease-out duration-700 rounded-3xl" />
                <p className="pl-8 text-primary font-bold text-3xl z-10">Туфли</p>
              </div>
            </Link>
          </div>
          <div className="flex flex-col gap-4 xl:w-1/4">
            <Link href="/[catalog]" as="/dresses">
              <div
                className="bg-no-repeat bg-center relative rounded-3xl w-full xl:h-[544px] h-40 flex items-center"
                style={{ backgroundImage: `url('/images/dress.jpg')` }}
              >
                <div
                  className="w-full h-full absolute top-0 left-0 bg-main bg-opacity-50 hover:bg-opacity-30 ease-out duration-700 rounded-3xl" />
                <p className="pl-8 text-primary font-bold text-3xl z-10">
                  Свадебные
                  <br />
                  платья
                </p>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
