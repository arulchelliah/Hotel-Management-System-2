import React from 'react'
import { NavLink } from 'react-router-dom';
import '../styles/nav.css'
import { useAuth } from './Auth';
import hotel from './images/hotel.jpeg'
export const NavBar = () => {
    const context = useAuth()
  return (
    <div className="nav-container" data-aos="fade-down" >              
            <div className ="logo">
               <img className='logoimg' alt="hotel" src ={hotel}/>
                <h2 className = "title">Hotel Management</h2>
            </div>
            <ul className = "navbar">
                <div className = "it">
                    <li className="list item1"><NavLink className="items" to="/">Home</NavLink></li>
                    { context.user=='admin' && 
                    <li className="list item2"><NavLink className="items" to="/admin" >Admin</NavLink></li>}
                    <li className="list item3"><NavLink className="items" to="/user" >User</NavLink></li>
                    <li className="list item4"><NavLink className="items" to="/about" >About</NavLink></li>
                    <li className="list item5"><NavLink className="items" to="/contact" >Contact</NavLink></li>
                    <li className="list item6"><NavLink className="items" to="/service" >Service</NavLink></li>


                </div>
                <li className="list item3"><NavLink className = "items" to="/login" >Login</NavLink></li>               
            </ul>
        </div>
  )
}
