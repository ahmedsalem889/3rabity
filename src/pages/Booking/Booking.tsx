import React, { useEffect, useMemo, useState, type FormEvent } from 'react';
import toast from 'react-hot-toast';
import { bookingApi } from '../../api/bookings/booking.api';
import type { createBookingDTO } from '../../api/bookings/bookings.dto';
import { carsApi } from '../../api/cars/cars.api';
import type { Car } from '../../api/cars/cars.dto';
import type { Component } from '../../api/components/components.dto';
import { servicesApi } from '../../api/services/services.api';
import type { Service } from '../../api/services/services.dto';
import MultiSelectComboBox from '../../components/UI/MultiSelectComboBox';
import styles from './Booking.module.css';

const Booking: React.FC = () => {

    const formInitialState = {
        carId: "",
        notes: "",
        scheduledDate: "",
        serviceId: "",
        components: []
    }

    const [formData, setFormData] = useState<createBookingDTO>(formInitialState)

    const handleChangeField = (field: keyof createBookingDTO, value: string | string[]) => {
        setFormData((prev) => ({
            ...prev,
            [field]: value
        }));
    };

    const handleChangeCar = (carId: string) => handleChangeField("carId", carId);
    const handleChangeService = (serviceId: string) => handleChangeField("serviceId", serviceId)
    const handleChangeSchedualData = (schaduleDate: string) => handleChangeField("scheduledDate", schaduleDate)
    const handleChangeNotes = (notes: string) => handleChangeField("notes", notes);


    const [services, setServices] = useState<Service[]>([])
    const [components, setComponents] = useState<Component[]>([])
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
    useEffect(() => {
        const handleGetComponents = async () => {
            if (!formData.serviceId || !formData.carId) return setComponents([]);

            const carTypeId = cars.find(car => car.id === formData.carId)?.type.id

            if (!carTypeId) return setComponents([])
            const componentsData = await servicesApi.getServiceComponentsWithCarType({
                serviceId: formData.serviceId,
                carTypeId
            })
            setComponents(componentsData?.components)
        }
        handleGetComponents()
    }, [formData.serviceId, formData.carId])

    const getCarOptionLabel = (car: Car) => `${car.color} ${car.type.maker} ${car.model} (${car.year})`


    const validated = useMemo(() => Object.values(formData).every(value => !!value), [formData])


    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        setIsSubmitting(true)

        const submitData: createBookingDTO = {
            ...formData,
            scheduledDate: new Date(formData.scheduledDate).toISOString()
        }

        if (validated) {
            try {
                await bookingApi.createBooking(submitData)
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
                            <option value={undefined}>Select a car</option>
                            {cars.map(car => <option value={car.id}>{getCarOptionLabel(car)}</option>)}
                        </select>
                    </div>



                    <div className={styles.group}>
                        <label>Choose your service</label>
                        <select
                            disabled={isSubmitting}
                            value={formData.serviceId}
                            onChange={(e) => handleChangeService(e.target.value)}
                        >
                            <option value={undefined}>Select a service</option>
                            {
                                services.map(service => <option value={service.id} key={service.id}>
                                    {service.name}
                                </option>)
                            }
                        </select>
                    </div>
                    <div className={styles.group}>
                        <label>Components</label>
                        <MultiSelectComboBox
                            options={components.map(c => ({ id: c.id, label: c.name }))}
                            value={formData.components}
                            onChange={(newValues) => handleChangeField("components", newValues)}
                            disabled={isSubmitting}
                            placeholder="Select components..."
                        />
                    </div>


                    <div className={styles.group}>
                        <label>Date</label>
                        <input
                            disabled={isSubmitting} type="date" name='date'
                            value={formData.scheduledDate}
                            onChange={(e) => handleChangeSchedualData(e.target.value)} />
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
                        <button disabled={!validated || isSubmitting} className={styles.confirmBtn}>{isSubmitting ? "Booking..." : "Confirm booking"}</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Booking;
