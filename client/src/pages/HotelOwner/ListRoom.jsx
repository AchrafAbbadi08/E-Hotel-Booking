import React, { useState } from 'react'
import { roomsDummyData } from '../../assets/assets'
import Title from '../../components/Title'

const ListRoom = () => {
  const [rooms, setRooms] = useState(roomsDummyData)

  // Toggle availability state for a specific room
  const toggleAvailability = (index) => {
    const updatedRooms = [...rooms]
    updatedRooms[index].isAvailable = !updatedRooms[index].isAvailable
    setRooms(updatedRooms)
  }

  return (
    <div className='pb-10'>
      <Title 
        align='left' 
        font='outfit' 
        title='Room Listings' 
        subtitle='View, edit, or manage all listed rooms. Keep the information up-to-date to provide the best experience for users.'
      />

      <p className='text-gray-500 font-medium mt-8'>All Rooms ({rooms.length})</p>

      {/* Table Container with Scroll */}
      <div className='w-full max-w-4xl text-left border border-gray-300 rounded-lg max-h-[500px] overflow-y-auto mt-3 shadow-sm'>
        <table className='w-full border-collapse'>
          <thead className='bg-gray-100 sticky top-0 z-10 border-b border-gray-300'>
            <tr>
              <th className='py-3.5 px-4 text-gray-800 font-semibold text-sm'>Room Type</th>
              <th className='py-3.5 px-4 text-gray-800 font-semibold text-sm max-sm:hidden'>Amenities</th>
              <th className='py-3.5 px-4 text-gray-800 font-semibold text-sm'>Price /night</th>
              <th className='py-3.5 px-4 text-gray-800 font-semibold text-sm text-center'>Availability</th>
            </tr>
          </thead>

          <tbody className='text-sm divide-y divide-gray-200 bg-white'>
            {rooms.map((item, index) => (
              <tr key={item._id || index} className='hover:bg-gray-50/50 transition-colors'>
                {/* Room Type */}
                <td className='py-3.5 px-4 text-gray-800 font-medium'>
                  {item.roomType}
                </td>

                {/* Amenities */}
                <td className='py-3.5 px-4 text-gray-600 max-sm:hidden'>
                  {Array.isArray(item.amenities) ? item.amenities.join(', ') : item.amenities}
                </td>

                {/* Price */}
                <td className='py-3.5 px-4 text-gray-800 font-medium'>
                  ${item.pricePerNight}
                </td>

                {/* Availability Toggle */}
                <td className='py-3.5 px-4 text-center'>
                  <label className='relative inline-flex items-center cursor-pointer'>
                    <input 
                      type="checkbox" 
                      className='sr-only peer' 
                      checked={item.isAvailable}
                      onChange={() => toggleAvailability(index)}
                    />
                    {/* Switch Track */}
                    <div className='w-11 h-6 bg-gray-300 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[""] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600'></div>
                  </label>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default ListRoom