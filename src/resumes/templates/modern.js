import React, { useContext, useRef } from "react";
import { Fragment } from "react";
import { Avatar, Button } from "@mui/material";
import ReactToPrint from "react-to-print";
import { EDUCATIONCONTEXT } from "../../context/resumeContext/educationContext";
import { OBJECTIVECONTEXT } from "../../context/resumeContext/objectiveContext";
import { PERSONALCONTEXT } from "../../context/resumeContext/personalContext";
import { PROJECTCONTEXT } from "../../context/resumeContext/projectContext";
import { SKILLCONTEXT } from "../../context/resumeContext/skillContext";
import { SOCIALCONTEXT } from "../../context/resumeContext/socialContext";
import { WORKCONTEXT } from "../../context/resumeContext/workContext";
import styles from "./modern.module.css";


const Modern = () => {
  const { inputPersonal } = useContext(PERSONALCONTEXT);
  const { inputSocial } = useContext(SOCIALCONTEXT);
  const { inputEducation } = useContext(EDUCATIONCONTEXT);
  const { inputProject } = useContext(PROJECTCONTEXT);
  const { inputSkill } = useContext(SKILLCONTEXT);
  const { inputWork } = useContext(WORKCONTEXT);
  const { inputObjective } = useContext(OBJECTIVECONTEXT);
  const ComponentRef = useRef();

  return (
    <Fragment>
      <ReactToPrint
        trigger={() => {
          return <Button>Download</Button>;
        }}
        content={() => ComponentRef.current}
        documentTitle="Resume"
        pageStyle="print"
      />
      <div>
        <div
          ref={ComponentRef}
          className={`${styles.body} ${styles.font1}`}
          style={{ width: "auto", height: "29.7cm", display: "flex" }}
        >
          <div className="col-4" id={styles.col1} style={{ height: "100%" }}>
            <div style={{ margin: "22% 0% 0% 30%" }}>
              <Avatar
                sx={{ width: "240px", height: "240px", borderRadius: 0 }}
                src={inputPersonal.photo}
                className="mx-3"
                alt="Picture"
              />
            </div>
            <div
              className="my-3 timeline-card timeline-card-primary card shadow-sm "
              style={{ margin: "0% 2.5%", background: "none", border: "none" }}
            >
              <h6 className="h3" style={{ alignSelf: "center", fontVariantCaps:"all-small-caps"  }}>
                About Me
              </h6>
              <span className="p-2" style={{textAlign:"justify"}}>{inputObjective.objective}</span>
            </div>
            <div
            className="mx-2 card shadow-sm"
              style={{
                justifyContent: "flex-end",
                padding: "20px",
                textAlignLast: "center",
                background: "none", border: "none"
              }}
            >
              <h6>{inputPersonal.phone}</h6>
              <h6>{inputPersonal.address}</h6>
              <div style={{display:"flex",justifyContent: "space-around",}}>
                <div>
                  <a href={`mailto:${inputSocial.email}`}>
                    <svg
                      fill="#EA4335"
                      role="img"
                      viewBox="0 0 24 24"
                      height="20px"
                      width="20px"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <title>Gmail</title>
                      <path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L5.455 4.64 12 9.548l6.545-4.91 1.528-1.145C21.69 2.28 24 3.434 24 5.457z" />
                    </svg>
                  </a>
                </div>
                <div>
                  <a href={`https://${inputSocial.github}`}>
                    <svg
                      role="img"
                      viewBox="0 0 24 24"
                      height="20px"
                      width="20px"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <title>GitHub</title>
                      <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                    </svg>
                  </a>
                </div>
                <div>
                  <a href={`https://${inputSocial.linkedIn}`}>
                    <svg
                      fill="#0A66C2"
                      role="img"
                      height="20px"
                      width="20px"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <title>LinkedIn</title>
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h60.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                  </a>
                </div>
                <div>
                  <a href={`https://${inputSocial.instagram}`}>
                    <svg
                      fill="#E4405F"
                      role="img"
                      height="20px"
                      width="20px"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <title>Instagram</title>
                      <path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z" />
                    </svg>
                  </a>
                </div>

              </div>
            </div>

            <div
              className="my-3 timeline-card timeline-card-primary card shadow-sm "
              style={{ margin: "0% 2.5%", background: "none", border: "none" }}
            >
              <div className="timeline">
              <h6 className="h3" style={{ textAlignLast: "center", fontVariantCaps:"all-small-caps" }}>
                Projects
              </h6>
                  {inputProject.map((input, index) => (
                    <div
                      className="my-2 timeline-card timeline-card-primary card shadow-sm"
                      style={{ margin: "0% 2.5%", background: "none", border: "none" }}
                      key={index}
                    >
                      <div className="card-body">
                        <div className="h5 mb-1">{input.projectName}</div>
                        <div className="text-muted text-small mb-2">
                          {input.projStart} / {input.projEnd}
                        </div>
                        <div className="foralign">{input.description}</div>
                      </div>
                    </div>
                  ))}
                </div>
            </div>
           
          </div>

          <div className="col-8" style={{ height: "100%" }}>
          <hr style={{width:"%",marginLeft:"17%",marginTop:"18%"}}/>
            <div style={{ display: "flex", marginTop: "10%",justifyContent:"center" }}>
              <div>
                <h2 style={{fontFamily:"system-ui"}}>{inputPersonal.firstName}</h2>
              </div>
              &nbsp;
              <div>
                <h2 style={{fontFamily:"system-ui"}}>{inputPersonal.lastName}</h2>
              </div>
            </div>
            <div style={{textAlign:"center"}}>
                <h2 style={{fontFamily:"system-ui"}}>{inputPersonal.profTitle}</h2>
            </div>
            <hr style={{width:"%",marginLeft:"17%",marginTop:"5%"}}/>

            <div className="education-section px-3 px-lg-4" style={{marginTop:"10%"}}>
                <h2 className="h3">Education</h2>
                <div className="timeline">
                  {inputEducation.map((input, index) => (
                    <div
                    style={{background:"none",border:"1px"}}
                      className="my-2 timeline-card timeline-card-primary card shadow-sm"
                      key={index}
                    >
                      <div className="card-body">
                        <div className="h5 mb-1">
                          {input.studyProgram}
                          <span className="text-muted h6">
                            {" "}
                            at {input.collegeName}
                          </span>
                        </div>
                        <div className="text-muted text-small mb-2">
                          {input.clgStart} / {input.clgEnd}
                        </div>
                        <div>{input.percentage}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="work-experience-section px-3 px-lg-4">
                <h2 className="h3">Work Experience</h2>
                <div className="timeline">
                  {inputWork.map((input, index) => (
                    <div
                    style={{background:"none",border:"1px"}}
                      className="my-2 timeline-card timeline-card-primary card shadow-sm"
                      key={index}
                    >
                      <div className="card-body">
                        <div className="h5 mb-1">
                          {input.position}
                          <span className="text-muted h6">
                            {" "}
                            at {input.compName}
                          </span>
                        </div>
                        <div className="text-muted text-small mb-2">
                          {input.compStart} / {input.compEnd}
                        </div>
                        <div className="Foralign">{input.description}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="px-3 px-lg-4">
                <h2 className="h3">Skills</h2>
                <div
                  style={{
                    display: "flex",
                    flexWrap: "wrap",
                    flexDirection: "row",
                  }}
                >
                  {inputSkill.map((input, index) => (
                    <Button
                      key={index}
                      variant="outlined"
                      type="Button"
                      className="btn btn-outline-secondary btn-sm m-1"
                    >
                      {input.skill}
                    </Button>
                  ))}
                </div>
              </div>
             
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Modern;
