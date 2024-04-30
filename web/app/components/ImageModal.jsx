'use-client';

import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';

export default function ImageModal({ url, onClose }) {
  const modalRef = useRef(null);

  useEffect(() => {
    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

  const handleClickOutside = (event) => {
    if (modalRef.current && !modalRef.current.contains(event.target)) {
      onClose();
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [onClose]);

  return (
    <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center z-50 bg-black bg-opacity-50">
      <div ref={modalRef} className="bg-primary p-6 rounded-xl">
        <img
          src={url}
          alt="Изборажение"
          className='w-[450px] h-[700px] object-cover rounded-xl'
        />
      </div>
    </div>
  );
}

ImageModal.propTypes = {
  url: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired,
};