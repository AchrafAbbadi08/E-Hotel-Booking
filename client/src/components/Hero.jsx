<<<<<<< HEAD
import React from 'react'
import { assets, cities } from '../assets/assets'

const Hero = () => {
  return (
    <div className='relative flex flex-col items-start justify-center px-6 md:px-16 lg:px-24 xl:px-32 text-white bg-[url("/src/assets/hero.jpg")] bg-no-repeat bg-cover bg-center min-h-screen py-20'>
      
      {/* Background Overlay for better text readability */}
      <div className="absolute inset-0 bg-black/30 -z-0"></div>

      <div className="relative z-10 w-full max-w-7xl">
        {/* Badge */}
        <span className='inline-block bg-[#49B9FF]/30 backdrop-blur-md border border-[#49B9FF]/40 text-white font-medium text-xs md:text-sm px-4 py-1.5 rounded-full shadow-sm'>
          ✨ The Ultimate Hotel Experience
        </span>

        {/* Heading */}
        <h1 className='font-playfair text-3xl sm:text-5xl lg:text-6xl lg:leading-[1.15] font-bold max-w-2xl mt-5 tracking-tight drop-shadow-md'>
          Découvrez votre destination idéale pour une escapade
        </h1>

        {/* Subtitle */}
        <p className='max-w-xl mt-4 text-sm sm:text-base text-gray-100 font-light leading-relaxed drop-shadow-sm'>
          "Un luxe et un confort inégalés vous attendent dans les hôtels et complexes les plus exclusifs au monde. Commencez votre voyage dès aujourd'hui."
        </p>

        {/* Search Bar Form */}
        <form className='bg-white/95 backdrop-blur-md text-gray-700 rounded-2xl p-4 md:p-5 mt-10 shadow-2xl flex flex-col md:flex-row items-stretch md:items-center gap-4 max-w-5xl border border-white/20'>
          
          {/* Destination Field */}
          <div className='flex-1 flex flex-col justify-center'>
            <div className='flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-gray-500 mb-1'>
              <img src={assets.locationIcon || assets.searchIcon} alt="" className='h-4 w-4 opacity-70'/>
              <label htmlFor="destinationInput">Destination</label>
            </div>
            <input 
              list='destinations' 
              id="destinationInput" 
              type="text" 
              className="w-full rounded-lg border border-gray-200 px-3.5 py-2 text-sm text-gray-800 placeholder-gray-400 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition-all" 
              placeholder="Where are you going?" 
              required 
            />
            <datalist id='destinations'>
              {cities.map((city, index) => (
                <option value={city} key={index} />
              ))}
            </datalist>
          </div>

          {/* Check-In Field */}
          <div className='flex-1 flex flex-col justify-center border-t md:border-t-0 md:border-l border-gray-200 pt-3 md:pt-0 md:pl-4'>
            <div className='flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-gray-500 mb-1'>
              <img src={assets.calenderIcon} alt="" className='h-4 w-4 opacity-70'/>
              <label htmlFor="checkIn">Arrivée</label>
            </div>
            <input 
              id="checkIn" 
              type="date" 
              className="w-full rounded-lg border border-gray-200 px-3.5 py-2 text-sm text-gray-800 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition-all cursor-pointer" 
            />
          </div>

          {/* Check-Out Field */}
          <div className='flex-1 flex flex-col justify-center border-t md:border-t-0 md:border-l border-gray-200 pt-3 md:pt-0 md:pl-4'>
            <div className='flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-gray-500 mb-1'>
              <img src={assets.calenderIcon} alt="" className='h-4 w-4 opacity-70'/>
              <label htmlFor="checkOut">Départ</label>
            </div>
            <input 
              id="checkOut" 
              type="date" 
              className="w-full rounded-lg border border-gray-200 px-3.5 py-2 text-sm text-gray-800 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition-all cursor-pointer" 
            />
          </div>

          {/* Guests Field */}
          <div className='w-full md:w-32 flex flex-col justify-center border-t md:border-t-0 md:border-l border-gray-200 pt-3 md:pt-0 md:pl-4'>
            <div className='flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-gray-500 mb-1'>
              <img src={assets.guestsIcon} alt="" className='h-4 w-4 opacity-70'/>
              <label htmlFor="guests">Invités</label>
            </div>
            <input 
              min={1} 
              max={10} 
              defaultValue={1}
              id="guests" 
              type="number" 
              className="w-full rounded-lg border border-gray-200 px-3 py-2 text-sm text-gray-800 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition-all" 
              placeholder="1" 
            />
          </div>

          {/* Submit Button */}
          <div className='flex items-end pt-2 md:pt-0'>
            <button 
              type='submit'
              className='w-full md:w-auto flex items-center justify-center gap-2 rounded-xl bg-black hover:bg-gray-800 active:scale-95 px-6 py-3 text-white font-medium text-sm transition-all shadow-md cursor-pointer h-[42px]'
            >
              <span>Rechercher</span>
              <img src={assets.searchIcon} alt="" className='h-4 w-4 filter invert'/>
            </button>
          </div>

        </form>
      </div>

    </div>
  )
}

=======
import React from 'react'
import { assets, cities } from '../assets/assets'

const Hero = () => {
  return (
    <div className='flex flex-col items-start justify-center px-6 
    md:px-16 lg:px-24 xl:px-32 text-white bg-[url("/src/assets/heroImage.png")] 
    bg-no-repeat bg-cover bg-center h-screen'>
        <p className='bg-[#49B9FF]/50 px-3.5 py-1 rounded-full mt-20'>The Ultimate Hotel Experence</p>
        <h1 className='font-playfair text-2xl md:text-5xl md:text-[56px] md:leading-[56px] font-bold md:font-extrabold max-w-xl mt-4'>Discover Your Perfect Gateway Destination</h1>
        <p className='max-w-130 mt-2 text-sm md:text-base'>Unparalleled Luxury and comfort await at the world's most exclusive hotels and resorts.
        Start your journey today.</p>
                <form className='bg-white text-gray-500 rounded-lg px-6 py-4 mt-8 flex flex-col md:flex-row max-md:items-start gap-4 max-md:mx-auto'>

            <div>
                <div className='flex items-center gap-2'>
                    <img src={assets.calenderIcon} alt="" className='h-4'/>
                    <label htmlFor="destinationInput">Destination</label>
                </div>
                <input list='destinations' id="destinationInput" type="text" className=" rounded border border-gray-200 px-3 py-1.5 mt-1.5 text-sm outline-none" placeholder="Type here" required />
            <datalist id='destinations'>
                {cities.map((city,index)=>(
                  <option value={city} key={index}/>  
                    ))}
            </datalist>
            </div>

            <div>
                <div className='flex items-center gap-2'>
                    <img src={assets.calenderIcon} alt="" className='h-4'/>
                    <label htmlFor="checkIn">Check in</label>
                </div>
                <input id="checkIn" type="date" className=" rounded border border-gray-200 px-3 py-1.5 mt-1.5 text-sm outline-none" />
            </div>

            <div>
                <div className='flex items-center gap-2'>
                    <img src={assets.calenderIcon} alt="" className='h-4'/>
                    <label htmlFor="checkOut">Check out</label>
                </div>
                <input id="checkOut" type="date" className=" rounded border border-gray-200 px-3 py-1.5 mt-1.5 text-sm outline-none" />
            </div>

            <div className='flex md:flex-col max-md:gap-2 max-md:items-center'>
                <label htmlFor="guests">Guests</label>
                <input min={1} max={4} id="guests" type="number" className=" rounded border border-gray-200 px-3 py-1.5 mt-1.5 text-sm outline-none  max-w-16" placeholder="0" />
            </div>

            <button className='flex items-center justify-center gap-1 rounded-md 
            bg-black py-3 px-4 text-white my-auto cursor-pointer max-md:w-full max-md:py-1' >
                <img src={assets.searchIcon} alt="searchIcon" className='h-7'/>
                <span>Search</span>
            </button>
        </form>

    </div>
  )
}

>>>>>>> c8fa2d354bde8d3ab6d2cfa6bf8b36de0b8fc4f2
export default Hero