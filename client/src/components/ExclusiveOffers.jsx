import React from 'react'
import { assets, exclusiveOffers } from '../assets/assets'
import Title from './Title'

const ExclusiveOffers = () => {
  return (
    <div className='flex flex-col items-center px-6 md:px-16 lg:px-24 xl:px-32 pt-20 pb-30'>
      <div className='flex flex-col md:flex-row items-center justify-between w-full'>
        <Title
          align='left'
<<<<<<< HEAD
          title='Offres Exclusives'
          subtitle='Profitez de nos offres à durée limitée et de nos forfaits spéciaux pour agrémenter votre séjour et créer des souvenirs inoubliables.'/>
=======
          title='Exclusive Offers'
          subtitle='Take advantage of our limited-time offers and special packages to enhance your stay and create unforgettable memories.'/>
>>>>>>> c8fa2d354bde8d3ab6d2cfa6bf8b36de0b8fc4f2
        <button className='group flex items-center gap-2 font-medium cursor-pointer max-md:mt-12'>
          Voir Toutes Les Offres
          <img
            src={assets.arrowIcon}
            alt="arrow-icon"
            className='group-hover:translate-x-1 transition-all'
          />
        </button>
      </div>
      <div className='flex flex-wrap items-center gap-6 mt-8 w-full'>
        {exclusiveOffers.map((item)=>(
            <div key={item._id} className='
            group relative flex flex-col items-start
            justify-between gap-1 pt-12 md:pt-18 px-4 rounded-xl text-white bg-no-repeat bg-cover
            bg-center w-full sm:w-80 h-64
            ' style={{backgroundImage: `url(${item.image})`}}>
                <p className='px-3 py-1 absolute top-4 left-4 text-xs bg-white 
                text-gray-800 font-medium rounded-full'>{item.priceOff}% OFF</p>
                <div>
                    <p className='text-2xl font-medium font-playfair'>{item.title}</p>
                    <p>{item.description}</p>
                    <p className='text-xs text-white/70 mt-3'>Expires {item.expiryDate}</p>
                </div>
                <button className='flex items-center gap-2 font-medium
                cursor-pointer mt-4 mb-5
                '>
<<<<<<< HEAD
                  VOIR OFFER
=======
                  View Offers
>>>>>>> c8fa2d354bde8d3ab6d2cfa6bf8b36de0b8fc4f2
                  <img className='invert group-hover:translate-x-1
                  transition-all
                  ' src={assets.arrowIcon} alt="arrow-icon"></img>
                </button>
            </div>
        ))}
      </div>
    </div>
  )
}

export default ExclusiveOffers