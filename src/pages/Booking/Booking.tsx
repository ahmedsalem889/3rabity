import React, { useEffect, useMemo, useState, type FormEvent } from 'react';
import toast from 'react-hot-toast';
import { bookingApi } from '../../api/bookings/booking.api';
import type { createBookingDTO } from '../../api/bookings/bookings.dto';
import { carsApi } from '../../api/cars/cars.api';
import type { Car } from '../../api/cars/cars.dto';
import { servicesApi } from '../../api/services/services.api';
import type { Service } from '../../api/services/services.dto';
import styles from './Booking.module.css';

const Booking: React.FC = () => {

    const formInitialState = {
        carId: "",
        notes: "",
        scheduledDate: "",
        serviceId: ""
    }

    const [formData, setFormData] = useState<createBookingDTO>(formInitialState)

    const handleChangeField = (field: keyof createBookingDTO, value: string) => setFormData(prev => {
        return { ...prev, [field]: value }
    })

    const handleChangeCar = (carId: string) => handleChangeField("carId", carId);
    const handleChangeService = (serviceId: string) => handleChangeField("serviceId", serviceId)
    const handleChangeSchedualData = (schaduleDate: string) => handleChangeField("scheduledDate", schaduleDate)
    const handleChangeNotes = (notes: string) => handleChangeField("notes", notes)

    const [services, setServices] = useState<Service[]>([])
    const [cars, setCars] = useState<Car[]>([])
    const [isSubmitting, setIsSubmitting] = useState(false)

    useEffect(() => {
        const handleGetServices = async () => {
            const servicesData = await servicesApi.getAllServices()
            setServices(servicesData.services)
        }
        handleGetServices()
    }, [])
    useEffect(() => {
        const handleGetCars = async () => {
            const carsData = await carsApi.getAllUserCars()
            setCars(carsData?.cars)
        }
        handleGetCars()
    }, [])

    const getCarOptionLabel = (car: Car) => `${car.color} ${car.type} ${car.model} (${car.year})`


    const validated = useMemo(() => Object.values(formData).every(value => !!value), [formData])


    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        setIsSubmitting(true)

        if (validated) {
            try {
                await bookingApi.createBooking(formData)
                setFormData(formInitialState)
                toast.success("Car Successfully booked")

            } catch (e) {
                toast.error("Booking failed")
            }
        }

        setIsSubmitting(false)

    }


    return (
        <div className={styles.container}>
            <div className={styles.pageHeader}>
                <h1>Booking</h1>
            </div>
            <div className={styles.content}>
                <h2 className={styles.title}><span className={styles.red}>Start</span> Booking</h2>

                <form className={styles.form} onSubmit={handleSubmit}>




                    <div className={styles.group}>
                        <label>Car </label>
                        <select
                            disabled={isSubmitting}
                            value={formData.carId}
                            onChange={e => handleChangeCar(e.target.value)}
                        >
                            {cars.map(car => <option value={car.id}>{getCarOptionLabel(car)}</option>)}
                        </select>
                    </div>


                    <div className={styles.row}>
                        <div className={styles.group}>
                            <label>Choose your service</label>
                            <select
                                disabled={isSubmitting}
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
                            <input
                                disabled={isSubmitting} type="date" name='date'
                                value={formData.scheduledDate}
                                onChange={(e) => handleChangeSchedualData(e.target.value)} />
                        </div>

                    </div>
                    <div className={styles.row}>
                        <div className={styles.group}>
                            <label>Notes</label>
                            <textarea disabled={isSubmitting}
                                name='notes'
                                value={formData.notes}
                                onChange={(e) => handleChangeNotes(e.target.value)} />
                        </div>

                    </div>
                    <div className={styles.centerAction}>
                        <button disabled={!validated || isSubmitting} type="button" className={styles.confirmBtn}>Confirm booking</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Booking;
