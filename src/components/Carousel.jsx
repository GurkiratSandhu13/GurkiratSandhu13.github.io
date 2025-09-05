import React, { useRef } from 'react';

const Carousel = ({ items, renderItem, ariaLabel }) => {
  const trackRef = useRef(null);

  const scrollBy = (dir) => {
    const node = trackRef.current;
    if (!node) return;
    const delta = dir * (node.clientWidth * 0.9);
    node.scrollBy({ left: delta, behavior: 'smooth' });
  };

  return (
    <div className="carousel" aria-label={ariaLabel}>
      <div className="carousel-track" ref={trackRef}>
        {items.map((item, idx) => (
          <div key={idx} className="carousel-item">
            {renderItem(item)}
          </div>
        ))}
      </div>
      <div className="carousel-controls">
        <button className="btn" onClick={() => scrollBy(-1)} aria-label="Previous">Prev</button>
        <button className="btn" onClick={() => scrollBy(1)} aria-label="Next">Next</button>
      </div>
    </div>
  );
};

export default Carousel;


