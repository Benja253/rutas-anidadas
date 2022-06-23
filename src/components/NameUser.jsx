import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const NameUser = () => {

  const [countries, setCountry] = useState()

  const {name} = useParams()
  
  useEffect(() => {
    const URL = `https://restcountries.com/v3.1/name/${name}`
    axios.get(URL)
      .then(res => setCountry(res.data))
      .catch(err => console.log(err))
  }, [name])


  return (
    <article>
      {
        countries?.map(country => (
          <div key={country.name.official}>
            <img src={country.flags.svg} alt="" />
            <h2>{country.name.common}</h2>
          </div>
        ))
      }
    </article>
  )
}

export default NameUser