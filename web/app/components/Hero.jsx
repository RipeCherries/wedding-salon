import React from 'react';

export default function Hero() {
  return (
    <section
      className="bg-no-repeat bg-cover bg-bottom bg-fixed relative"
      style={{ backgroundImage: `url('/images/hero.jpg')` }}
    >
      <div className="backdrop-blur-sm w-full h-full absolute top-0 left-0 bg-orange-50 bg-opacity-50" />
      <div className="max-w-6xl mx-auto py-16 z-10 relative">
        <h1 className="text-5xl font-bold text-justify text-primary">Ждём Вас!</h1>
        <h2 className="text-lg mt-4 text-justify text-primary font-bold">
          по адресу: г. Новосибирск, ул. Семьи Шамшиных, д. 64, к. 211
        </h2>
        <h2 className="text-lg mt-1 text-justify text-primary font-bold">
          тел.{' '}
          <a className="underline" href="tel:+79833058585">
            +7-983-305-85-85
          </a>
        </h2>
      </div>
    </section>
  );
}
