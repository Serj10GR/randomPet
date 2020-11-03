import React from 'react'

const Pet = ({img, isCat, getCat, getDog}) => {
  console.log(img)
  return (
    <article className='pet'>
        <img src={img} alt={isCat ? 'cat' : 'dog'}/>
      {
        isCat
        ? <button className='btn' onClick={getCat}>Get Random Cat </button>
        : <button className='btn' onClick={getDog}>Get Random Dog </button>
      }      
    </article>
  )
}

export default Pet
