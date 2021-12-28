import React from 'react';
import Menu from './svg/bars-solid.svg';
import Close from './svg/times-solid.svg';
import CartIcon from './svg/shopping-cart-solid.svg';
import {Link} from 'react-router-dom';
import './css/Header.css';

export const Header = () => {
    return (
        <header>
            <div className="menu" >
                <img src={Menu} alt="" width="20"/>
            </div>
            <div className="logo">
                <h1><Link to="/">K I S A L U</Link></h1>
            </div>
            <nav>
                <ul className="toggle">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/product">Product</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/login">Login / Register</Link></li>
                    <li className="close" >
                        <img src={Close} alt="" width="20"/>
                    </li>
                </ul>
                <div className="nav-cart">
                    <span>1</span>
                    <Link to="/cart">
                        <img src={CartIcon} alt="" width="20"/>
                    </Link>
                </div>
            </nav>
        </header>
    );
};