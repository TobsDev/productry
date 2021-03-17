import React, { useState } from 'react';
import Service from '../service/service';
import services from '../../content/services.json'
import { motion } from 'framer-motion'

function Services(props) {

    const [activeService, setActiveService] = useState("1")
    const toggleService = (e) => setActiveService(e.target.id)

    return (
        <div id="services" className="services">
            <div className="services__viewport">
                <div className="services__overview">
                    <h2 className="services__headline">This is what we can do for you</h2>
                    <h3 className="services__headline">Our Services</h3>
                    <p className="services__copy">Our aim is to make it quick and easy for you to access your favourite websites. Your bookmarks sync between your devices so you can access thern on the go.</p>
                    <ul className="services__list">
                        {services.map(service => {
                            return(
                                <div key={service.id} className="services__item-container">
                                    <motion.h5 
                                        className={`services__item ${activeService == service.id ? 'services__item--active' : ''}`} 
                                        key={service.id} 
                                        id={service.id}
                                        onClick={toggleService}
                                        whileHover={{ scale: 1.05, color: "white" }}
                                    >
                                        {service.title}
                                    </motion.h5>
                                </div>
                                
                            );
                        })}
                    </ul>
                </div>
                {services.map(service => {
                    return(
                        <Service 
                            imgUrl={service.imgUrl}    
                            headline={service.headline}
                            copy={service.copy}
                            activeService={activeService}
                            key={service.id}
                            id={service.id}
                        />
                    );
                })}
            </div>
        </div>
    )
}

export default Services
