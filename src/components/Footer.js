import React, { useState } from "react";
import GoogleMapReact from "google-map-react";
import data from "../config";

import emailjs from 'emailjs-com';

import ReCAPTCHA from "react-google-recaptcha";

function Footer() {

    const localhostKeys = {
        "site_key": "6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI",
        "secret_key": "6LeIxAcTAAAAAGG-vFI1TnRWxMZNFuojJ4WifJWe"
    }

    const currentYear = new Date().getFullYear();

    const AnyReactComponent = () => (
        <i className="fas fa-solid fa-location-dot"></i>
    );
    const defaultProps = {
        center: {
            lat: 28.65174029065706,
            lng: 77.18536968358251,
        },
        zoom: 11,
    };

    const [formDetails, setFormDetails] = useState({ name: "", email: "", comment: "" });
    const [isFormSubmitted, setIsFormSubmitted] = useState(false);
    let responseText = "";

    const handleChange = (e) => {
        setFormDetails({ ...formDetails, [e.target.name]: e.target.value });
    }


    const handleSubmit = (e) => {
        e.preventDefault();

        emailjs.sendForm(data.SERVICE_ID, data.TEMPLATE_ID, e.target, data.EMAILJS_USER_ID)
            .then((result) => {
                console.log(result.text);
                setIsFormSubmitted(true);
                responseText = "Thanks for Responding, will reply ASAP!!!"
            }).catch((error) => {
                console.log(error.text);
                setIsFormSubmitted(false);
                responseText = "Sorry, We couldn't process your Email!!!"
            });

        if (isFormSubmitted) {
            setTimeout(() => {
                setIsFormSubmitted(false);
            }, 1000);
        }

        setFormDetails({ name: "", email: "", comment: "" });
    }

    const [isCaptchaVerified, setIsCaptchaVerified] = useState(false)

    const handleCaptchaChange = (value) => {
        if (value !== null){
            setIsCaptchaVerified(true);
        } else {
            setIsCaptchaVerified(false);
        }
    }

    return (
        <div>
            <div className="px-5 footer bg-light text-black">
                <footer className="pt-5">
                    <div className="row" style={{ height: "100%" }}>
                        <div className="col-lg-4 mb-5">
                            <div style={{ height: "50vh", width: "100%" }}>
                                <GoogleMapReact
                                    bootstrapURLKeys={{ key: data.GOOGLE_MAPS_API }}
                                    defaultCenter={defaultProps.center}
                                    defaultZoom={defaultProps.zoom}
                                >
                                    <AnyReactComponent
                                        lat={28.65174029065706}
                                        lng={77.18536968358251}
                                    />
                                </GoogleMapReact>
                            </div>
                        </div>

                        <div className="col offset-1">
                            <form onSubmit={handleSubmit}>
                                <div className="form-group my-3">
                                    <label htmlFor="name">Name</label>
                                    <input
                                        type="name"
                                        className="form-control my-2"
                                        id="name"
                                        aria-describedby="name"
                                        name="name"
                                        value={formDetails.name}
                                        onChange={handleChange}
                                    />
                                    <small id="emailHelp" className="form-text text-muted">
                                        We'll never share your email with anyone else.
                                    </small>
                                </div>
                                <div className="form-group my-3">
                                    <label htmlFor="email">Email address</label>
                                    <input
                                        type="email"
                                        className="form-control my-2"
                                        id="email"
                                        aria-describedby="emailHelp"
                                        name="email"
                                        value={formDetails.email}
                                        onChange={handleChange}
                                    />
                                    <small id="emailHelp" className="form-text text-muted">
                                        We'll never share your email with anyone else.
                                    </small>
                                </div>
                                <div className="form-group my-3">
                                    <label htmlFor="text">Comment</label>
                                    <input
                                        type="text"
                                        className="form-control my-2"
                                        id="text"
                                        name="comment"
                                        value={formDetails.comment}
                                        onChange={handleChange}
                                    />
                                </div>
                                <ReCAPTCHA
                                    sitekey={localhostKeys.site_key}
                                    onChange={handleCaptchaChange}
                                />
                                <button disabled={!isCaptchaVerified} type="submit" className="btn btn-dark my-2">
                                    Submit
                                </button>
                            </form>
                            {isFormSubmitted && <p>{responseText}</p>}
                        </div>
                    </div>

                    <div className="d-flex justify-content-between pt-4 border-top">
                        <p>&copy; {currentYear}, Hardik Bachhan.</p>
                        <ul className="list-unstyled d-flex">
                            <li className="ms-6 mx-4">
                                <a className="link-dark" href="https://www.linkedin.com/in/hardikbachhan/">
                                    <i className="fab fa-2x fa-brands fa-linkedin-in"></i>
                                </a>
                            </li>
                            <li className="ms-3 mx-4">
                                <a className="link-dark" href="https://github.com/hardikbachhan">
                                    <i className="fab fa-2x fa-brands fa-github"></i>
                                </a>
                            </li>
                        </ul>
                    </div>
                </footer>
            </div>
        </div>
    );
}

export default Footer;
