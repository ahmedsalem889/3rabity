import React from 'react';
import { FaCar, FaCogs, FaOilCan, FaPhoneAlt, FaSprayCan, FaTools } from 'react-icons/fa'; // Example icons
import { FaWrench } from 'react-icons/fa6';
import styles from './Home.module.css';


const Home: React.FC = () => {
    return (
        <div className={styles.container}>
            {/* Hero Section */}
            <section className={styles.hero}>
                <div className={styles.heroContent}>
                    <h1>Welcome To <br /><span className={styles.brandName}>rabiity</span></h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum minus quia commodi ipsa esse veniam fugiat optio vero eos possimus asperiores, ullam beatae at expedita soluta repellat voluptas accusantium provident..
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum minus quia commodi ipsa esse veniam fugiat optio vero eos possimus asperiores, ullam beatae at expedita soluta repellat voluptas accusantium provident.
                    </p>
                    <button className={styles.ctaButton}>Start Booking</button>
                </div>
            </section>

            {/* Who are we Section */}
            <section className={styles.section}>
                <div className={styles.whoWeAre}>
                    <div className={styles.whoText}>
                        <h2><span className={styles.redText}>Who are</span> we?</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus vel lorem cursus, scelerisque sem ut, commodo urna.</p>
                    </div>
                    <div className={styles.rabiityLogoLarge}>
                        <span>rabiity</span> {/* Placeholder for the logo image */}
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section className={styles.section}>
                <h3><span className={styles.brandName}>rabiity</span> Features</h3>
                <div className={styles.featuresGrid}>
                    <div className={styles.featureCard}>
                        <FaWrench size={40} color="#C41E3A" />
                        <h4>Full Maintenance</h4>
                        <p>Lorem ipsum dolor sit amet.</p>
                    </div>
                    <div className={styles.featureCard}>
                        <FaCogs size={40} color="#C41E3A" /> {/* Using Cogs for Store generic */}
                        <h4>Store</h4>
                        <p>Lorem ipsum dolor sit amet.</p>
                    </div>
                    <div className={styles.featureCard}>
                        <FaPhoneAlt size={40} color="#C41E3A" />
                        <h4>Call Service</h4>
                        <p>Lorem ipsum dolor sit amet.</p>
                    </div>
                </div>
            </section>

            {/* Services Section */}
            <section className={styles.section}>
                <h3>Services</h3>
                <div className={styles.servicesContainer}>
                    <div className={styles.servicesLeft}>
                        <div className={styles.serviceItem}><FaTools /> <span>Car maintenance</span></div>
                        <div className={styles.serviceItem}><FaWrench /> <span>Car Inspection</span></div>
                        <div className={styles.serviceItem}><FaOilCan /> <span>Change oil</span></div>
                        <div className={styles.serviceItem}><FaCar /> <span>Car Wash</span></div>
                    </div>
                    <div className={styles.phoneMockup}>
                        {/* Phone image placeholder */}
                        <div className={styles.phonePlaceholder}>App Preview</div>
                    </div>
                    <div className={styles.servicesRight}>
                        <div className={styles.serviceItem}><FaSprayCan /> <span>Car Spray</span></div>
                        <div className={styles.serviceItem}><FaWrench /> <span>Fix Brake</span></div>
                        <div className={styles.serviceItem}><FaCogs /> <span>Car Accessories</span></div>
                        <div className={styles.serviceItem}><FaPhoneAlt /> <span>Call service</span></div>
                    </div>
                </div>
            </section>

            {/* Download App Section */}
            <section className={styles.downloadSection}>
                <h2><span className={styles.brandName}>rabiity</span></h2>
                <h3>Download App Now</h3>
                <p>Enjoy our exceptional services with the Car Maintenance app.</p>
                <div className={styles.appButtons}>
                    <button className={styles.storeBtnLarge}>App Store</button>
                    <button className={styles.storeBtnLarge}>Google Play</button>
                </div>
            </section>
        </div>
    );
};

export default Home;
