import {Menu, X} from "lucide-react";
import {BrowserRouter as Router, Route, Routes, Link} from 'react-router-dom';
import { useState } from "react";
import Login from "./Login"
import logo from '../assets/logo.png';
import { navItems } from '../constants';
export default function NavBar(){
    const [mobileDrawerOpen,setMobileDrawerOpen] = useState(false);

    const toggleNavbar = () =>{
        setMobileDrawerOpen(!mobileDrawerOpen);
    }
    return (
        <div>
            <nav className="sticky top-0 py-3 z-50 backdrop-blur-lg border-b border-neutral-700/80">
            <div className="container px-4 mx-auto relative text-sm">
                <div className="flex justify-between items-center">
                    <div className="flex items-center flex-shrink-0">
                       <img className="h-10 mr-2 w-10" src={logo} alt=""/> 
                       <span className="text-xl tracking-tight">ANIMEDEX</span>
                    </div>
                    <ul className="hidden lg:flex ml-14 space-x-12">
                     {navItems.map((item,index)=>(
                        <li key={index}>
                            <a href={item.href}>{item.value}</a>
                        </li>
                     ))}
                    </ul>
                    <div className="hidden lg:flex justify-center space-x-12 items-center">
                       <a href="#" className="py-2 px-3 border rounded-md">
                        Sign In
                       </a>
                       <a href="#" className="bg-gradient-to-r from-cyan-500 to-orange-800 py-2 px-3 rounded-md">
                        Create an Account
                       </a>

                    </div>
                    <div className="lg:hidden md:flex flex-col justify-end">
                        <button onClick={toggleNavbar}>
                            {mobileDrawerOpen ? <X/>:<Menu/>}
                        </button>
                    </div>
                </div>
                {mobileDrawerOpen && (
                    <div className="fixed right-0 z-20 bg-neutral-900 w-full p-12 flex flex-col justify-center items-center lg:hidden">
                       <ul>
                        {navItems.map((item,index)=>(
                            <li key={index} className="py-4 ">
                                <a href={item.href}>{item.label}</a>
                            </li>
                        ))
                            
                        }
                        </ul> 
                        <div className="flex space-x-6">
                            <a href="Login.jsx" className="py-2 px-3 border rounded-md">Login</a>
                            <a href="#" className="bg-gradient-to-r from-cyan-500 to-orange-800 py-2 px-3 rounded-md">
                        Create an Account
                       </a>
                        </div>
                    </div>
                )}
            </div>
            
            </nav>

        </div>
    )
}