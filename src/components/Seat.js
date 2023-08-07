// src/components/Seat.js
import React from 'react';

const Seat = ({ status, onClick }) => {
  return (
    <div
      className={`seat ${status === 'available' ? 'available' : 'booked'}`}
      onClick={onClick}
    >
      {status === 'available' ? 'A' : 'B'}
    </div>
  );
};

export default Seat;
