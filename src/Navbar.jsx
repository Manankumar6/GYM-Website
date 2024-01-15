import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import ViewHeadlineIcon from '@mui/icons-material/ViewHeadline';
import Button from '@mui/material/Button';

const Navbar = () => {
    const [navList, setnavList] = useState(false);

    // Function to toggle the visibility of the nav list
    const toggleNavList = () => {
        setnavList(!navList);
    };

    return (
        <>
            <div className='navbar'>
                <div className="logo">
                    Fitness Club
                </div>
                <div className={navList?"nav_list " : "nav_list mobile_nav_list"}>
                    <ul className="ul">
                        <li><NavLink to='/'>Home</NavLink></li>
                        <li><NavLink to='/service'>Service</NavLink></li>
                        <li><NavLink to='/about'>About</NavLink></li>
                       
                    </ul>
                </div>
                <div className="burger">
                    <Button onClick={toggleNavList}> <ViewHeadlineIcon /></Button>
                </div>
            </div>

        </>
    )
}

export default Navbar;