import { Carousel } from "react-bootstrap";
import Footer from "../components/footer/footer";
import "./about.css";
const About = () => {
  return (
    <>
      <main>
        <div className="container marketing">
          {/* START THE FEATURETTES */}
          <hr className="featurette-divider" />
          <div className="row featurette">
            <div className="col-md-7">
              <h2 className="featurette-heading">
                Create the Perfect Resume with Our Resume Builder{" "}
              </h2>
              <p className="lead">
                Make sure your resume is perfect with our resume builder! Our
                user-friendly tool will help you create a resume that is
                tailored to your experience and goals, so you have the best
                chance of success.
              </p>
            </div>
            <div className="col-md-5">
              <img src="/about1.jpg" alt="" width={"100%"} />
            </div>
          </div>
          <hr className="featurette-divider" />
          <div className="row featurette">
            <div className="col-md-7 order-md-2">
              <h2 className="featurette-heading">
                Create a Professional Resume Easily with Our Resume Builder
              </h2>
              <p className="lead">
                Take the stress out of resume building with our resume builder!
                Our tool makes it easy to develop a professional resume with all
                of the features you need to stand out from the competition.
              </p>
            </div>
            <div className="col-md-5 order-md-1">
              <img src="/about2.jpg" alt="" width={"100%"} />
            </div>
          </div>
          <hr className="featurette-divider" />
          <div className="row featurette">
            <div className="col-md-7">
              <h2 className="featurette-heading">
                Craft a Standout Resume in Minutes with Our Resume Builder
              </h2>
              <p className="lead">
                Struggling to craft a resume that stands out? Our resume builder
                is the perfect solution - it's easy to use and will help you
                create a stunning resume in just minutes.
              </p>
            </div>
            <div className="col-md-5">
              <img src="/about3.jpg" alt="" width={"100%"} />
            </div>
          </div>
          <hr className="featurette-divider" />
        </div>
        <div className="container-fluid">
          <Carousel>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="/img1.jpg"
                width={"100%"}
                alt="First slide"
              />
              <Carousel.Caption>
                <h3 className="black">
                  "Craft a Standout Resume in Minutes with Our Resume Builder"
                </h3>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="/img2.jpg"
                width={"100%"}
                alt="Second slide"
              />

              <Carousel.Caption>
                <h3 className="black">
                  Create a Professional Resume Easily with Our Resume Builder
                </h3>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="/img3.jpg"
                width={"100%"}
                alt="Third slide"
              />

              <Carousel.Caption>
                <h3 className="black">
                  Create the Perfect Resume with Our Resume Builder
                </h3>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </div>
      </main>
      <Footer />
    </>
  );
};
export default About;
