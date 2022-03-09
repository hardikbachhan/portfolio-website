import React, { useState } from "react";
import data from "../config";

import emailjs from "emailjs-com";

import ReCAPTCHA from "react-google-recaptcha";

import thank_you from "../public/images/thank_you.jpg";

const Footer = () => {

    // const localhostKeys = {
    //     site_key: "6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI",
    //     secret_key: "6LeIxAcTAAAAAGG-vFI1TnRWxMZNFuojJ4WifJWe",
    // };

    const mapDetails = {
        center: {
            lat: 28.65174029065706,
            lng: 77.18536968358251,
        },
        zoom: 11,
        size: {
            height: "400px",
            width: "400px"
        }
    };

    // useEffect(async () => {
    //   const response = await fetch(`https://maps.googleapis.com/maps/api/staticmap?center=${mapDetails.center.lat}%2c%20${mapDetails.center.lng}&zoom=${mapDetails.zoom}&size=${mapDetails.size.width}x${mapDetails.size.height}&key=${data.GOOGLE_MAPS_API}`)

    // })

    const currentYear = new Date().getFullYear();

    const [formDetails, setFormDetails] = useState({
        name: "",
        email: "",
        comment: "",
    });

    const [isFormSubmitted, setIsFormSubmitted] = useState(false);
    let responseText = "";

    const handleChange = (e) => {
        setFormDetails({ ...formDetails, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        emailjs
            .sendForm(
                data.SERVICE_ID,
                data.TEMPLATE_ID,
                e.target,
                data.EMAILJS_USER_ID
            )
            .then((result) => {
                console.log(result.text);
                setIsFormSubmitted(true);
                responseText = "Thanks for Responding, will reply ASAP!!!";
            })
            .catch((error) => {
                console.log(error.text);
                setIsFormSubmitted(false);
                responseText = "Sorry, We couldn't process your Email!!!";
            });

        if (isFormSubmitted) {
            setTimeout(() => {
                setIsFormSubmitted(false);
            }, 3000);
        }

        setFormDetails({ name: "", email: "", comment: "" });
    };

    const [isCaptchaVerified, setIsCaptchaVerified] = useState(false);

    const handleCaptchaChange = (value) => {
        if (value !== null) {
            setIsCaptchaVerified(true);
        } else {
            setIsCaptchaVerified(false);
        }
    };

    return (
        <div>
            <div className="px-5 footer bg-light text-black">
                <footer className="pt-5">
                    <div className="row" style={{ height: "100%" }}>
                        <div className="col-lg-4 mb-5">
                            <div >
                                <img style={{ height: mapDetails.size.height, width: "100%" }} src={thank_you} alt="" />

                                {/* <GoogleMap
                                    defaultZoom={mapDetails.zoom}
                                    defaultCenter={{
                                        lat: mapDetails.center.lat,
                                        lng: mapDetails.center.lng,
                                    }}
                                >
                                    <Marker
                                        position={{
                                            lat: mapDetails.center.lat,
                                            lng: mapDetails.center.lng,
                                        }}
                                    />
                                </GoogleMap> */}
                            </div>
                        </div>

                        <div className="col">
                            <h4 className="mt-3">Reach out to me for discussing a Project or maybe sharing some Coffee ...</h4>
                            <form onSubmit={handleSubmit}>
                                <div className="form-group my-3">
                                    <label htmlFor="name">Name</label>
                                    <input
                                        required
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
                                        required
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
                                        required
                                        type="text"
                                        className="form-control my-2"
                                        id="text"
                                        name="comment"
                                        value={formDetails.comment}
                                        onChange={handleChange}
                                    />
                                </div>
                                <ReCAPTCHA
                                    sitekey={data.SITE_KEY}
                                    onChange={handleCaptchaChange}
                                />
                                <button
                                    disabled={!isCaptchaVerified}
                                    type="submit"
                                    className="btn btn-dark my-2"
                                >
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
                                <a
                                    style={{ "color": "#595260" }}
                                    href="https://www.linkedin.com/in/hardikbachhan/"
                                >
                                    <i className="fab fa-2x fa-brands fa-linkedin-in" ></i>
                                </a>
                            </li>
                            <li className="ms-3 mx-4">
                                <a
                                    style={{ "color": "#595260" }}
                                    href="https://github.com/hardikbachhan/"
                                >
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
