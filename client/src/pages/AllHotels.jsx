import React from 'react'
import { useSearchParams, Link } from 'react-router-dom'
import { assets, exclusiveOffers, cities } from '../assets/assets'
import Title from '../components/Title'

const FALLBACK_IMAGE =
  'https://images.unsplash.com/photo-1560264418-c4445382edbc?q=80&w=400'

const AllHotels = () => {
  const [searchParams] = useSearchParams()
  const selectedCity = searchParams.get('city') // e.g. "rabat" or null

  const allCities = cities || []

  const visibleCities = selectedCity
    ? allCities.filter(
        (c) => c.toLowerCase() === selectedCity.toLowerCase()
      )
    : allCities

  if (selectedCity && visibleCities.length === 0) {
    return (
      <div className='pt-32 pb-20 text-center text-gray-500'>
        Aucune ville trouvée pour "{selectedCity}".
        <Link to='/rooms' className='block mt-4 text-indigo-600 hover:text-indigo-800'>
          Voir tous les hôtels
        </Link>
      </div>
    )
  }

  return (
    <div className='flex flex-col items-center px-6 md:px-16 lg:px-24 xl:px-32 pt-20 pb-30 space-y-20'>
      {visibleCities.map((city) => {
        const cityOffers =
          exclusiveOffers?.filter(
            (offer) => offer.city?.toLowerCase() === city.toLowerCase()
          ) || []

        const limit = selectedCity ? cityOffers.length : 4

        return (
          <section key={city} className='w-full'>
            {/* City header */}
            <div className='flex flex-col md:flex-row items-center justify-between w-full mb-8 border-b border-gray-100 pb-4'>
              <Title align='left' title={city} />

              {/* Hide this link when already on the single-city view */}
              {!selectedCity && (
                <Link
                  to={`/rooms?city=${city.toLowerCase()}`}
                  className='group flex items-center gap-2 font-medium cursor-pointer max-md:mt-4 text-indigo-600 hover:text-indigo-800 transition-colors'
                >
                  Voir Toutes Les Offres à {city}
                  <img
                    src={assets.arrowIcon}
                    alt='arrow-icon'
                    className='group-hover:translate-x-1 transition-transform'
                  />
                </Link>
              )}
            </div>

            {/* Hotel cards grid */}
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 justify-items-center'>
              {cityOffers.length > 0 ? (
                cityOffers.slice(0, limit).map((offer, index) => (
                  <div
                    key={offer._id || index}
                    className='p-4 bg-white border border-gray-200 hover:-translate-y-1 transition duration-300 rounded-lg shadow-sm shadow-black/10 max-w-80 w-full flex flex-col justify-between'
                  >
                    <img
                      className='rounded-md h-40 w-full object-cover'
                      src={offer.image || FALLBACK_IMAGE}
                      alt={offer.title || 'Hôtel'}
                    />

                    <div className='flex flex-col flex-grow'>
                      <p className='text-gray-900 text-xl font-semibold mt-4'>
                        {offer.title || `Séjour à ${city}`}
                      </p>
                      <p className='text-zinc-500 text-sm mt-2 mb-4 line-clamp-2'>
                        {offer.description ||
                          "Profitez d'un confort exceptionnel au cœur de cette destination inoubliable."}
                      </p>
                    </div>

                    {/* Later: point this to a hotel detail page */}
                    <Link
                      to={`/rooms/${offer._id || index}`}
                      className='bg-indigo-600 hover:bg-indigo-700 transition cursor-pointer px-6 py-2 font-medium rounded-md text-white text-sm w-full text-center'
                    >
                      En savoir plus
                    </Link>
                  </div>
                ))
              ) : (
                <p className='text-gray-400 italic col-span-full py-4'>
                  Aucune offre disponible pour {city} actuellement.
                </p>
              )}
            </div>
          </section>
        )
      })}
    </div>
  )
}

export default AllHotels
