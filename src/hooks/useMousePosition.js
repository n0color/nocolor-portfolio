import { useState, useRef } from 'react';

export const useMousePosition = () => {
  const containerRef = useRef(null);
  const [positions, setPositions] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const rect = containerRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 2;
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * 2;
    setPositions({ x, y });
  };

  const handleMouseLeave = () => setPositions({ x: 0, y: 0 });

  return {
    containerRef,
    positions,
    handleMouseMove,
    handleMouseLeave
  };
}; 