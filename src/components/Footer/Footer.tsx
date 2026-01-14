import React from 'react';
import { FaFacebookF, FaInstagram, FaXTwitter } from 'react-icons/fa6'; // Assuming fa6 or typical icons
import styles from './Footer.module.css';

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.content}>
        <div className={styles.brand}>
          <h2>rabiity</h2>
          <div className={styles.socials}>
            <FaFacebookF /> <FaInstagram /> <FaXTwitter />
          </div>
        </div>

        <div className={styles.column}>
          <h3>Contact us</h3>
          {/* Social icons are actually under brand in design, but "Contact us" column usually has phones/emails. 
              The design shows "Contact us" next to brand with only social icons under it? 
              Wait, looking at image 4 (Footer):
              "rabiity" logo left.
              "Contact us" column with Facebook, Insta, X icons under it.
              "Support" column: Common questions, Help and Support, Privacy Policy.
              "Download our app now" column: App Store, Google Play, App Gallery buttons.
          */}
          <div className={styles.socialRow}>
            <FaFacebookF /> <FaInstagram /> <FaXTwitter />
          </div>
        </div>

        <div className={styles.column}>
          <h3>Support</h3>
          <ul>
            <li>Common questions</li>
            <li>Help and Support</li>
            <li>Privacy Policy</li>
          </ul>
        </div>

        <div className={styles.column}>
          <h3>Download our app now</h3>
          <div className={styles.appButtons}>
            <button className={styles.storeBtn}>App Store</button>
            <button className={styles.storeBtn}>Google Play</button>
            <button className={styles.storeBtn}>App Gallery</button>
          </div>
        </div>
      </div>
      <div className={styles.copyright}>
        © 2025 All Right Reserved
      </div>
    </footer>
  );
};

export default Footer;
