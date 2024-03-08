import React from 'react';
import Link from 'next/link';
import { GiAmpleDress } from 'react-icons/gi';
import { FaWhatsapp, FaInstagram, FaTelegram, FaTiktok, FaFacebook } from 'react-icons/fa';

export default function Header() {
  return (
    <header className='bg-primary py-5'>
      <div className='max-w-6xl mx-auto flex justify-between'>
        <div>
          <Link href='/' className='flex items-center'>
            <GiAmpleDress size={32} style={{ fill: '#463a3c' }} />
            <span className='ml-2 text-l font-bold text-primary'>Свадебный салон «Luce e Amore»</span>
          </Link>
        </div>
        <div className='flex gap-2 items-center'>
          <Link href='/'>
            <FaWhatsapp size={28} style={{ fill: '#463a3c' }} />
          </Link>
          <Link href='/'>
            <FaInstagram size={28} style={{ fill: '#463a3c' }} />
          </Link>
          <Link href='/'>
            <FaTelegram size={28} style={{ fill: '#463a3c' }} />
          </Link>
          <Link href='/'>
            <FaTiktok size={28} style={{ fill: '#463a3c' }} />
          </Link>
          <Link href='/'>
            <FaFacebook size={28} style={{ fill: '#463a3c' }} />
          </Link>
        </div>
      </div>
    </header>
  );
}
