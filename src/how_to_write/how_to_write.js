import Accordion from "react-bootstrap/Accordion";
import Footer from "../components/footer/footer";
const HTW = () => {
  return (
    <>
      <div className="container">
        <Accordion defaultActiveKey="0">
          <Accordion.Item eventKey="0">
            <Accordion.Header>How Do I Create a Resume?</Accordion.Header>
            <Accordion.Body>
              <center>
                {" "}
                <h4 style={{ color: "steelblue" }}>
                  {" "}
                  For creating Resume you must first Login...
                </h4>
              </center>
              <h5>
                {" "}
                This article walks you through all of the most important
                sections in our Resume Editor from start to finish.
              </h5>
              <h6> Step 1: Choose a template </h6>
              Start by selecting a template with a design that is complimentary
              relevant to your industry. We now offer 4 designed templates to
              meet the diverse needs of job seekers. Don't worry too much about
              your template choice in the beginning. Once you add your resume
              details you can easily switch your design.
              <br />
              <br />
              <h6> Step 2: Add your personal details </h6>
              some of the fields in this section might be more relevant than
              others. Feel free to skip or leave fields blank. Here are a few
              fields in the Personal Details section worth noting:
              <br />
              <b>Job title:</b> this is the title of the job you want to get or
              are applying for. This field goes at the very top of your resume
              and is a great way to customize your resume for each application.
              <br />
              <br />
              <h6>Step 3: Write your professional summary</h6>
              Your professional summary is 3-4 simple sentences about your
              overall career journey, your match for the role, and your
              intentions for the future.
              <br />
              <br />
              <h6>Step 4: Add links </h6>
              Links are a great way to make up for the fact that space on your
              resume is limited. Include additional information by including a
              link.
              <br />
              <br />
              <h6>Step 5: Add your employment or project history </h6>
              This is the main part of your resume. Include roles during the
              last 10 years featuring relevant experience.
              <br />
              <br />
              <h6>Step 6: Add your education </h6>
              If you have extensive work experience, extra education details
              aren't especially important to include.However, if this is a
              resume for your first job in a career after school, then it is
              appropriate to elaborate on your educational experience in this
              section. <br />
              <br />
              <h6>Step 7: List your skills </h6>
              The Skills Section is a great way to communicate details about
              yourself in a format that requires very few words and space.
              <br />
              <br />
              <h6>Step 10: Download or share your resume</h6>
              Once you edit your resume. Download a pdf file or share online
              links to your resumes on our free plan.
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </div>

      <Footer />
    </>
  );
};
export default HTW;
