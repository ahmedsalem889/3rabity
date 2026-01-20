import React, { useMemo, useState, type FormEvent } from 'react';
import toast from 'react-hot-toast';
import { FaEnvelope, FaInstagram, FaWhatsapp, FaYoutube } from 'react-icons/fa';
import { contactApi } from '../../api/contact/contact.api';
import type { ContactDTO } from '../../api/contact/contact.dto';
import { useAuth } from '../../context/AuthContext';
import { getAuthUser } from '../../utils/localstorage';
import styles from './Contact.module.css';

const Contact: React.FC = () => {
    const auth = useAuth()

    const initialFormData = useMemo(() => {
        let email = ""
        try {
            const authUser = getAuthUser();
            email = authUser?.email || "";
        } catch (e) {
            toast.error("Failed to get user")
            auth.logout()
        }
        return {
            email,
            message: "",
            title: ""
        }
    }, [])

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [contactFormData, setContactFormData] = useState<ContactDTO>(initialFormData)
    const isValid = useMemo(() => Object.values(contactFormData).every(value => !!value), [contactFormData])

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        setIsSubmitting(true)
        try {
            await contactApi.createContact(contactFormData)
            toast.success("Contact sent successfully")
            setContactFormData(initialFormData)
        } catch (e) {
            toast.error("Contact failed")
        } finally {
            setIsSubmitting(false)
        }
    }


    return (
        <div>
            <div className={styles.hero}>
                <h1>Contact us</h1>
            </div>

            <div className={styles.container}>
                <form onSubmit={handleSubmit} className={styles.leftForm}>
                    <h2>Gmail</h2>
                    <input disabled={isSubmitting} type="email" className={styles.input} value={contactFormData.email} onChange={e => setContactFormData(prev => ({ ...prev, email: e.target.value }))} />

                    <h2>Subject</h2>
                    <input disabled={isSubmitting} type="text" className={styles.input} value={contactFormData.title} onChange={e => setContactFormData(prev => ({ ...prev, title: e.target.value }))} />

                    <h2>Your message</h2>
                    <textarea disabled={isSubmitting} className={styles.textarea}
                        value={contactFormData.message}
                        onChange={e => setContactFormData(prev => ({ ...prev, message: e.target.value }))}
                    />

                    <button className={styles.sendBtn} disabled={!isValid || isSubmitting}>Send message</button>
                </form>

                <div className={styles.rightInfo}>
                    <h2 className={styles.infoTitle}><span>Contact</span> us</h2>
                    <a href="mailto:arabity@gmail.com" target='_blank'>
                        <div className={styles.infoItem}>
                            <div className={styles.iconBox}><FaEnvelope /></div>
                            <div>
                                <h3>Gmail</h3>
                                <p>arabity@gmail.com</p>
                            </div>
                        </div>
                    </a>
                    <a href="https://wa.me/201010151412" target='_blank'>
                        <div className={styles.infoItem}>
                            <div className={styles.iconBox}><FaWhatsapp /></div>
                            <div>
                                <h3>Whats app</h3>
                                <p>01010151412</p>
                            </div>
                        </div>
                    </a>
                    <a href="https://www.instagram.com" target='_blank'>
                        <div className={styles.infoItem}>
                            <div className={styles.iconBox}><FaInstagram /></div>
                            <div>
                                <h3>Instagram</h3>
                                <p>arabity</p>
                            </div>
                        </div>
                    </a>
                    <a href="https://www.youtube.com" target='_blank'>
                        <div className={styles.infoItem}>
                            <div className={styles.iconBox}><FaYoutube /></div>
                            <div>
                                <h3>YouTube</h3>
                                <p>arabity</p>
                            </div>
                        </div>
                    </a>

                </div>
            </div>
        </div>
    );
};

export default Contact;
