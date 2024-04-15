import React from 'react';
import FeedbackCard from './FeedbackCard';

const feedbacks = [
  {
    id: 1,
    clientName: 'Кристина',
    text:
      'Превосходный выбор платьев и отличное обслуживание! ' +
      'Моя свадьба стала сказочной благодаря этому салону. ' +
      'Каждая деталь была идеально подобрана, и я чувствовала себя настоящей принцессой. ' +
      'Пять звезд без сомнения!',
    stars: 5,
    date: '26.02.2024',
  },
  {
    id: 2,
    clientName: 'Ульяна',
    text:
      'Удивительное место для подготовки к свадьбе! ' +
      'Не могла бы быть более довольна моим выбором. ' +
      'Команда салона проявила высокий профессионализм, ' +
      'помогла найти идеальное платье и предоставила прекрасный сервис. ' +
      'Четыре звезды из-за небольших задержек в ожидании.',
    stars: 4,
    date: '09.03.2024',
  },
  {
    id: 3,
    clientName: 'Мария',
    text:
      'Свадебный салон, который превзошел все мои ожидания! ' +
      'Отличный ассортимент платьев, вежливый персонал и индивидуальный ' +
      'подход к каждому клиенту. Я безмерно счастлива с моим выбором! Пять звезд!',
    stars: 5,
    date: '16.03.2024',
  },
];

export default function FeedbackSection() {
  return (
    <section className='py-10 bg-primary'>
      <div className='max-w-6xl mx-auto'>
        <div className='flex items-center mb-6 gap-6 justify-center'>
          <div className='w-36 h-1 bg-quaternary' />
          <h3 className='text-3xl font-bold text-primary'>Отзывы</h3>
          <div className='w-36 h-1 bg-quaternary' />
        </div>
        <div className='flex flex-col items-center gap-8'>
          <div className='flex gap-14'>
            {feedbacks.map((item) => (
              <FeedbackCard key={item.id} feedback={item} />
            ))}
          </div>
          <a
            href='https://go.2gis.com/i24cj'
            target='_blank'
            rel="noreferrer"
            className='bg-main px-8 py-2 font-semibold text-primary rounded-xl hover:underline'
          >
            Смотреть все отзывы
          </a>
        </div>
      </div>
    </section>
  );
}
