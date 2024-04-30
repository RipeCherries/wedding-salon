'use client';

import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';

export default function VideoModal({ url, onClose }) {
  const modalRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        onClose();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [onClose]);

  useEffect(() => {
    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

  return (
    <div className='fixed top-0 left-0 w-full h-full flex justify-center items-center z-50 bg-black bg-opacity-50'>
      <div ref={modalRef} className='bg-primary p-6 rounded-xl'>
        <div className='aspect-w-16 aspect-h-9'>
          <iframe
            className='w-full h-full rounded-xl'
            style={{ width: '800px', height: '450px' }}
            src={url}
            title='YouTube video player'
            allowFullScreen
          />
        </div>
      </div>
    </div>
  );
}

VideoModal.propTypes = {
  url: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired,
};
