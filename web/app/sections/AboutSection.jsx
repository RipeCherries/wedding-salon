import React from 'react';

export default function AboutSection() {
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
                className="flex transition ease-out duration-700"
              >
                <img src="/images/about.jpg" alt="about luce e amore" className="rounded-xl" />
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
      </div>
    </section>
  );
}
