import React from 'react'
<<<<<<< HEAD
import { roomsDummyData } from '../assets/assets'
=======
import {roomsDummyData } from '../assets/assets'
>>>>>>> c8fa2d354bde8d3ab6d2cfa6bf8b36de0b8fc4f2
import HotelCard from './HotelCard'
import Title from './Title'
import { useNavigate } from 'react-router-dom'

const FeatureDestination = () => {
<<<<<<< HEAD
  const navigate = useNavigate();

  return (
    <div className='flex flex-col items-center px-6 md:px-16 lg:px-24 bg-slate-50 py-20'>
      <Title 
        title='Destinations à la une' 
        subtitle="Découvrez notre sélection exclusive de propriétés d'exception à travers le Maroc offrant un luxe inégalé et des expériences inoubliables."
      />

      <div className='flex flex-wrap items-center justify-center gap-6 mt-20'>
        {roomsDummyData.slice(0, 4).map((room, index) => (
          <HotelCard key={room._id || index} room={room} index={index} />
        ))}
      </div>

      <button 
        onClick={() => {
          navigate('/rooms');
          window.scrollTo(0, 0);
        }}  
        className='my-16 px-4 py-2 text-sm font-medium border border-gray-300 rounded bg-white hover:bg-gray-50 transition-all cursor-pointer'
      >
        Voir Toutes Les Destinations
      </button>
=======
    const navigate = useNavigate();
  return (
    <div className='flex flex-col items-center px-6 md:px-16
    lg;px-24 bg-slate-50 py-20'>


        <Title title='Feature Destination' subtitle='Discover our handpicked selection of exceptional
        properties around Morocco, offering unparalled luxury and unforgettable experiences.'/>
      <div className='flex flex-wrap items-center justify-center gap-6 mt-20'>
        {roomsDummyData.slice(0,4).map((room,index)=>(
            <HotelCard key={room._id} room={room} index={index} />
        ))}
      </div>
        <button onClick={()=>{navigate('/rooms'); }}  
        className='my-16 px-4 py-2 text-sm font-medium border border-gray-300 rounded bg-white hover:bg-gray-50 transition-all cursor-pointer'>
         Voir Toutes Les Destinations
       </button>
>>>>>>> c8fa2d354bde8d3ab6d2cfa6bf8b36de0b8fc4f2
    </div>
  )
}

<<<<<<< HEAD
export default FeatureDestination
=======
export default FeatureDestination
>>>>>>> c8fa2d354bde8d3ab6d2cfa6bf8b36de0b8fc4f2
