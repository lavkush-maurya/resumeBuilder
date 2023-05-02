import { Link } from "react-router-dom";

const Footer = () => {

const handleSubmit = () => {
  alert("You have Subscribed to our newsletter");
}

  return (
    <footer className="py-5 p-5">
      <div className="row">
        <div className="col-6 col-md-2 mb-3">
          <h5>Resume Builder</h5>
          <ul className="nav flex-column">
            <li className="nav-item mb-2">
              <Link to={"/how_to_write"} className="nav-link p-0 text-muted">
                Create a Resume
              </Link>
            </li>
            <li className="nav-item mb-2">
              <Link href="#" className="nav-link p-0 text-muted">
                Resume Examples
              </Link>
            </li>
            <li className="nav-item mb-2">
              <Link href="#" className="nav-link p-0 text-muted">
                Resume Templates
              </Link>
            </li>
          </ul>
        </div>
        <div className="col-6 col-md-2 mb-3">
          <h5>Resources</h5>
          <ul className="nav flex-column">
            <li className="nav-item mb-2">
              <Link href="#" className="nav-link p-0 text-muted">
                Blog
              </Link>
            </li>
          </ul>
        </div>
        <div className="col-6 col-md-2 mb-3">
          <h5>About Us</h5>
          <ul className="nav flex-column">
            <li className="nav-item mb-2">
              <Link to={"/"} className="nav-link p-0 text-muted">
                Home
              </Link>
            </li>
            <li className="nav-item mb-2">
              <Link href="#" className="nav-link p-0 text-muted">
                Terms of Service
              </Link>
            </li>
            <li className="nav-item mb-2">
              <Link to={"/FAQs"} className="nav-link p-0 text-muted">
                FAQs
              </Link>
            </li>
            <li className="nav-item mb-2">
              <Link href="#" className="nav-link p-0 text-muted">
                Contact Us
              </Link>
            </li>
            <li className="nav-item mb-2">
              <Link to={"/about"} className="nav-link p-0 text-muted">
                About
              </Link>
            </li>
          </ul>
        </div>
        <div className="col-md-5 offset-md-1 mb-3">
          <form>
            <h5>Subscribe to our newsletter</h5>
            <p>Monthly digest of what's new and exciting from us.</p>
            <div className="d-flex flex-column flex-sm-row w-100 gap-2">
              <label htmlFor="newsletter1" className="visually-hidden">
                Email address
              </label>
              <input
                id="newsletter1"
                type="text"
                className="form-control"
                placeholder="Email address"
              />
              <button className="btn btn-primary" onClick={handleSubmit} type="button">
                Subscribe
              </button>
            </div>
          </form>
        </div>
      </div>
      <div className="d-flex flex-column flex-sm-row justify-content-between py-4 my-4 border-top">
        <p>© 2023 Resume Builder, Inc. All rights reserved.</p>
        <p></p>
        <ul className="list-unstyled d-flex">
          <li className="ms-3">
            <Link className="link-dark" href="#">
              <svg className="bi" width={24} height={24}>
                <use xlinkHref="#twitter" />
              </svg>
            </Link>
          </li>
          <li className="ms-3">
            <Link className="link-dark" href="#">
              <svg className="bi" width={24} height={24}>
                <use xlinkHref="#instagram" />
              </svg>
            </Link>
          </li>
          <li className="ms-3">
            <Link className="link-dark" href="#">
              <svg className="bi" width={24} height={24}>
                <use xlinkHref="#facebook" />
              </svg>
            </Link>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
