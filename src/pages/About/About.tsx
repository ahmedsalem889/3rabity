import React from 'react';
import { FaArrowsAltH, FaShieldAlt } from 'react-icons/fa'; // Icons for cards
import concept from "../../assets/about.jpg";
import styles from './About.module.css';

const About: React.FC = () => {
    return (
        <div>
            <div className={styles.hero}>
                <div className={styles.overlay}></div>
                <div className={styles.heroText}>
                    <h1>About us</h1>
                </div>
            </div>
            <section className={styles.introSection}>
                <div className={styles.introText}>
                    <h2 className={styles.brandTitle}>Arabity</h2>
                    <p> ARBITY is a professional auto service center dedicated to delivering reliable, high-quality vehicle maintenance and repair solutions. We combine experienced technicians with advanced diagnostic technology to ensure accurate service for every vehicle.</p>
                    <p> Our mission is to provide safe, efficient, and transparent automotive care that customers can trust. Whether it is routine maintenance or complex repairs, we focus on precision, performance, and long-term vehicle reliability.</p>
                    <p> At ARBITY, customer satisfaction comes first. We believe in honest pricing, clear communication, and professional service standards that keep your car running at its best.</p>
                </div>
                <div className={styles.introImage}>
                    <img src={concept} alt="Car Concept" />
                </div>
            </section>

            <section className={styles.cardsSection}>
                <div className={styles.card}>
                    <div className={styles.iconWrapper}><div className={styles.circleIcon}><span>BeReal</span></div></div>
                    <h3>Realability</h3>
                    <p>We deliver dependable automotive services you can trust, using
                        proven methods and high-quality parts to ensure consistent performance.</p>
                </div>
                <div className={styles.card}>
                    <div className={styles.iconWrapper}><div className={styles.circleIcon}><FaShieldAlt /></div></div>
                    <h3>Professionalism</h3>
                    <p>Our certified technicians follow industry standards and best practices to provide accurate diagnostics and expert repairs.</p>
                </div>
                <div className={styles.card}>
                    <div className={styles.iconWrapper}>
                        <div className={styles.circleIcon}>
                            <FaArrowsAltH />
                        </div>
                    </div>
                    <h3>Value</h3>
                    <p>We offer competitive pricing without compromising quality, ensuring excellent value for every service we provide.</p>
                </div>
            </section>
        </div>
    );
};

export default About;
