import React, { useEffect, useState } from 'react';
import type { Booking as BookingType } from '../../api/bookings/bookings.dto';
import { servicesApi } from '../../api/services/services.api';
import type { Service } from '../../api/services/services.dto';
import styles from './Booking.module.css';

const Booking: React.FC = () => {


    const [formData, setFormData] = useState<Partial<BookingType>>({})

    const handleChangeField = (field: keyof BookingType, value: string) => setFormData(prev => {
        return { ...prev, [field]: value }
    })

    const handleChangeCar = (carId: string) => handleChangeField("carId", carId);
    const handleChangeService = (serviceId: string) => handleChangeField("serviceId", serviceId)
    const handleChangeSchedualData = (schaduleDate: string) => handleChangeField("scheduledDate", schaduleDate)
    const handleChangeNotes = (notes: string) => handleChangeField("notes", notes)

    const [services, setServices] = useState<Service[]>([])

    useEffect(() => {
        const handleGetServices = async () => {
            const servicesData = await servicesApi.getAllServices()
            setServices(servicesData.services)
        }
        handleGetServices()
    }, [])


    return (
        <div className={styles.container}>
            <div className={styles.pageHeader}>
                <h1>Booking</h1>
            </div>
            <div className={styles.content}>
                <h2 className={styles.title}><span className={styles.red}>Start</span> Booking</h2>

                <form className={styles.form}>




                    <div className={styles.group}>
                        <label>Car type</label>
                        <select>
                            <option>Car maintenance</option>
                            <option>Car wash</option>
                            <option>Change oil</option>
                            <option>Fix brake</option>
                            <option>Spray</option>
                        </select>
                    </div>


                    <div className={styles.row}>
                        <div className={styles.group}>
                            <label>Choose your service</label>
                            <select
                                value={formData.serviceId}
                                onChange={(e) => handleChangeService(e.target.value)}
                            >
                                {
                                    services.map(service => <option value={service.id} key={service.id}>
                                        {service.name}
                                    </option>)
                                }
                            </select>
                        </div>
                        <div className={styles.group}>
                            <label>Date</label>
                            <input type="date" name='date'
                                value={formData.scheduledDate}
                                onChange={(e) => handleChangeSchedualData(e.target.value)} />
                        </div>

                    </div>
                    <div className={styles.row}>
                        <div className={styles.group}>
                            <label>Notes</label>
                            <textarea name='notes'
                                value={formData.notes}
                                onChange={(e) => handleChangeNotes(e.target.value)} />
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
