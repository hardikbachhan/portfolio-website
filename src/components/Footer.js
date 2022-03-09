import React, { useState } from "react";
import GoogleMapReact from "google-map-react";
import data from "../config";

function Footer() {
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

  const [formDetails, setFormDetails] = useState({email: "", comment: ""});
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);

  const handleChange = (e) => {
      setFormDetails({...formDetails, [e.target.name]: e.target.value});
  }

  const handleSubmit = (e) => {
      e.preventDefault();
      // logic to send details to mail

      setIsFormSubmitted(true);
      setTimeout(() => {
          setIsFormSubmitted(false)
      }, 3000);

  } 

  return (
    <div>
      <div className="px-5 footer bg-light text-black">
        <footer className="pt-5">
          <div className="row" style={{height: "100%"}}>
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
                  <label htmlFor="email">Email address</label>
                  <input
                    type="email"
                    className="form-control my-2"
                    id="email"
                    aria-describedby="emailHelp"
                    name="email"
                    value={formDetails.title}
                    onChange={handleChange}
                  />
                  <small id="emailHelp" className="form-text text-muted">
                    We'll never share your email with anyone else.
                  </small>
                </div>
                <div className="form-group">
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
                <button type="submit" className="btn btn-dark my-2">
                  Submit
                </button>
              </form>
              {isFormSubmitted && <p>Thanks for Responding, will reply ASAP!!!</p> }
            </div>
          </div>

          <div className="d-flex justify-content-between pt-4 mt-4 border-top">
            <p>&copy; {currentYear}, Hardik Bachhan.</p>
            <ul className="list-unstyled d-flex">
              <li className="ms-6">
                <a className="link-dark" href="#">
                  <i className="fab fa-2x fa-brands fa-linkedin-in"></i>
                </a>
              </li>
              <li className="ms-3">
                <a className="link-dark" href="#">
                  <i className="fab fa-2x fa-brands fa-github"></i>
                </a>
              </li>
              <li className="ms-3">
                <a className="link-dark" href="#">
                  <i className="fas fa-2x fa-solid fa-envelope"></i>
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
