import React from 'react';
import DownloadCard from '../download-card/downloadCard';
import cases from '../../content/cases.json';
import Slider from '../slider/slider'

const Downloads = () => (
    <div className="downloads" id="work">
        <div className="downloads__viewport">
            <div className="downloads__description">
                <h2 className="downloads__title">This is what we do</h2>
                <h3 className="downloads__title">our work</h3>
                <p className="downloads__copy">We've got more browsers in the pipeline. Please do let us know if you've got a favourite you'd like us to prioritize.</p>
            </div>
            <Slider 
                className="downloads__list"
                loop={ true }
                selected={ 0 }
                showArrows={ true }
                showNav={ true }>
                {cases.map((download) => {
                    return(
                        <DownloadCard 
                            key={download.id}
                            id={download.id}
                            name={`${download.name}`}
                            minVersion={`Minimum version ${download.minVersion}`}
                        />
                    );
                })}
            </Slider>
        </div>
    </div>  
)

export default Downloads