import React from 'react'

const Pet = ({img, isCat, getCat, getDog, isLoading}) => {
  console.log(img)
  return (
    <article className='pet'>
      {
        isLoading
          ? <h4>...Loading</h4>
          : <img src={img} alt={isCat ? 'cat' : 'dog'}/>
      }
      {
        isCat
        ? <button className='btn' onClick={getCat}>Get Random Cat </button>
        : <button className='btn' onClick={getDog}>Get Random Dog </button>
      }      
    </article>
  )
}

export default Pet
