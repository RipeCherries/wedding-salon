import React from 'react';
import Link from 'next/link';


export default function HandMadeSection() {
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
              >
                <img src="/images/hand-made.jpg" alt="hand-made luce e amore" className="rounded-xl" />
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
      </div>
    </section>
  );
}
