import React from 'react';
import Feature from '../feature/feature';
import features from '../../content/features.json'

class Features extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            activeFeature: "1"
        }
        this.toggleFeature = this.toggleFeature.bind(this)
    }

    toggleFeature(e) {
        let id = e.target.id
        this.setState({
            activeFeature: id
        })
    }

    render() {
        return(
            <div id="services" className="features">
                <div className="features__viewport">
                    <div className="features__overview">
                        <h2 className="features__headline">This is what we can do for you</h2>
                        <h3 className="features__headline">Our Services</h3>
                        <p className="features__copy">Our aim is to make it quick and easy for you to access your favourite websites. Your bookmarks sync between your devices so you can access thern on the go.</p>
                        <ul className="features__list">
                            {features.map(feature => {
                                return(
                                    <div key={feature.id} className="features__item-container">
                                        <h5 
                                            className={`features__item ${this.state.activeFeature == feature.id ? 'features__item--active' : ''}`} 
                                            key={feature.id} 
                                            id={feature.id}
                                            onClick={this.toggleFeature}
                                        >
                                            {feature.title}
                                        </h5>
                                    </div>
                                    
                                );
                            })}
                        </ul>
                    </div>
                    {features.map(feature => {
                        return(
                            <Feature 
                                imgUrl={feature.imgUrl}    
                                headline={feature.headline}
                                copy={feature.copy}
                                activeFeature={this.state.activeFeature}
                                key={feature.id}
                                id={feature.id}
                            />
                        );
                    })}
                </div>
            </div>
        )
    }
}

export default Features