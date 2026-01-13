import React from 'react';
import styles from './Booking.module.css';

const Booking: React.FC = () => {
    return (
        <div className={styles.container}>
            <div className={styles.pageHeader}>
                <h1>Booking</h1>
            </div>
            <div className={styles.content}>
                <h2 className={styles.title}><span className={styles.red}>Start</span> Booking</h2>

                <form className={styles.form}>
                    <div className={styles.row}>
                        <div className={styles.group}>
                            <label>Name</label>
                            <input type="text" name='name' />
                        </div>
                        <div className={styles.group}>
                            <label>Gmail <span className={styles.optional}>(optional)</span></label>
                            <input type="email" name='email' />
                        </div>
                    </div>

                    <div className={styles.row}>
                        <div className={styles.group}>
                            <label>Phone number</label>
                            <input type="tel" />
                        </div>
                        <div className={styles.group}>
                            <label>Address</label>
                            <input type="text" />
                        </div>
                    </div>

                    <div className={styles.groupFull}>
                        <label>Car type</label>
                        <input type="text" />
                    </div>

                    <div className={styles.divider}></div>

                    <div className={styles.row}>
                        <div className={styles.group}>
                            <label>Choose your service</label>
                            <select>
                                <option>Car maintenance</option>
                                <option>Car wash</option>
                                <option>Change oil</option>
                                <option>Fix brake</option>
                                <option>Spray</option>
                            </select>
                        </div>
                        <div className={styles.group}>
                            <label>Date</label>
                            <input type="date" name='date' />
                        </div>
                    </div>

                    <div className={styles.row}>
                        <div className={styles.group} style={{ visibility: 'hidden' }}>
                            {/* Spacer */}
                        </div>
                        <div className={styles.group}>
                            <label>Time</label>
                            <input type="time" name='time' />
                        </div>
                    </div>

                    <div className={styles.centerAction}>
                        <button type="button" className={styles.confirmBtn}>Confirm booking</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Booking;
