<<<<<<< HEAD
import React, { useEffect, useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { assets } from "../assets/assets";
import { useClerk, useUser, UserButton } from "@clerk/react";

const BookIcon = () => (
  <svg
    className="w-4 h-4 text-gray-700"
    aria-hidden="true"
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    fill="none"
    viewBox="0 0 24 24"
  >
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M5 19V4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v13H7a2 2 0 0 0-2 2Zm0 0a2 2 0 0 0 2 2h12M9 3v14m7 0v4"
    />
  </svg>
);

const hotelsMenu = [
  { name: "Marrakech Hotels", path: "/rooms?city=marrakech" },
  { name: "Casablanca Hotels", path: "/rooms?city=casablanca" },
  { name: "Rabat Hotels", path: "/rooms?city=rabat" },
  { name: "Tangier Hotels", path: "/rooms?city=tangier" },
  { name: "Fes Hotels", path: "/rooms?city=fes" },
  { name: "Agadir Hotels", path: "/rooms?city=agadir" },
];

const Navbar = () => {
  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Hotels", path: "/hotels" },
    { name: "Experience", path: "/experience" },
    { name: "Réservations", path: "/reservations" },
    { name: "About", path: "/about" },
  ];

  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isHotelsOpen, setIsHotelsOpen] = useState(false); 

  const { openSignIn } = useClerk();
  const { user } = useUser();
  const isAdmin = user?.publicMetadata?.role === 'admin';
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (location.pathname !== "/") {
      setIsScrolled(true);
      return;
    }
    setIsScrolled(window.scrollY > 10);
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [location.pathname]);

  return (
    <nav
      className={`fixed top-0 left-0 w-full flex items-center justify-between px-4 md:px-16 lg:px-24 xl:px-32 transition-all duration-500 z-50 ${
        isScrolled
          ? "bg-white/80 shadow-md text-gray-700 backdrop-blur-lg py-3 md:py-4"
          : "py-4 md:py-6"
      }`}
    >
      {/* Logo */}
      <Link to="/">
        <img
          src={assets.logo}
          alt="logo"
          className={`h-9 ${isScrolled && "invert opacity-80"}`}
        />
      </Link>

      {/* Desktop Nav */}
      <div className="hidden md:flex items-center gap-4 lg:gap-8">
        {navLinks.map((link, i) => (
          <div key={i} className="relative group">
            <Link
              to={link.path}
              className={`flex flex-col gap-0.5 ${
                isScrolled ? "text-gray-700" : "text-white"
              }`}
            >
              {link.name}
              <div
                className={`${
                  isScrolled ? "bg-gray-700" : "bg-white"
                } h-0.5 w-0 group-hover:w-full transition-all duration-300`}
              />
            </Link>

            {/* Dropdown only for Hotels */}
            {link.name === "Hotels" && (
              <div className="absolute left-0 top-full pt-3 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                <div className="w-56 bg-white text-gray-700 rounded-lg shadow-lg py-2">
                  {hotelsMenu.map((hotel, j) => (
                    <Link
                      key={j}
                      to={hotel.path}
                      className="block px-4 py-2 text-sm hover:bg-gray-100"
                    >
                      {hotel.name}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
        ))}
        {isAdmin && (
    <button onClick={() => navigate('/owner')} className={`border px-4 py-1 text-sm font-light rounded-full cursor-pointer ${isScrolled ? 'text-black' : 'text-white'} transition-all`}>
        Dashboard
    </button>
)}
      </div>

      {/* Desktop Right */}
      <div className="hidden md:flex items-center gap-4">
        <img
          src={assets.searchIcon}
          alt="search"
          className={`${isScrolled && "invert"} h-7 transition-all duration-500`}
        />
        {user ? (
          <UserButton>
            <UserButton.MenuItems>
              <UserButton.Action
                label="My Booking"
                labelIcon={<BookIcon />}
                onClick={() => navigate("/my-booking")}
              />
            </UserButton.MenuItems>
          </UserButton>
        ) : (
          <button
            onClick={openSignIn}
            className={`px-8 py-2.5 rounded-full ml-4 transition-all duration-500 ${
              isScrolled ? "text-white bg-black" : "bg-white text-black"
            }`}
          >
            Login
          </button>
        )}
      </div>

      {/* Mobile Menu Button */}
      <div className="flex items-center gap-3 md:hidden">
        {user && (
          <UserButton>
            <UserButton.MenuItems>
              <UserButton.Action
                label="My Booking"
                labelIcon={<BookIcon />}
                onClick={() => navigate("/my-booking")}
              />
            </UserButton.MenuItems>
          </UserButton>
        )}
        <img
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          src={assets.menuIcon}
          alt="menu"
          className={`${isScrolled && "invert"} h-4 cursor-pointer`}
        />
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 left-0 w-full h-screen bg-white text-base flex flex-col md:hidden items-center justify-center gap-6 font-medium text-gray-800 transition-all duration-500 ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <button
          className="absolute top-4 right-4"
          onClick={() => setIsMenuOpen(false)}
        >
          <img src={assets.closeIcon} alt="close-menu" className="h-6.5" />
        </button>

        {navLinks.map((link, i) => (
          <div key={i} className="flex flex-col items-center">
            {link.name === "Hotels" ? (
              <>
                <button onClick={() => setIsHotelsOpen(!isHotelsOpen)}>
                  Hotels {isHotelsOpen ? "▲" : "▼"}
                </button>
                {isHotelsOpen && (
                  <div className="flex flex-col items-center gap-3 mt-3 text-sm text-gray-500">
                    {hotelsMenu.map((hotel, j) => (
                      <Link
                        key={j}
                        to={hotel.path}
                        onClick={() => {
                          setIsMenuOpen(false);
                          setIsHotelsOpen(false);
                        }}
                      >
                        {hotel.name}
                      </Link>
                    ))}
                  </div>
                )}
              </>
            ) : (
              <Link to={link.path} onClick={() => setIsMenuOpen(false)}>
                {link.name}
              </Link>
            )}
          </div>
        ))}
{isAdmin && (
  <button
    className="border px-4 py-1 text-sm font-light rounded-full cursor-pointer transition-all"
    onClick={() => {
      setIsMenuOpen(false);
      navigate("/owner");
    }}
  >
    Dashboard
  </button>
)}

{!user && (
  <button
    onClick={() => {
      setIsMenuOpen(false);
      openSignIn();
    }}
    className="bg-black text-white px-8 py-2.5 rounded-full transition-all duration-500"
  >
    Login
  </button>
)}    </div>
    </nav>
  );
};

=======
import React ,{useEffect, useState} from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { assets } from "../assets/assets";
import { useClerk, useUser, UserButton } from '@clerk/react';

const BookIcon = () => (
    <svg className="w-4 h-4 text-gray-700" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
    width="24" height="24" fill="none" viewBox="0 0 24 24">
    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 19V4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v13H7a2 2 0 0 0-2 2Zm0
    0a2 2 0 0 0 2 2h12M9 3v14m7 0v4"/>
    </svg>
)

const Navbar = () => {
    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'Hotels', path: '/rooms' },
        { name: 'Experiance', path: '/' },
        { name: 'About', path: '/' },
    ];
    const [isScrolled, setIsScrolled] =useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const { openSignIn } = useClerk();
    const { user } = useUser();
    const navigate = useNavigate();
    const location = useLocation();

  useEffect(() => {
    if(location.pathname !=='/'){
        setIsScrolled(true);
        return;
    }else{
        setIsScrolled(false);
    }
    setIsScrolled(prev => location.pathname !=='/' ? true : prev);
    const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [location.pathname]);

    return (
        <nav className={`fixed top-0 left-0 w-full flex items-center justify-between px-4 md:px-16 lg:px-24 xl:px-32 transition-all duration-500 z-50 ${isScrolled ? "bg-white/80 shadow-md text-gray-700 backdrop-blur-lg py-3 md:py-4" : "py-4 md:py-6"}`}>

            {/* Logo */}
            <Link to='/'>
                <img src={assets.logo} alt="logo" className={`h-9 ${isScrolled && "invert opacity-80"}`}/>
            </Link>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-4 lg:gap-8">
                {navLinks.map((link, i) => (
                    <a key={i} href={link.path} className={`group flex flex-col gap-0.5 ${isScrolled ? "text-gray-700" : "text-white"}`}>
                        {link.name}
                        <div className={`${isScrolled ? "bg-gray-700" : "bg-white"} h-0.5 w-0 group-hover:w-full transition-all duration-300`} />
                    </a>
                ))}
                <button onClick={()=>navigate('/owner')} className={`border px-4 py-1 text-sm font-light rounded-full cursor-pointer ${isScrolled ? 
                    'text-black' : 'text-white'} transition-all`}>
                    Dashboard
                </button>
            </div>

            {/* Desktop Right */}
            <div className="hidden md:flex items-center gap-4">
                <img src={assets.searchIcon} alt="search" className={`${isScrolled && "invert"} h-7 transition-all duration-500`}/>
                {user ? (
                    <UserButton>
                        <UserButton.MenuItems>
                            <UserButton.Action label="My Booking" labelIcon={<BookIcon/>} onClick={() => navigate('/my-booking')}/>
                        </UserButton.MenuItems>
                    </UserButton>
                ) : (
                    <button onClick={openSignIn} className={`px-8 py-2.5 rounded-full ml-4 transition-all duration-500 ${isScrolled ? "text-white bg-black" : "bg-white text-black"}`}>
                        Login
                    </button>
                )}
            </div>

            {/* Mobile Menu Button */}
            <div className="flex items-center gap-3 md:hidden">
                            {user && <UserButton>
                        <UserButton.MenuItems>
                            <UserButton.Action label="My Booking" labelIcon={<BookIcon/>} 
                            onClick={() => navigate('/my-booking')}/>
                        </UserButton.MenuItems>
                    </UserButton>}
                <img onClick={() => setIsMenuOpen(!isMenuOpen)} src={assets.menuIcon} alt="menu" className={`${isScrolled && "invert"} h-4`}/>
            </div>

            {/* Mobile Menu */}
            <div className={`fixed top-0 left-0 w-full h-screen bg-white text-base flex flex-col md:hidden items-center justify-center gap-6 font-medium text-gray-800 transition-all duration-500 ${isMenuOpen ? "translate-x-0" : "-translate-x-full"}`}>
                <button className="absolute top-4 right-4" onClick={() => setIsMenuOpen(false)}>
                    <img src={assets.closeIcon} alt="close-menu" className="h-6.5"/>
                </button>

                {navLinks.map((link, i) => (
                    <a key={i} href={link.path} onClick={() => setIsMenuOpen(false)}>
                        {link.name}
                    </a>
                ))}

                {user && <button className="border px-4 py-1 text-sm font-light rounded-full 
                cursor-pointer transition-all" onClick={()=>navigate('/owner')}>
                    Dashboard
                </button>}
                {!user &&<button onClick={openSignIn} className="bg-black text-white px-8 py-2.5 rounded-full transition-all duration-500">
                    Login
                </button>}
            </div>
        </nav>
    );
}

>>>>>>> c8fa2d354bde8d3ab6d2cfa6bf8b36de0b8fc4f2
export default Navbar;