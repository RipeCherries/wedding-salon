import React from 'react';
import Link from 'next/link';
import { GiAmpleDress } from 'react-icons/gi';
import { FaWhatsapp, FaInstagram, FaTelegram, FaTiktok, FaFacebook } from 'react-icons/fa';

export default function Header() {
  return (
    <header className='bg-primary py-4 h-16 sticky top-0 z-50'>
      <div className='max-w-6xl mx-auto flex justify-between'>
        <div>
          <Link href='/' className='flex items-center'>
            <GiAmpleDress size={32} style={{ fill: '#463a3c' }} />
            <span className='ml-2 text-l font-bold text-primary'>Свадебный салон «Luce e Amore»</span>
          </Link>
        </div>
        <div className='flex gap-2 items-center'>
          <a href='https://vk.com/luce_e_amore' target='_blank' rel='noreferrer' className='mt-0.5'>
            <svg fill='#463a3c' width='29px' height='29px' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'>
              <path d='M10 .4C4.698.4.4 4.698.4 10s4.298 9.6 9.6 9.6 9.6-4.298 9.6-9.6S15.302.4 10 .4zm3.692 10.831s.849.838 1.058 1.227c.006.008.009.016.011.02.085.143.105.254.063.337-.07.138-.31.206-.392.212h-1.5c-.104 0-.322-.027-.586-.209-.203-.142-.403-.375-.598-.602-.291-.338-.543-.63-.797-.63a.305.305 0 0 0-.095.015c-.192.062-.438.336-.438 1.066 0 .228-.18.359-.307.359h-.687c-.234 0-1.453-.082-2.533-1.221-1.322-1.395-2.512-4.193-2.522-4.219-.075-.181.08-.278.249-.278h1.515c.202 0 .268.123.314.232.054.127.252.632.577 1.2.527.926.85 1.302 1.109 1.302a.3.3 0 0 0 .139-.036c.338-.188.275-1.393.26-1.643 0-.047-.001-.539-.174-.775-.124-.171-.335-.236-.463-.26a.55.55 0 0 1 .199-.169c.232-.116.65-.133 1.065-.133h.231c.45.006.566.035.729.076.33.079.337.292.308 1.021-.009.207-.018.441-.018.717 0 .06-.003.124-.003.192-.01.371-.022.792.24.965a.216.216 0 0 0 .114.033c.091 0 .365 0 1.107-1.273a9.718 9.718 0 0 0 .595-1.274c.015-.026.059-.106.111-.137a.266.266 0 0 1 .124-.029h1.781c.194 0 .327.029.352.104.044.119-.008.482-.821 1.583l-.363.479c-.737.966-.737 1.015.046 1.748z' />
            </svg>
          </a>
          <a href='https://wa.me/qr/WHQKHZ2MRPR2M1' target='_blank' rel='noreferrer'>
            <FaWhatsapp size={28} style={{ fill: '#463a3c' }} />
          </a>
          <a href='https://www.instagram.com/luce.amore.nsk?igsh=MXVwZ3hlbjBqYzVhYw==' target='_blank' rel='noreferrer'>
            <FaInstagram size={28} style={{ fill: '#463a3c' }} />
          </a>
          <a href='https://t.me/+DIY2wZXa-SczNDky' target='_blank' rel='noreferrer'>
            <FaTelegram size={28} style={{ fill: '#463a3c' }} />
          </a>
          <a href='https://www.tiktok.com/@luce_e_amore?_t=8kVoUoBHV0a&_r=1' target='_blank' rel='noreferrer'>
            <FaTiktok size={28} style={{ fill: '#463a3c' }} />
          </a>
          <a
            href='https://www.facebook.com/profile.php?id=61555924042921&mibextid=rS40aB7S9Ucbxw6v'
            target='_blank'
            rel='noreferrer'
          >
            <FaFacebook size={28} style={{ fill: '#463a3c' }} />
          </a>
        </div>
      </div>
    </header>
  );
}
