import React, { useRef, useEffect } from 'react';
import Button from '../button/button';
import { Formik, Field, Form, useFormik } from 'formik';
import { FaCity, FaEnvelope, FaPhoneAlt, FaPhoneSquareAlt, FaPortrait, FaRegPaperPlane } from 'react-icons/fa'

function Contact(props) {

    //const formik = useFormik()
    const formRef = useRef();

    const handleSubmit = () => { 
        formRef.current.submitForm()
        //setTimeout(formRef.current.resetForm(), 5000);
    }

    //validate email
    function validateEmail(value) {
        let error;
        if (!value) {
          error = 'Required';
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
          error = 'Invalid email address';
        }
        return error;
    }

    //get formData from value Object
    function getFormData(object) {
        const formData = new FormData();
        Object.keys(object).forEach(key => formData.append(key, object[key]));
        return formData;
    }
    
    //validate phone number
    function validatePhone(value) {
        let error;
        if (!/^(\+)?([ 0-9]){10,16}$/i.test(value)) {
            error = 'Please enter a valid phone number';
        } 
        return error;
        }

    //validate consent
    function validateConsent(value) {
    let error;
    if (value != true) {
        error = 'Your consent is required';
    } 
    return error;
    }

    return(
        <div className="contact" id="contact">
            <div className="contact__viewport">
                <h2 className="contact__headline">Wanna get in touch? We’re happy to hear from you</h2>
                <h3 className="contact__title">contact</h3>
            </div>
            <div className="contact__formBackground">
                <Formik
                    initialValues={{
                        last_name: '',
                        email1: '',
                        phone_mobile: '',
                        department: '',
                        description: '',
                        lawful_basis: false,
                        lawful_basis_source: "website form",
                        campaign_id: process.env.GATSBY_CAMPAIGN_ID_FORM,
                        assigned_user_id: 1, 
                        moduleDir: "Leads",
                        Submit: "Submit"
                    }}
                    onSubmit={ (values) => {
                        fetch("https://crm.trosenberg.com/index.php?entryPoint=WebToPersonCapture", {
                                method: 'POST',
                                mode: "no-cors",
                                headers: {
                                    'Content-Type': 'application/json',
                                    'Access-Control-Allow-Origin': '*',
                                    'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9'
                                },
                                body: new URLSearchParams(getFormData(values)),
                                })
                            .then(response => response.text())
                            .then((result) => {
                                console.log(result)
                                setTimeout(formRef.current.resetForm(), 5000);  
                                alert('Your message has been submitted. We\'ll get back to you shortly')
                            })
                            .catch(error => console.log('error', error))
                    }}
                    innerRef={formRef} 
                >
                    {({ errors, touched, isValidating, values }) => (
                        <Form 
                            className="contact__form" 
                            name='WebToLeadForm' 
                            id='WebToLeadForm'
                        > 
                            <div className="contact__form--left">
                                <label className="contact__form__label">
                                    <FaPortrait 
                                        style={{ fill: "#293241" }}
                                        className="contact__form__icon"
                                    />
                                    <Field
                                        id="last_name"
                                        name="last_name"
                                        type="text"
                                        className="contact__input"
                                        placeholder="Your name"
                                    />
                                </label>
                                <label className="contact__form__label">
                                    <FaEnvelope 
                                        style={{ fill: "#293241" }}
                                        className="contact__form__icon"
                                    />
                                    <Field
                                        id="email1"
                                        name="email1"
                                        type="text"
                                        className={`contact__input ${errors.email && touched.email ? `contact__input--invalid` : null}`}
                                        placeholder="Email address"
                                        validate={validateEmail}
                                    />
                                    {errors.email && touched.email ? <span className="contact__input-error">{errors.email}</span> : null}
                                </label>
                                <label className="contact__form__label">
                                    <FaPhoneSquareAlt 
                                        style={{ fill: "#293241" }}
                                        className="contact__form__icon"
                                    />
                                    <Field
                                        id="phone_mobile"
                                        name="phone_mobile"
                                        type="text"
                                        className="contact__input"
                                        placeholder="Phone"
                                        inputMode='numeric' 
                                        pattern="[0-9]*"
                                        //validate={validatePhone}
                                    />
                                    {errors.phone && touched.phone ? <span className="contact__input-error">{errors.phone}</span> : null}
                                </label>
                                <label className="contact__form__label">
                                    <FaCity 
                                        style={{ fill: "#293241" }}
                                        className="contact__form__icon"
                                    />
                                    <Field
                                        id="department"
                                        name="department"
                                        type="text"
                                        className="contact__input"
                                        placeholder="Company"
                                    />
                                </label>
                            </div>
                            <div className="contact__form--right">
                                <label className="contact__form__label">
                                    <FaRegPaperPlane 
                                        style={{ fill: "#293241" }}
                                        className="contact__form__icon"
                                    />
                                    <Field
                                        as="textarea" 
                                        rows="3"
                                        id="description"
                                        name="description"
                                        type="text"
                                        className="contact__input contact__message"
                                        placeholder="Your message"
                                    >
                                        Your message
                                    </Field>
                                </label>
                            </div>
                            <label className="contact__form__label contact__consent">
                                <Field
                                    id="lawful_basis"
                                    name="lawful_basis"
                                    type="checkbox"
                                    className=" "
                                    placeholder="consent"
                                    validate={validateConsent}
                                />
                                <span className="contact__form-consent">I agree to the data privacy terms</span> 
                                {errors.consent && touched.consent ? <span className="contact__input-error">{errors.consent}</span> : null}
                            </label>
                            <Field 
                                type='hidden' 
                                id='campaign_id' 
                                name='campaign_id' 
                                value='ae6c13ea-53f2-648b-667d-6064a7e887d5'
                            />
                            <Field 
                                type='hidden' 
                                id='assigned_user_id' 
                                name='assigned_user_id' 
                                value='1'
                            />
                            <Field 
                                type='hidden' 
                                id='moduleDir' 
                                name='moduleDir' 
                                value='Leads'
                            />
                        </Form>
                    )}
                </Formik>
                </div>
                <Button 
                    type="submit"
                    className="contact__button"
                    cta="Contact Us"
                    form="WebToLeadForm"
                    onClick={handleSubmit}
                />
        </div>
    );
}

export default Contact