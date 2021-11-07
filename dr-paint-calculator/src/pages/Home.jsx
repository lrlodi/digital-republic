import React, { useState, useContext, useEffect } from 'react';
import WallInput from '../components/WallsInput';
import WallsContext from '../context/WallsContext';

const Home = () => {
  const [wallsAdded, setWallsAdded] = useState(false)

  const { calculateArea, totalPaint, totalArea, walls } = useContext(WallsContext);
  const paintCans = Object.entries(totalPaint);


  useEffect(() => {
    console.log()
    Object.keys(walls).length >= 4 ? setWallsAdded(true) : setWallsAdded(false)
  }, [walls])

  return(
    <div>
      <h1>Digital Republic Paint Calculator</h1>
      <WallInput wallNum='1' />
      <WallInput wallNum='2' />
      <WallInput wallNum='3' />
      <WallInput wallNum='4' />
      <div className='result-div'>
        <h2 className='result-total-paint'>
          Tinta necessária:
          <ol>
            { paintCans.map(item => <li key={item[0]}>{ `tamanho: ${item[0]} : ${item[1]} un.` }</li>)}
          </ol>
        </h2>
        <span className='total-paint'></span>
        <h2 className='result-total-area'>{`Área total: ${ totalArea } m²`}</h2>
        <span className='total-area'></span>
        <button
          type='button'
          onClick = { calculateArea }
          disabled={ wallsAdded ? false : true }
        >
          Calcular
        </button>
      </div>
    </div>
  )
}

export default Home;
