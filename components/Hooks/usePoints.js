import { useState, useEffect } from 'react';

global.points = 0

const usePoints = () => {
  const [localPoints, setLocalPoints] = useState(global.points);

  const addPoint = () => {
    global.points = global.points + 5;
    setLocalPoints(global.points);
  };

  useEffect(() => {
    setLocalPoints(global.points);
  }, [global.points]);

  return { localPoints, addPoint };
};

export default usePoints;
