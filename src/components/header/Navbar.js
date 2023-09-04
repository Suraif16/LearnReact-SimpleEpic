import React from 'react'
import { FaBeer } from 'react-icons/fa';
import { FaSearch } from 'react-icons/fa';
import { FaShoppingCart } from 'react-icons/fa';

// import { useNavigate } from 'react-router-dom';
import { NavLink } from 'react-router-dom';

const NavbarItem = ({path, name}) => {
    return (
        <p className="px-5 cursor-pointer hover:text-gray-500 transition-all border-e-transparent">
            <NavLink to={path}>{name}</NavLink>
        </p>
    )
}

function Navbar() {
  return (
    <div className='text-gray-100 p-3 bg-gray-800 sticky flex flex-row gap-3 justify-between items-center shadow-md'>
        <FaBeer /> 
        <div className='flex flex-row gap-5'>
            <NavbarItem path="/store" name="Store"/>
            <NavbarItem path="/social" name="Social"/>
            <NavbarItem path="/contact" name="Contact"/>
            <NavbarItem path="/help" name="Help"/>
        </div>
        <div className='flex flex-row gap-3'>
            <FaSearch />
            <FaShoppingCart />
        </div>


    </div>
  )
}

export default Navbar
