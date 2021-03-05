import React from 'react';
import DownloadCard from '../download-card/downloadCard';
import projects from '../../content/cases.json';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination } from 'swiper'
// Import Swiper styles
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';

SwiperCore.use([Navigation, Pagination])

function Downloads (props) {
    return(
        <div className="downloads" id="work">
            <div className="downloads__viewport">
                <div className="downloads__description">
                    <h2 className="downloads__title">This is what we do</h2>
                    <h3 className="downloads__title">our work</h3>
                    <p className="downloads__copy">We've got more browsers in the pipeline. Please do let us know if you've got a favourite you'd like us to prioritize.</p>
                </div>
                <Swiper 
                    wrapperTag="ul"
                    slidesPerView={'auto'}
                    loop={true}
                    navigation
                    spaceBetween={30}
                    pagination={{ clickable: true }}
                    onSwiper={(swiper) => console.log(swiper)}
                    onSlideChange={() => console.log('slide change')}
                    className="downloads__list"
                    >
                    {projects.map((project, index) => {
                        return(
                            <SwiperSlide key={index}>
                                <DownloadCard 
                                    key={project.id}
                                    id={project.id}
                                    name={`${project.name}`}
                                    minVersion={`Minimum version ${project.minVersion}`}
                                    className="swiper-slide"
                                />
                            </SwiperSlide>
                        );
                    })}
                </Swiper>
            </div>
        </div>  
    )
}

export default Downloads