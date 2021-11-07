import React, { useState, useContext } from 'react';
import WallsContext from '../context/WallsContext';
// import bricks from '../public/bricks.png';

const WallInput = ({ wallNum }) => {
  const [width, setWidth] = useState(0)
  const [height, setHeight] = useState(0)
  const [doors, setDoors] = useState(0)
  const [windows, setWindows] = useState(0)

  const { walls, setWalls } = useContext(WallsContext)

  const saveWall = () => {
    const updatedWalls = { ...walls };
    updatedWalls[wallNum] = {
      width,
      height,
      doors,
      windows,
    };
    const wallsAreValid = validateWall();
    if (wallsAreValid) return setWalls(updatedWalls);
  }

  const validateWall = () => {
    const noWallArea = doors * 1.52 + windows * 2.4;
    const wallArea = height * width;

    if (!width || !height) {
      alert('Largura e altura não podem ser vazios!');
      return false;
    }

    if (wallArea / 2 < noWallArea) {
      alert('A área de portas/janelas não pode ser maior que 50% da parede!')
      return false
    }
    return true;
  }

  return(
    <div className='walls-input'>
      <h2>{ `Parede ${wallNum}`}</h2>
      <label htmlFor={`${wallNum}-width-input`}>
        Largura:
        <input
          type='number'
          id={`${wallNum}-input`}
          min='1.5'
          max='15'
          onChange={ (e) => setWidth(parseFloat(e.target.value))}
        />
      </label>
      <label htmlFor={`${wallNum}-height-input`}>
        Altura:
        <input
          type='number'
          id={`${wallNum}-height-input`}
          min={ doors > 0 ? '2.1' : '1.5' }
          max= '15'
          onChange={ (e) => setHeight(parseFloat(e.target.value))}
        />
      </label>
      <label htmlFor={`${wallNum}-doors`}>
        N° de portas:
        <input
          type='number'
          id={ `${wallNum}-doors` }
          min='0'
          max={ (width / 2) - (windows * 2) }
          onChange={ (e) => setDoors(parseFloat(e.target.value)) }
        />
      </label>
      <label htmlFor={`${wallNum}-windows`}>
        N° de janelas:
        <input
          type='number'
          id={ `${wallNum}-windows` }
          min='0'
          max={ (width / 2) - doors }
          onChange={ (e) => setWindows(parseFloat(e.target.value)) }
        />
      </label>
      <button
        type='button'
        onClick={ () => saveWall()}
      >
        Adicionar
      </button>
    </div>
  )
}

export default WallInput;
