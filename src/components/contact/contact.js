import React from 'react';
import Button from '../button/button';
import { useFormik } from 'formik';
import contactBackground from '../../images/contact_background.svg'
import { FaCity, FaEnvelope, FaPhoneAlt, FaPhoneSquareAlt, FaPortrait, FaRegPaperPlane } from 'react-icons/fa'

function Contact(props) {

    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            phone: '',
            company: '',
            message: '',
            consent: 'false',
        },
        onSubmit: values => {
          alert(JSON.stringify(values, null, 2));
        },
      });

    return(
        <div className="contact" id="contact">
            <div className="contact__viewport">
                <span className="contact__claim">35.000+ already joined</span>
                <h2 className="contact__headline">Wanna get in touch? We’re happy to hear from you</h2>
                <h3 className="contact__title">contact</h3>
                <div className="contact__formBackground" >
                    <form 
                        onSubmit={formik.handleSubmit} 
                        className="contact__form" 
                        style={{ backgroundImage: `url(${contactBackground}) no-repeat`, backgroundSize: "cover"}}>
                            
                            <label className="contact__form__label">
                                <FaPortrait 
                                    style={{ fill: "#293241" }}
                                    className="contact__form__icon"
                                />
                                <input
                                    id="name"
                                    name="name"
                                    type="text"
                                    onChange={formik.handleChange}
                                    value={formik.values.name}
                                    className="contact__input"
                                    placeholder="Your name"
                                />
                            </label>
                            <label className="contact__form__label">
                                <FaEnvelope 
                                    style={{ fill: "#293241" }}
                                    className="contact__form__icon"
                                />
                                <input
                                    id="email"
                                    name="email"
                                    type="text"
                                    onChange={formik.handleChange}
                                    value={formik.values.email}
                                    className="contact__input"
                                    placeholder="Email address"
                                />
                            </label>
                            <label className="contact__form__label">
                                <FaPhoneSquareAlt 
                                    style={{ fill: "#293241" }}
                                    className="contact__form__icon"
                                />
                                <input
                                    id="phone"
                                    name="phone"
                                    type="text"
                                    onChange={formik.handleChange}
                                    value={formik.values.phone}
                                    className="contact__input"
                                    placeholder="Phone"
                                    inputMode='numeric' 
                                    pattern="[0-9]*"
                                />
                            </label>
                            <label className="contact__form__label">
                                <FaCity 
                                    style={{ fill: "#293241" }}
                                    className="contact__form__icon"
                                />
                                <input
                                    id="company"
                                    name="company"
                                    type="text"
                                    onChange={formik.handleChange}
                                    value={formik.values.company}
                                    className="contact__input"
                                    placeholder="Company"
                                />
                            </label>
                            <label className="contact__form__label">
                                <FaRegPaperPlane 
                                    style={{ fill: "#293241" }}
                                    className="contact__form__icon"
                                />
                                <textarea 
                                    rows="3"
                                    id="message"
                                    name="message"
                                    type="text"
                                    onChange={formik.handleChange}
                                    value={formik.values.message}
                                    className="contact__input contact__message"
                                    placeholder="Your message"
                                >
                                    Your message
                                </textarea>
                            </label>
                            <label className="contact__form__label">
                                <input
                                    id="consent"
                                    name="consent"
                                    type="checkbox"
                                    onChange={formik.handleChange}
                                    value={formik.values.consent}
                                    className=" contact__consent"
                                    placeholder="consent"
                                />
                                consent
                            </label>
                        <Button 
                            type="submit"
                            className="contact__button"
                            cta="Contact Us"
                        />
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Contact