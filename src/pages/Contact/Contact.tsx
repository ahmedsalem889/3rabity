import React from 'react';
import styles from './Contact.module.css';
import { FaEnvelope, FaWhatsapp, FaInstagram, FaYoutube } from 'react-icons/fa';

const Contact: React.FC = () => {
    return (
        <div>
            <div className={styles.hero}>
                <h1>Contact us</h1>
            </div>

            <div className={styles.container}>
                <div className={styles.leftForm}>
                    <h2>Name</h2>
                    <input type="text" className={styles.input} />

                    <h2>Gmail</h2>
                    <input type="email" className={styles.input} />

                    <h2>Subject</h2>
                    <input type="text" className={styles.input} />

                    <h2>Your message</h2>
                    <textarea className={styles.textarea}></textarea>

                    <button className={styles.sendBtn}>Send message</button>
                </div>

                <div className={styles.rightInfo}>
                    <h2 className={styles.infoTitle}><span className={styles.red}>Contact</span> us</h2>

                    <div className={styles.infoItem}>
                        <div className={styles.iconBox}><FaEnvelope /></div>
                        <div>
                            <h3>Gmail</h3>
                            <p>arabity@gmail.com</p>
                        </div>
                    </div>

                    <div className={styles.infoItem}>
                        <div className={styles.iconBox}><FaWhatsapp /></div>
                        <div>
                            <h3>Whats app</h3>
                            <p>000000000000</p>
                        </div>
                    </div>

                    <div className={styles.infoItem}>
                        <div className={styles.iconBox}><FaInstagram /></div>
                        <div>
                            <h3>Instagram</h3>
                            <p>@arabity</p>
                        </div>
                    </div>

                    <div className={styles.infoItem}>
                        <div className={styles.iconBox}><FaYoutube /></div>
                        <div>
                            <h3>You tube</h3>
                            <p>@arabity</p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Contact;
