import React, { useState, useEffect, useContext } from 'react'
import axios from 'axios'
import { CartContext } from '../Services/CartContext'
import { toast } from 'react-toastify'
import Shawarma from '../assets/menu/chicken shawarma.jpg'
import Vburger from '../assets/menu/veg Burger.jpg'
import Ffrice from '../assets/menu/French fries.jpg'
import panPizza from '../assets/menu/Paneer pizza.jpg'
import chickenBug from '../assets/menu/Chicken burger.jpg'
import marpizza from '../assets/menu/Margherita pizza.jpg'
import grilled from '../assets/menu/Grilled chicken.jpg'
import vegnoode from '../assets/menu/Veg noodles.jpg'
import chickenrice from '../assets/menu/Chicken fried rice.jpg'
 import defaultImg from '../assets/menu/default.jpg'
const MenuPage = () => {
    const [menuItems, setMenuItems] = useState([])
    const [loading, setLoading] = useState(true)
    const { addToCart } = useContext(CartContext)
   const menuImages = {
     "Chicken Shawarma": Shawarma,
    "Veg Burger": Vburger,
    "French Fries": Ffrice,
    "Paneer Pizza": panPizza,
    "Chicken Burger": chickenBug,
    "Margherita Pizza": marpizza,
    "Grilled Chicken": grilled,
    "Veg Noodles": vegnoode,
    "Chicken Fried Rice": chickenrice
}

    useEffect(() => {
        const fetchMenu = async () => {
 try {
   const res = await axios.get('http://localhost:7000/api/menu')
  //  const res = await axios.get(`${import.meta.env.VITE_API_URL}/api/menu`)
    setMenuItems(res.data)
      } catch (error) {
       console.error("Error fetching menu:", error)
        toast.error("Failed to load menu items. Please ensure backend is running.")
     } finally {
      setLoading(false)
      }
     }
     fetchMenu()
    }, [])

    const handleAddToCart = (item) => {
        addToCart(item)
        toast.success(`Added ${item.name} to cart!`)
    }

    return (
  <div className="bg-gray-50 min-h-screen py-12">
     <div className="container mx-auto px-4 max-w-7xl">
     <div className="text-center mb-16">
  <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight mb-4">Our Delicious Menu</h1>
      <p className="text-lg text-gray-500 max-w-2xl mx-auto">Explore our wide selection of mouth-watering dishes crafted with passion by our top chefs.</p>
     </div>

         {loading ? (
             <div className="flex justify-center items-center h-64">
      <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-emerald-500"></div>
             </div>
      ) : menuItems.length === 0 ? (
     <div className="text-center text-gray-500 py-12">
        <p className="text-xl">No menu items found.</p>
         <p className="text-sm mt-2">Make sure you have added items to the database.</p>
      </div>
      ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
         {menuItems.map(item => (
     <div key={item._id} className="bg-white rounded-2xl shadow-sm hover:shadow-xl transition-shadow duration-300 overflow-hidden flex flex-col group border border-gray-100">

<div className="h-48 overflow-hidden relative">

  <img
    src={menuImages[item.name]|| defaultImg}
    alt={item.name}
    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
  />

  <div className="absolute top-4 right-4 bg-white text-emerald-700 font-bold px-3 py-1 rounded-full text-sm shadow-md">
    ${parseFloat(item.price).toFixed(2)}
  </div>
</div>
                     
   <div className="p-6 flex-grow flex flex-col">
          <h3 className="text-xl font-bold text-gray-900 mb-2 truncate">{item.name}</h3>
          <p className="text-gray-600 text-sm mb-6 flex-grow line-clamp-2">{item.description}</p>
                                    
         <button  onClick={() => handleAddToCart(item)}
             className="w-full bg-gray-900 hover:bg-emerald-600 text-white font-semibold py-3 px-4 rounded-xl transition-colors duration-200 flex justify-center items-center gap-2"  >
                
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
                 </svg>
                   Add to Cart 
                </button>
              </div>
             </div>    ))}
            </div>  )}
          </div>
         </div>
    )
}

export default MenuPage
