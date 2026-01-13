import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Header.module.css';
import { FaSearch } from 'react-icons/fa';
import Logo from '../../assets/arbity_Red.png';


const Header: React.FC = () => {
    return (
        <header className={styles.header}>
            <div className={styles.logo}>
                <img src={Logo} alt="logo" />
            </div>
            <nav className={styles.nav}>
                <NavLink to="/" className={({ isActive }) => isActive ? `${styles.link} ${styles.active}` : styles.link}>Home</NavLink>
                <NavLink to="/booking" className={({ isActive }) => isActive ? `${styles.link} ${styles.active}` : styles.link}>Bookings</NavLink>
                <NavLink to="/contact" className={({ isActive }) => isActive ? `${styles.link} ${styles.active}` : styles.link}>Contact</NavLink>
                <NavLink to="/about" className={({ isActive }) => isActive ? `${styles.link} ${styles.active}` : styles.link}>About us</NavLink>
            </nav>
            <div className={styles.actions}>
                <button className={styles.searchBtn}><FaSearch /></button>
            </div>
        </header>
    );
};

export default Header;
