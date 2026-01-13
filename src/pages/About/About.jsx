import React from 'react';
import styles from './About.module.css';
import { FaShieldAlt, FaMedal, FaArrowsAltH } from 'react-icons/fa'; // Icons for cards
import concept from "../../assets/about.jpg"

const About = () => {
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
                    <h2 className={styles.brandTitle}>rabiity</h2>
                    <p>
                        Nulla et ante et dolor convallis mattis. Sed quis quam id nisl ullamcorper fermentum.
                        Curabitur in massa eu augue imperdiet dictum id id nulla. In ut eros vitae diam aliquam convallis.
                        Quisque dapibus congue lacus in posuere.
                    </p>
                </div>
                <div className={styles.introImage}>
                    <img src={concept} alt="Car Concept" />
                </div>
            </section>

            <section className={styles.cardsSection}>
                <div className={styles.card}>
                    <div className={styles.iconWrapper}><div className={styles.circleIcon}><span>BeReal</span></div></div>
                    <h3>Realability</h3>
                    <p>Nulla et ante et dolor convallis mattis. Sed quis quam id nisl ullamcorper fermentum.</p>
                </div>
                <div className={styles.card}>
                    <div className={styles.iconWrapper}><div className={styles.circleIcon}><FaShieldAlt /></div></div>
                    <h3>Professionalism</h3>
                    <p>Nulla et ante et dolor convallis mattis. Sed quis quam id nisl ullamcorper fermentum.</p>
                </div>
                <div className={styles.card}>
                    <div className={styles.iconWrapper}>
                        <div className={styles.circleIcon}>
                            <FaArrowsAltH />
                        </div>
                    </div>
                    <h3>Value</h3>
                    <p>Nulla et ante et dolor convallis mattis. Sed quis quam id nisl ullamcorper fermentum.</p>
                </div>
            </section>
        </div>
    );
};

export default About;
