import React from 'react';
import feature1 from '../../images/illustration-features-tab-1.svg'
import feature2 from '../../images/illustration-features-tab-2.svg'
import feature3 from '../../images/illustration-features-tab-3.svg'
import backgroundShape from '../../images/background-shape-long.svg'
import Button from '../button/button'

class Feature extends React.Component {
    constructor(props) {
        super(props);
        
    }

    render() {

        let images = [feature1, feature2, feature3]
        let image = images[this.props.id - 1]

        return (
            <div className={`feature ${(this.props.id + '') !== this.props.activeFeature ? 'feature--inactive' : ''}`} id={this.props.id} >
                <div className="feature__illustration-container">
                    <img 
                        src={image}
                        alt={`feature ${this.props.id}`} 
                        className="feature__image"
                    />
                    <img 
                        src={backgroundShape}
                        alt="blue background shape"
                        className="feature__background" 
                    />      
                </div>
                <div className="feature__details">
                    <h4 className="feature__headline">{this.props.headline}</h4>
                    <p className="feature__description">{this.props.copy}</p>
                    <div className="feature__button">
                        <Button 
                            cta="More Info"
                        />
                    </div>
                </div>
            </div>
        );
    }
    
}

export default Feature
