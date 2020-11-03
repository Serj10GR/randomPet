import React from 'react'

import gif from './img/loading.gif'

const Pet = ({img, isCat, getCat, getDog, isLoading}) => {
  console.log(img)
  return (
    <article className='pet'>
      {
        isLoading
          ? <img src={gif} alt='loading gif' />
          : <img src={img} alt={isCat ? 'cat' : 'dog'}/>
      }
      {
        isCat
        ? <button className='btn' onClick={getCat}>Get Cat </button>
        : <button className='btn' onClick={getDog}>Get Dog </button>
      }      
    </article>
  )
}

export default Pet
