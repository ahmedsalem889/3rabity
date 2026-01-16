import React from 'react';
import toast from 'react-hot-toast';
import { BiLogOut } from 'react-icons/bi';
import { NavLink, useNavigate } from 'react-router-dom';
import Logo from '../../assets/arbity_Red.png';
import { useAuth } from '../../context/AuthContext';
import styles from './Header.module.css';



const Header: React.FC = () => {
    const { logout, user } = useAuth();
    const [isScrolled, setIsScrolled] = React.useState(false);

    const navigate = useNavigate();

    const handleLogout = async () => {
        try {
            logout();
            navigate('/login');
        } catch (error) {
            console.error('Logout failed:', error);
            toast.error('Logout failed');
        }
    };


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
                <div className={styles.user}>{user?.firstName} {user?.lastName}</div>
                <button className={styles.searchBtn} onClick={handleLogout}><BiLogOut /></button>
            </div>
        </header>
    );
};

export default Header;
