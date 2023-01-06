import React from 'react'
import { useState,useEffect } from 'react'
import Country from './Country'
const CountryList = () => {
    const [countries,setcountries]=useState([])
     
    useEffect(()=>{
    fetch('https://restcountries.com/v2/all')
    .then(response => response.json())
    .then(response=> setcountries(response));
    },[])
  return (
    <div className="grid gap-4 grid-cols-3 grid-rows-3 mt-4">
        {countries.map(country=>{
        return( 
            <Country country={country} />
        )
        })}
  </div>
  
  )
}
export default CountryList