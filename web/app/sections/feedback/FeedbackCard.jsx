import React from 'react';
import PropTypes from 'prop-types';
import { FaStar, FaRegStar } from 'react-icons/fa';

export default function FeedbackCard({ feedback }) {
  const renderStars = () => {
    const filledStars = feedback.stars;
    const emptyStars = 5 - filledStars;

    const stars = [];

    for (let i = 0; i < filledStars; ++i) {
      stars.push(<FaStar key={i} size={20} style={{ fill: '#463a3c' }} />);
    }

    for (let i = 0; i < emptyStars; ++i) {
      stars.push(<FaRegStar key={filledStars + i} size={20} style={{ fill: '#463a3c' }} />);
    }

    return stars;
  };

  return (
    <div className='w-96 max-w-96 bg-secondary p-6 rounded-2xl flex flex-col'>
      <div className='flex mb-4 items-center justify-between'>
        <p className='text-primary font-bold text-xl '>{feedback.clientName}</p>
        <div className='flex'>{renderStars()}</div>
      </div>
      <p className='text-primary text-justify'>{feedback.text}</p>
      <p className='text-primary text-right mt-auto'>{feedback.date}</p>
    </div>
  );
}

FeedbackCard.propTypes = {
  feedback: PropTypes.shape({
    clientName: PropTypes.string.isRequired,
    stars: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
  }).isRequired,
};