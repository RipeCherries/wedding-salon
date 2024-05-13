import React from 'react';
import FeedbackCard from './FeedbackCard';

const feedbacks = [
  {
    id: 1,
    clientName: 'Марина',
    text:
      'Превосходное обслуживание, уютный салон, удобное местоположение, ' +
      'отзывчивые сотрудники, была на примерке с подругой, выбор платьев большой, ' +
      'комфортная атмосфера, девочки помогают, подсказывают, показывают)',
    stars: 5,
    date: '05.05.2024',
  },
  {
    id: 2,
    clientName: 'Елена',
    text:
      'Невероятно уютный салон, где невеста может выбрать всё, ' +
      'что ни пожелает! Владелица салона доброжелательная! Хочется сказать, ' +
      'что приду еще, но к сожалению свадьба не может быть часто.',
    stars: 5,
    date: '09.05.2024',
  },
  {
    id: 3,
    clientName: 'Алина',
    text:
      'Платья все в отличном состоянии, само помещение очень красивое) ' +
      'Девочки очень приятные, сразу поняли, что мне нужно) ' +
      'Конечно же взяла платье именно здесь)',
    stars: 5,
    date: '12.05.2024',
  },
];

export default function FeedbackSection() {
  return (
    <section className="xl:py-10 py-4 bg-main">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center xl:mb-6 mb-4 xl:gap-6 gap-4 justify-center">
          <div className="xl:w-36 w-20 h-1 bg-quaternary" />
          <h3 className="xl:text-3xl text-xl font-bold text-primary">Отзывы</h3>
          <div className="xl:w-36 w-20 h-1 bg-quaternary" />
        </div>
        <div className="flex flex-col items-center gap-8">
          <div className="flex xl:flex-row flex-col xl:gap-14 gap-4">
            {feedbacks.map((item) => (
              <FeedbackCard key={item.id} feedback={item} />
            ))}
          </div>
          <a
            href="https://go.2gis.com/i24cj"
            target="_blank"
            rel="noreferrer"
            className="bg-primary px-8 py-2 font-semibold text-primary rounded-xl hover:underline"
          >
            Смотреть все отзывы
          </a>
        </div>
      </div>
    </section>
  );
}
