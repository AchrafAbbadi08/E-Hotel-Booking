import React, { useState } from 'react'
import Title from '../../components/Title'
import { assets } from '../../assets/assets'

const AddRoom = () => {
  const [images, setImages] = useState({
    1: null,
    2: null,
    3: null,
    4: null
  });

  const [inputs, setInputs] = useState({
    roomType: '',
    pricePerNight: 0,
    amenities: {
      'Free WiFi': false,
      'Free Breakfast': false,
      'Room Service': false,
      'Mountain View': false,
      'Pool Access': false,
    }
  });

  const handleAmenityChange = (key) => {
    setInputs((prev) => ({
      ...prev,
      amenities: {
        ...prev.amenities,
        [key]: !prev.amenities[key]
      }
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Prepare form payload for API submit
    console.log({ images, ...inputs });
  };

  return (
    <form onSubmit={handleSubmit} className='pb-10'>
      <Title 
        align='left' 
        font='outfit' 
        title='Add Room' 
        subtitle='Fill in the details carefully and provide accurate room details, pricing, and amenities to enhance the user booking experience.'
      />

      {/* Upload Area For images */}
      <p className='text-gray-800 font-medium mt-10'>Upload Images</p>
      <div className='grid grid-cols-2 sm:flex gap-4 my-2 flex-wrap'>
        {Object.keys(images).map((key) => (
          <label htmlFor={`roomImage${key}`} key={key}>
            <img 
              className='w-24 h-20 object-cover rounded border border-dashed border-gray-300 cursor-pointer opacity-80 hover:opacity-100 transition-opacity'
              src={images[key] ? URL.createObjectURL(images[key]) : assets.uploadArea} 
              alt={`Room Slot ${key}`} 
            />
            <input 
              type='file' 
              accept='image/*' 
              id={`roomImage${key}`}
              hidden
              onChange={(e) => setImages({ ...images, [key]: e.target.files[0] })}
            />
          </label>
        ))}
      </div>

      {/* Room Type & Price */}
      <div className='w-full flex max-sm:flex-col sm:gap-4 mt-4'>
        <div className='flex-1 max-w-48'>
          <p className='text-gray-800 font-medium mt-4'>Room Type</p>
          <select 
            value={inputs.roomType}
            onChange={(e) => setInputs({ ...inputs, roomType: e.target.value })}
            className='border opacity-80 border-gray-300 mt-1 rounded p-2 w-full text-gray-700 outline-indigo-500'
            required
          >
            <option value="">Select Room Type</option>
            <option value="Single Bed">Single Bed</option>
            <option value="Double Bed">Double Bed</option>
            <option value="Luxury Room">Luxury Room</option>
            <option value="Family Suite">Family Suite</option>
          </select>
        </div>

        <div>
          <p className='mt-4 text-gray-800 font-medium'>Price <span className='text-xs text-gray-500'>/night</span></p>
          <input 
            type="number" 
            placeholder='0'
            min='0'
            className='border border-gray-300 mt-1 rounded p-2 w-28 outline-indigo-500'
            value={inputs.pricePerNight}
            onChange={(e) => setInputs({ ...inputs, pricePerNight: e.target.value })}
            required
          />
        </div>
      </div>

      {/* Amenities Checkboxes */}
      <div className='mt-6'>
        <p className='text-gray-800 font-medium mb-2'>Amenities</p>
        <div className='flex flex-wrap gap-4'>
          {Object.keys(inputs.amenities).map((amenity) => (
            <label key={amenity} className='flex items-center gap-2 cursor-pointer text-gray-600 text-sm'>
              <input 
                type="checkbox" 
                checked={inputs.amenities[amenity]}
                onChange={() => handleAmenityChange(amenity)}
                className='w-4 h-4 accent-indigo-500 cursor-pointer'
              />
              {amenity}
            </label>
          ))}
        </div>
      </div>

      <button 
        type='submit' 
        className='mt-8 bg-indigo-600 hover:bg-indigo-700 transition-colors text-white px-8 py-2.5 rounded font-medium cursor-pointer'
      >
        Add Room
      </button>
    </form>
  )
}

export default AddRoom