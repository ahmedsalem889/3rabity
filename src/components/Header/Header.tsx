import React from 'react';
import { BiLogOut } from 'react-icons/bi';
import { NavLink } from 'react-router-dom';
import Logo from '../../assets/arbity_Red.png';
import { handleLogout } from '../../utils/auth';
import styles from './Header.module.css';



const Header: React.FC = () => {
    const [isScrolled, setIsScrolled] = React.useState(false);

    React.useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 0);
        };

        window.addEventListener("scroll", handleScroll);
        // Check initial scroll position
        handleScroll();

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header className={`${styles.header} ${isScrolled ? styles.scrolled : styles.transparent}`}>
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
                <button className={styles.searchBtn} onClick={handleLogout}><BiLogOut /></button>
            </div>
        </header>
    );
};

export default Header;
