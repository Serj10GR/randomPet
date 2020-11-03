import React, {Fragment, useState, useEffect} from 'react'

import Pet from './Pet'

const App = () => {
  const [dog, setDog] = useState()
  const [cat, setCat] = useState()
  const [isLoadingDog, setIsLoadingDog] = useState(true)
  const [isLoafingCat, setIsLoadingCat] = useState(true)

  const getDog = async () => {
    try{
      const answer = await fetch('https://dog.ceo/api/breeds/image/random')
      const dog = await answer.json()
      setIsLoadingDog(false)
      setDog(dog.message)

    }catch(error) {
      console.log(error)
    }
  }

  const getCat= async () => {
    try{
      const answer = await fetch('https://aws.random.cat/meow')
      const cat = await answer.json()
      setIsLoadingCat(false)
      setCat(cat.file)

    }catch(error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getDog()
    getCat()
  }, [])

  return (
    <Fragment>
      <div className="title">
        <h1>Get Random Pets Images</h1>
      </div>
      <section className='pets-section'>   
        <Pet img={dog} getDog={getDog} isLoading={isLoadingDog} />
        <Pet img={cat} isCat getCat={getCat} isLoading={isLoafingCat} />  
    </section>
    </Fragment>
  )
}

export default App

