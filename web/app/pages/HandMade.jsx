import React from 'react';
import { FaHandHoldingHeart, FaHeart, FaFlag } from 'react-icons/fa';
import { FaArrowTrendUp, FaBottleDroplet } from 'react-icons/fa6';
import { GiRolledCloth, GiPresent } from 'react-icons/gi';
import { MdStyle, MdEqualizer, MdFeedback } from 'react-icons/md';
import AdvantagesSection from '../sections/advantages/AdvantagesSection';

const advantages = [
  {
    id: 1,
    icon: <FaHandHoldingHeart size={52} style={{ fill: '#463a3c' }} />,
    text: 'Эксклюзивная ручная работа\n',
  },
  {
    id: 2,
    icon: <GiRolledCloth size={52} style={{ fill: '#463a3c' }} />,
    text: 'Натуральные материалы',
  },
  {
    id: 3,
    icon: <GiPresent size={52} style={{ fill: '#463a3c' }} />,
    text: 'Подарочный боксы',
  },
  {
    id: 4,
    icon: <MdStyle size={52} style={{ fill: '#463a3c' }} />,
    text: 'Стильный дизайн',
  },
  {
    id: 5,
    icon: <FaHeart size={52} style={{ fill: '#463a3c' }} />,
    text: 'Создание уютной атмосферы',
  },
  {
    id: 6,
    icon: <MdEqualizer size={52} style={{ fill: '#463a3c' }} />,
    text: 'Контроль качества',
  },
  {
    id: 7,
    icon: <FaArrowTrendUp size={52} style={{ fill: '#463a3c' }} />,
    text: 'Мы создаем тренды',
  },
  {
    id: 8,
    icon: <MdFeedback size={52} style={{ fill: '#463a3c' }} />,
    text: 'Положительные отзывы',
  },
  {
    id: 9,
    icon: <FaBottleDroplet size={52} style={{ fill: '#463a3c' }} />,
    text: 'Натуральные эфирные масла',
  },
  {
    id: 10,
    icon: <FaFlag size={52} style={{ fill: '#463a3c' }} />,
    text: 'Рецептуры из Италии',
  },
];

export default function HandMade() {
  return (
    <main>
      <AdvantagesSection advantages={advantages} type='handMade' />
    </main>
  );
}
