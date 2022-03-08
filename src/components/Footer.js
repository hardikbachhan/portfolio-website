import React from "react";
import { Wrapper, Status } from "@googlemaps/react-wrapper";

function Footer() {

    const currentYear = new Date().getFullYear();

  return (
    <div>
      <div className="px-5 footer bg-light text-black">  
        <footer className="pt-5">
          <div className="row">

            <div className="col-2">
              <h5>Section</h5>
              <ul className="nav flex-column">
                <li className="nav-item mb-2">
                  <a href="#" className="nav-link p-0 text-muted">
                    Home
                  </a>
                </li>
                <li className="nav-item mb-2">
                  <a href="#" className="nav-link p-0 text-muted">
                    Features
                  </a>
                </li>
                <li className="nav-item mb-2">
                  <a href="#" className="nav-link p-0 text-muted">
                    Pricing
                  </a>
                </li>
                <li className="nav-item mb-2">
                  <a href="#" className="nav-link p-0 text-muted">
                    FAQs
                  </a>
                </li>
                <li className="nav-item mb-2">
                  <a href="#" className="nav-link p-0 text-muted">
                    About
                  </a>
                </li>
              </ul>
            </div>

            <div className="col offset-1">
              <form>
                <h5>Subscribe to our newsletter</h5>
                <p>Monthly digest of whats new and exciting from us.</p>
                <div className="d-flex w-100 gap-2">
                  <label htmlFor="newsletter1" className="visually-hidden">
                    Email address
                  </label>
                  <input
                    id="newsletter1"
                    type="text"
                    className="form-control"
                    placeholder="Email address"
                  />
                  <button className="btn btn-dark" type="button">
                    Subscribe
                  </button>
                </div>
              </form>
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
