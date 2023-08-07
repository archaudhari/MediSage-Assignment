// src/components/SeatMap.js

import React, { useState } from 'react';
import Seat from './Seat';

const SeatMap = () => {
  // Replace this data with your actual seat data (e.g., from an API or backend)
  const initialSeatData = [
    { id: 1, status: 'available' },
    { id: 2, status: 'available' },
    // Add more seats here
  ];

  const [seatData, setSeatData] = useState(initialSeatData);

  const handleSeatClick = (id) => {
    // You can handle seat selection here by updating the seat status
    // For example, you can toggle between 'available' and 'booked' status
    const updatedSeatData = seatData.map((seat) =>
      seat.id === id ? { ...seat, status: seat.status === 'available' ? 'booked' : 'available' } : seat
    );
    setSeatData(updatedSeatData);
  };

  return (
    <div className="seat-map">
      {seatData.map((seat) => (
        <Seat key={seat.id} status={seat.status} onClick={() => handleSeatClick(seat.id)} />
      ))}
    </div>
  );
};

export default SeatMap;
