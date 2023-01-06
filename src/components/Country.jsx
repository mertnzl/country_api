import React from 'react'
const Country = ({country}) => {
  
  return (
        <div className="grid  grid-cols-5 grid-rows-5 bg-slate-400 h-[4rem] "  >
        <h3 className='mt-5'>{country.name}</h3>
        <h3 className='mt-5'>{country.capital}</h3>
        <h3 className='mt-5'>{country.region}</h3>
        <h3 className='mt-5'>{country.demonym}</h3>
        <img className='w-[80px] mt-1'
        src={country.flag}
        alt={country.name}/>
       </div>
  )
}
export default Country