import React from 'react';
import {
  MenuSection,
  AssortmentSection,
  AboutSection,
  AdvantagesSection,
  FeedbackSection,
  HandMadeSection,
} from './sections';
import { GiAmpleDress, GiReceiveMoney } from 'react-icons/gi';
import { FaMedal } from 'react-icons/fa';
import { BiSolidChart, BiSolidUserCheck } from 'react-icons/bi';
import { IoCalendar, IoResizeOutline } from 'react-icons/io5';
import { GrLocation } from 'react-icons/gr';
import { BsListStars } from 'react-icons/bs';
import { MdFeedback } from 'react-icons/md';

const advantages = [
  {
    id: 1,
    icon: <GiAmpleDress size={52} style={{ fill: '#463a3c' }} />,
    text: 'Уникальный дизайн и стиль',
  },
  {
    id: 2,
    icon: <FaMedal size={52} style={{ fill: '#463a3c' }} />,
    text: 'Высокое качество услуг',
  },
  {
    id: 3,
    icon: <BiSolidUserCheck size={52} style={{ fill: '#463a3c' }} />,
    text: 'Индивидуальный подход к каждому клиенту',
  },
  {
    id: 4,
    icon: <IoResizeOutline size={52} style={{ fill: '#463a3c' }} />,
    text: 'Широкий выбор моделей и размеров',
  },
  {
    id: 5,
    icon: <BiSolidChart size={52} style={{ fill: '#463a3c' }} />,
    text: 'Профессиональные консультанты',
  },
  {
    id: 6,
    icon: <GrLocation size={52} style={{ fill: '#463a3c' }} />,
    text: 'Удобное расположение и уютная атмосфера',
  },
  {
    id: 7,
    icon: <BsListStars size={52} style={{ fill: '#463a3c' }} />,
    text: 'Полный спектр услуг',
  },
  {
    id: 8,
    icon: <MdFeedback size={52} style={{ fill: '#463a3c' }} />,
    text: 'Положительные отзывы и репутация',
  },
  {
    id: 9,
    icon: <GiReceiveMoney size={52} style={{ fill: '#463a3c' }} />,
    text: 'Доступные цены и специальные предложения',
  },
  {
    id: 10,
    icon: <IoCalendar size={52} style={{ fill: '#463a3c' }} />,
    text: 'Гибкий график и удобные условия записи',
  },
];

export default function Home() {
  return (
    <main>
      <MenuSection />
      <AssortmentSection />
      <AboutSection />
      <AdvantagesSection advantages={advantages} type='mainPage' />
      <FeedbackSection />
      <HandMadeSection />
    </main>
  );
}
