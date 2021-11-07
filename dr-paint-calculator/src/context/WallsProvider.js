import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import WallsContext from './WallsContext';

const WallsProvider = ({ children }) => {

  const[walls, setWalls] = useState({});
  const[totalArea, setTotalArea] = useState(0);
  const[totalPaint, setTotalPaint] = useState(0);

  const calculateArea = () => {
    const fourWalls = Object.values(walls);

    const adjustedArea = fourWalls.reduce((acc, curr) => {
      const { width, height, doors, windows } = curr;
      const wallArea = width * height;
      const noWallArea = doors * 1.52 + windows * 2.4;
      return acc + wallArea - noWallArea
    }, 0);
    
    setTotalArea(adjustedArea.toFixed(2));
    calculatePaint(adjustedArea);
  };

  const calculatePaint = (area) => {

    const paintSizes = ['large (18L)', 'medium (3,6L)', 'small (2,5L)', 'mini (0,5L)'];
    const paintAreas = [90, 18, 10, 2.5];

    let paintList = {};
    let totalPaint;
    let remainingArea = Math.ceil(area);

    for (let i = 0; i < paintAreas.length; i += 1) {
      totalPaint = Math.floor(remainingArea / paintAreas[i]);

      if (totalPaint > 0) {
        paintList[paintSizes[i]] = totalPaint;
        remainingArea = remainingArea % paintAreas[i];
      }
    }
    setTotalPaint(paintList);
  }

  const context = {
    walls,
    totalArea,
    totalPaint,
    setWalls,
    setTotalArea,
    setTotalPaint,
    calculateArea,
  };
  
  return(
    <WallsContext.Provider value={ context }>
      { children }
    </WallsContext.Provider>
  )
}

WallsProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default WallsProvider;
