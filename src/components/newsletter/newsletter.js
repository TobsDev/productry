import React from 'react';
import Button from '../button/button';

class Newsletter extends React.Component {
    constructor(props) {
        super(props);
        
    }

    validateMail(e) {
        let mail = e.target.value
    }

    render() {
        return(
            <div className="newsletter" id="contact">
                <div className="newsletter__viewport">
                    <span className="newsletter__claim">35.000+ already joined</span>
                    <h2 className="newsletter__title">Stay up-to-date with what we're doing</h2>
                    <form action="/" className="newsletter__form">
                        <input 
                            type="email" 
                            className="newsletter__input"
                            placeholder="Enter your email address"
                        />
                        <Button 
                            type="submit"
                            className="newsletter__button"
                            cta="Contact Us"
                        />
                    </form>
                </div>
            </div>
        );
    }
    
}

export default Newsletter