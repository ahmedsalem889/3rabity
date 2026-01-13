import React from 'react';
import styles from './Login.module.css';

const Login: React.FC = () => {
    return (
        <div className={styles.container}>
            <div className={styles.imageSide}>
                {/* Background image set in CSS */}
            </div>
            <div className={styles.formSide}>
                <div className={styles.formContent}>
                    <h1>Login</h1>
                    <p>Please login to your account</p>

                    <div className={styles.field}>
                        <label>Email Address</label>
                        <input type="email" placeholder="" />
                    </div>

                    <div className={styles.field}>
                        <label>Password</label>
                        <input type="password" placeholder="" />
                    </div>

                    <button className={styles.loginBtn}>Login</button>
                </div>
            </div>
        </div>
    );
};

export default Login;
