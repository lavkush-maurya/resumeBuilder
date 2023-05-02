import { Link } from "react-router-dom";

const Jumbo = () => {
  return (
    <div>
      <div className="container my-5">
        <div className="p-5 mb-4 bg-light rounded-3">
          <div className="container py-5">
            <h1 className="display-5 fw-bold">The Ultimate Resume Builder</h1>
            <p className="col-md-8 fs-4">
              Build beautiful, recruiter-tested resumes in a few clicks! Our
              resume builder is powerful and easy to use, with a range of
              amazing functions. Custom-tailor resumes for any job within
              minutes. Increase your interview chances and rise above the
              competition.
            </p>
            <Link to="/resume" className="btn btn-primary btn-lg" type="button">
              Try For Free
            </Link>
          </div>
        </div>

        <div className="row p-4 pb-0 pe-lg-0 pt-lg-5 align-items-center rounded-3 border shadow-lg">
          <div className="col-lg-7 p-3 p-lg-5 pt-lg-3">
            <h1 className="display-4 fw-bold lh-1">
              Create a resume to land your next job
            </h1>
            <p className="lead">
              We have developed a resume builder based on feedback from
              thousands of users, recruiter expertise, stellar template design
              and the best hiring practices. The goal is simple: help you land
              that dream job interview! Get an advantage in the modern
              professional environment.
            </p>
            <div className="d-grid gap-2 d-md-flex justify-content-md-start mb-4 mb-lg-3">
              <Link
                to="/resume"
                type="button"
                className="btn btn-outline-secondary btn-lg px-4"
              >
                Build Your Resume
              </Link>
            </div>
          </div>
          <div className="col-lg-4 offset-lg-1 p-0 overflow-hidden shadow-lg">
            <img
              className="rounded-lg-3"
              src="/dom.svg"
              alt="resume having in hand"
              width={720}
            />
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row align-items-md-stretch">
          <div className="col-md-6">
            <div className="h-100 p-5 text-bg-dark rounded-3">
              <h2>Change the background</h2>
              <p>
              Build beautiful, recruiter-tested resumes in a few clicks! Our resume builder is powerful and easy to use, with a range of amazing functions. Custom-tailor resumes for any job within minutes. Increase your interview chances and rise above the competition.
              </p>
              <Link
                to="/resume"
                className="btn btn-outline-light"
                type="button"
              >
                Example button
              </Link>
            </div>
          </div>
          <div className="col-md-6">
            <div className="h-100 p-5 bg-light border rounded-3">
              <h2>Add borders</h2>
              <p>
              Take the stress out of resume building with our resume builder! Our tool makes it easy to develop a professional resume with all of the features you need to stand out from the competition.
              </p>
              <Link to="/resume" className="btn btn-outline-dark" type="button">
                Example button
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Jumbo;
