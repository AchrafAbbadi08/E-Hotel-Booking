import React from 'react'
import { assets } from '../../assets/assets'
import { NavLink } from 'react-router-dom'

const Sidebar = () => {
  const sidebarLinks = [
    { name: "Dashboard", path: "/owner", icon: assets.dashboardIcon, end: true },
    { name: "Add Room", path: "/owner/add-room", icon: assets.addIcon, end: false },
    { name: "List Room", path: "/owner/list-room", icon: assets.listIcon, end: false },
  ]

  return (
    <div className='md:w-64 w-16 border-r h-full text-base border-gray-300 pt-4 flex flex-col transition-all duration-300 bg-white'>
      {sidebarLinks.map((item, index) => (
        <NavLink 
          to={item.path} 
          key={index} 
          end={item.end} 
          className={({ isActive }) => 
            `flex items-center py-3.5 px-4 md:px-6 gap-3 transition-colors ${
              isActive 
                ? "border-r-4 md:border-r-[6px] bg-blue-600/10 border-blue-600 text-blue-600 font-medium" 
                : "hover:bg-gray-100 border-r-4 border-transparent text-gray-700"
            }`
          }
        >
          <img src={item.icon} alt={item.name} className='w-6 h-6 object-contain' />
          <p className='md:block hidden text-left font-medium'>{item.name}</p>
        </NavLink>
      ))}
    </div>
  )
}

export default Sidebar