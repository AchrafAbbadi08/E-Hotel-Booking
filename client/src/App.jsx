import React from 'react'
import Navbar from './components/Navbar'
import { Routes, Route, useLocation } from 'react-router-dom'
import Home from './pages/Home'
import Footer from './components/Footer'
<<<<<<< HEAD
=======
import AllRooms from './pages/AllRooms'
>>>>>>> c8fa2d354bde8d3ab6d2cfa6bf8b36de0b8fc4f2
import RoomDetails from './pages/RoomDetails'
import MyBooking from './pages/MyBooking'
import HotelReg from './components/HotelReg'
import Layout from './pages/HotelOwner/Layout'
import Dashboard from './pages/HotelOwner/Dashboard'
import AddRoom from './pages/HotelOwner/AddRoom'
import ListRoom from './pages/HotelOwner/ListRoom'
<<<<<<< HEAD
import AllHotels from './pages/AllHotels'

=======
>>>>>>> c8fa2d354bde8d3ab6d2cfa6bf8b36de0b8fc4f2
const App = () => {
  const isOwnerPath = useLocation().pathname.includes("owner");

  return (
    <div>
      {!isOwnerPath && <Navbar />}
      {false && <HotelReg />}
      <div className='min-h-[70vh]'>
        <Routes>
          <Route path='/' element={<Home />} />
<<<<<<< HEAD
          <Route path='/hotels' element={<AllHotels />} />
=======
          <Route path='/rooms' element={<AllRooms />} />
>>>>>>> c8fa2d354bde8d3ab6d2cfa6bf8b36de0b8fc4f2
          <Route path='/rooms/:id' element={<RoomDetails />}/>
          <Route path='/my-booking' element={<MyBooking />}/>
          <Route path='/owner' element={<Layout/>}>
            <Route index element={<Dashboard />} />
            <Route path="add-room" element={<AddRoom />}/>
            <Route path="list-room" element={<ListRoom />}/>
          </Route>
        </Routes>
      </div>
     <Footer />
    </div>
  )
}

<<<<<<< HEAD
export default App
=======
export default App
>>>>>>> c8fa2d354bde8d3ab6d2cfa6bf8b36de0b8fc4f2
