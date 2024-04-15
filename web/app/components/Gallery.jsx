import React, { useState } from 'react';
import { MdNavigateNext } from 'react-icons/md';
import { FaPlay } from 'react-icons/fa';
import PropTypes from 'prop-types';
import { urlFor } from '../../sanity';
import VideoModal from "./VideoModal";

export default function Gallery({ images, video }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [miniMapIndex, setMiniMapIndex] = useState(0);
  const [videoModalIsOpen, setVideoModalIsOpen] = useState(false);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const nextMiniMap = () => {
    setMiniMapIndex((prevIndex) => {
      if (prevIndex + 3 < images.length) {
        return prevIndex + 1;
      }

      return prevIndex;
    });
  };

  const prevMiniMap = () => {
    setMiniMapIndex((prevIndex) => {
      if (prevIndex === 0) {
        return prevIndex;
      }

      return prevIndex - 1;
    });
  };

  return (
    <div className='flex flex-row gap-4'>
      <div className='max-w-28 max-h-[450px] flex flex-col items-center justify-between'>
        {images.length > 3 && (
          <button
            onClick={() => prevMiniMap()}
            type='button'
            className='transform bg-quaternary p-2 rounded-full -rotate-90'
          >
            <MdNavigateNext size={18} style={{ fill: '#fcf9f4' }} />
          </button>
        )}
        <div className='flex flex-col gap-4 h-[370px] overflow-hidden'>
          {images.slice(miniMapIndex, miniMapIndex + 3).map((image, index) => (
            // eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-noninteractive-element-interactions
            <img
              className={`cursor-pointer w-28 h-28 object-cover ${
                images[miniMapIndex + index] && miniMapIndex + index === currentIndex
                  ? 'border-2 border-primary p-1'
                  : ''
              }`}
              src={urlFor(image).url()}
              alt={image.alt}
              onClick={() => setCurrentIndex(index)}
            />
          ))}
        </div>
        {images.length > 3 && (
          <button
            onClick={() => nextMiniMap()}
            type='button'
            className='transform bg-quaternary p-2 rounded-full rotate-90'
          >
            <MdNavigateNext size={18} style={{ fill: '#fcf9f4' }} />
          </button>
        )}
      </div>
      <div className='relative'>
        <img
          className='w-[400px] h-[450px] object-cover'
          src={urlFor(images[currentIndex]).url()}
          alt={images[currentIndex].alt}
        />
        {images.length > 1 && (
          <button
            onClick={() => prevSlide()}
            type='button'
            className='absolute top-1/2 left-2 transform -translate-y-1/2 bg-quaternary p-2 rounded-full'
          >
            <MdNavigateNext className='rotate-180' size={18} style={{ fill: '#fcf9f4' }} />
          </button>
        )}
        {images.length > 1 && (
          <button
            onClick={() => nextSlide()}
            type='button'
            className='absolute top-1/2 right-2 transform -translate-y-1/2 bg-quaternary p-2 rounded-full'
          >
            <MdNavigateNext size={18} style={{ fill: '#fcf9f4' }} />
          </button>
        )}
        {video && (
          <button
            onClick={() => setVideoModalIsOpen((prevState) => !prevState)}
            type='button'
            className='absolute top-6 left-6 px-4 py-2 bg-main rounded-lg'
          >
            <FaPlay size={20} style={{ fill: '#463a3c' }} />
          </button>
        )}
      </div>
      {videoModalIsOpen && (
        <VideoModal url={video} onClose={() => setVideoModalIsOpen((prevState) => !prevState)} />
      )}
    </div>
  );
};

Gallery.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      alt: PropTypes.string.isRequired,
      _key: PropTypes.string.isRequired,
      _type: PropTypes.string.isRequired,
    }),
  ).isRequired,
  video: PropTypes.string.isRequired,
}