import { Link } from "react-router-dom";

const Heroes = () => {
  return (
    <div>
      <div className="bg-dark text-secondary px-4 py-5 text-center">
        <div className="py-5">
          <h1 className="display-5 fw-bold text-white">
            Create perfect resumes for the modern job market
          </h1>
          <div className="col-lg-6 mx-auto">
            <p className="fs-5 mb-4">
              Creating a resume has never been this easy! In three simple steps,
              create the perfect document to impress hiring managers and
              employers. Minimum time, maximum professional quality.
            </p>
            <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
              <Link
                to="/resume"
                type="button"
                className="btn btn-outline-info btn-lg px-4 me-sm-3 fw-bold"
                value=""
              >
                Create My Resume
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="px-4 py-5 my-5 text-center">
          <img
            className="d-block mx-auto mb-4"
            src="/res.png"
            alt="lol"
            width={100}
            height={100}
          />
          <h1 className="display-5 fw-bold">
            User-friendly. Professional. Effective. Try our Resume builder
            today!
          </h1>
          <div className="col-lg-6 mx-auto">
            <p className="lead mb-4">
              How long does it take to write a resume? Hours? Days? With our
              resume maker you can be done in minutes. Create a convincing and
              effective resume in several clicks. Use our pre-generated phrases,
              choose a design, fill in your details and ideas. Fast and simple.
            </p>
            <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
              <Link
                to="/resume"
                type="button"
                className="btn btn-primary btn-lg px-4 gap-3"
                value=""
              >
                Try it Now
              </Link>
              <Link
                to="/how_to_write"
                type="button"
                className="btn btn-outline-dark btn-lg px-4"
                value=""
              >
                Resume Examples
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Heroes;
