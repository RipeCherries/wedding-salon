import React from 'react';
import Link from 'next/link';
import { GiAmpleDress } from 'react-icons/gi';
import { FaLocationCrosshairs, FaClock, FaPhone, FaTrainSubway } from 'react-icons/fa6';
import { FaFacebook, FaInstagram, FaTelegram, FaTiktok, FaWhatsapp } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className='bg-primary flex mt-10'>
      <div className='flex justify-between mx-20 py-12'>
        <div className='flex flex-col items-center'>
          <div className='flex gap-4 mb-6'>
            <Link href='/' className='flex items-center hover:underline'>
              <GiAmpleDress size={32} style={{ fill: '#463a3c' }} />
              <span className='ml-2 text-l font-bold text-primary'>Свадебный салон «Luce e Amore»</span>
            </Link>
            <div className='flex gap-2 items-center'>
              <a href='https://vk.com/luce_e_amore' target='_blank' rel='noreferrer' className='mt-0.5'>
                <svg fill='#463a3c' width='22px' height='22px' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'>
                  <path d='M10 .4C4.698.4.4 4.698.4 10s4.298 9.6 9.6 9.6 9.6-4.298 9.6-9.6S15.302.4 10 .4zm3.692 10.831s.849.838 1.058 1.227c.006.008.009.016.011.02.085.143.105.254.063.337-.07.138-.31.206-.392.212h-1.5c-.104 0-.322-.027-.586-.209-.203-.142-.403-.375-.598-.602-.291-.338-.543-.63-.797-.63a.305.305 0 0 0-.095.015c-.192.062-.438.336-.438 1.066 0 .228-.18.359-.307.359h-.687c-.234 0-1.453-.082-2.533-1.221-1.322-1.395-2.512-4.193-2.522-4.219-.075-.181.08-.278.249-.278h1.515c.202 0 .268.123.314.232.054.127.252.632.577 1.2.527.926.85 1.302 1.109 1.302a.3.3 0 0 0 .139-.036c.338-.188.275-1.393.26-1.643 0-.047-.001-.539-.174-.775-.124-.171-.335-.236-.463-.26a.55.55 0 0 1 .199-.169c.232-.116.65-.133 1.065-.133h.231c.45.006.566.035.729.076.33.079.337.292.308 1.021-.009.207-.018.441-.018.717 0 .06-.003.124-.003.192-.01.371-.022.792.24.965a.216.216 0 0 0 .114.033c.091 0 .365 0 1.107-1.273a9.718 9.718 0 0 0 .595-1.274c.015-.026.059-.106.111-.137a.266.266 0 0 1 .124-.029h1.781c.194 0 .327.029.352.104.044.119-.008.482-.821 1.583l-.363.479c-.737.966-.737 1.015.046 1.748z' />
                </svg>
              </a>
              <a href='https://wa.me/qr/WHQKHZ2MRPR2M1' target='_blank' rel='noreferrer'>
                <FaWhatsapp size={22} style={{ fill: '#463a3c' }} />
              </a>
              <a
                href='https://www.instagram.com/luce.amore.nsk?igsh=MXVwZ3hlbjBqYzVhYw=='
                target='_blank'
                rel='noreferrer'
              >
                <FaInstagram size={22} style={{ fill: '#463a3c' }} />
              </a>
              <a href='https://t.me/+DIY2wZXa-SczNDky' target='_blank' rel='noreferrer'>
                <FaTelegram size={22} style={{ fill: '#463a3c' }} />
              </a>
              <a href='https://www.tiktok.com/@luce_e_amore?_t=8kVoUoBHV0a&_r=1' target='_blank' rel='noreferrer'>
                <FaTiktok size={22} style={{ fill: '#463a3c' }} />
              </a>
              <a
                href='https://www.facebook.com/profile.php?id=61555924042921&mibextid=rS40aB7S9Ucbxw6v'
                target='_blank'
                rel='noreferrer'
              >
                <FaFacebook size={22} style={{ fill: '#463a3c' }} />
              </a>
            </div>
          </div>
          <div className='flex justify-between gap-5'>
            <nav>
              <ul className='flex flex-col'>
                <li>
                  <Link href='/[catalog]' as='/dresses' className='text-primary hover:underline'>
                    Свадебные платья
                  </Link>
                </li>
                <li>
                  <Link href='/[catalog]' as='/jackets' className='text-primary hover:underline'>
                    Пальто/накидки
                  </Link>
                </li>
                <li>
                  <Link href='/[catalog]' as='/decorations' className='text-primary hover:underline'>
                    Аксессуары
                  </Link>
                </li>
                <li>
                  <Link href='/[catalog]' as='hand-made' className='text-primary hover:underline'>
                    HandMade
                  </Link>
                </li>
                <li>
                  <Link href='/[catalog]' as='/dresses-rental' className='text-primary hover:underline'>
                    Прокат
                  </Link>
                </li>
                <li>
                  <Link href='/[catalog]' as='/shoes' className='text-primary hover:underline'>
                    Туфли
                  </Link>
                </li>
                <li>
                  <Link href='/[catalog]' as='veils' className='text-primary hover:underline'>
                    Фаты
                  </Link>
                </li>
              </ul>
            </nav>
            <nav>
              <ul>
                <li>
                  <Link href='/' className='text-primary hover:underline'>
                    Контакты
                  </Link>
                </li>
                <li>
                  <Link href='/' className='text-primary hover:underline'>
                    О салоне
                  </Link>
                </li>
                <li>
                  <Link href='/' className='text-primary hover:underline'>
                    Скидки
                  </Link>
                </li>
              </ul>
            </nav>
            <div className='w-0.5 h bg-quaternary' />
            <div className='flex flex-col gap-3 max-w-96'>
              <div className='flex items-center'>
                <FaLocationCrosshairs size={22} style={{ fill: '#463a3c' }} />
                <p className='text-primary ml-2'>г. Новосибирск, ул. Семьи Шамшиных, д. 64, к. 211</p>
              </div>
              <div className='flex items-center'>
                <FaClock size={22} style={{ fill: '#463a3c' }} />
                <p className='text-primary ml-2'>Пн-Вс, 10:00-21:00</p>
              </div>
              <div className='flex items-center'>
                <FaTrainSubway size={22} style={{ fill: '#463a3c' }} />
                <div className='flex flex-col'>
                  <p className='text-primary ml-2'>м. Маршала Покрышкина - 5 мин. пешком</p>
                  <p className='text-primary ml-2'>м. Красный проспект - 10 мин. пешком</p>
                </div>
              </div>
              <div className='flex items-center'>
                <FaPhone size={22} style={{ fill: '#463a3c' }} />
                <p className='text-primary ml-2'>
                  <a href='tel:+79833058585'>+7-983-305-85-85</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <iframe
        src='https://yandex.ru/map-widget/v1/?um=constructor%3A55787647e22795882f552775a0b01484efc1a12c9a91f2402a75aa9f8bbb8cdc&amp;source=constructor'
        className='flex flex-1 w-full'
        title='Местоположение свадебного салона «Luce e Amore»'
      />
    </footer>
  );
}
