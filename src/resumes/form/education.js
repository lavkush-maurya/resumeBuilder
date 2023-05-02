import React, { useContext, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Col, Form, Row } from "react-bootstrap";
import AccordionBody from "react-bootstrap/esm/AccordionBody";
import AccordionHeader from "react-bootstrap/esm/AccordionHeader";
import AccordionItem from "react-bootstrap/esm/AccordionItem";
import { EDUCATIONCONTEXT } from "../../context/resumeContext/educationContext";

const Education = () => {
    const { inputEducation, handleInputChange, handleAddClick, handleRemoveClick  } = useContext(EDUCATIONCONTEXT);
    
  useEffect(() => {
    console.log("inputEducation Education =>>>", inputEducation);
  }, [inputEducation]);

  return (
    <AccordionItem eventKey="3">
      <AccordionHeader>Education</AccordionHeader>
      <AccordionBody>
        <Row className="mb-3">
          {inputEducation.map((x, i) => {
            return (
              <React.Fragment key={i}>
                <div className="box">
                  <Form.Group
                    as={Col}
                    md="12"
                    style={{ display: "flex", flexWrap: "wrap" }}
                  >
                    <Form.Label>Study Program</Form.Label>
                    <Form.Control
                      required
                      type="text"
                      name="studyProgram"
                      value={x.studyProgram}
                      onChange={(e) => handleInputChange(e, i)}
                      placeholder="Example MCA"
                    />
                  </Form.Group>
                  <Form.Group
                    as={Col}
                    md="12"
                    style={{ display: "flex", flexWrap: "wrap" }}
                  >
                    <Form.Label>College Name</Form.Label>
                    <Form.Control
                      required
                      type="text"
                      name="collegeName"
                      value={x.collegeName}
                      onChange={(e) => handleInputChange(e, i)}
                      placeholder="Place of Education / Institution"
                    />
                  </Form.Group>
                  <Form.Group
                    as={Col}
                    md="6"
                    style={{ display: "flex", flexWrap: "wrap" }}
                  >
                    <Form.Label style={{ margin: "0.4rem" }}>
                      Start date:
                    </Form.Label>
                    <input
                      style={{ margin: "0.4rem" }}
                      type="month"
                      id="start"
                      name="clgStart"
                      value={x.clgStart}
                      onChange={(e) => handleInputChange(e, i)}
                      htmlFor="startDate"
                    />
                  </Form.Group>
                  <Form.Group
                    as={Col}
                    md="6"
                    style={{ display: "flex", flexWrap: "wrap" }}
                  >
                    <Form.Label style={{ margin: "0.4rem" }}>
                      End date:
                    </Form.Label>
                    <input
                      style={{ margin: "0.4rem" }}
                      type="month"
                      id="end"
                      name="clgEnd"
                      value={x.clgEnd}
                      onChange={(e) => handleInputChange(e, i)}
                      htmlFor="endDate"
                    />
                  </Form.Group>
                  <Form.Group
                    as={Col}
                    md="12"
                    style={{ display: "flex", flexWrap: "wrap" }}
                  >
                    <Form.Label>Percentage</Form.Label>
                    <Form.Control
                      required
                      type="text"
                      name="percentage"
                      value={x.percentage}
                      onChange={(e) => handleInputChange(e, i)}
                      placeholder="Percentage or CGPA"
                    />
                    {inputEducation.length !== 1 && (
                        <Button
                          className="my-2 mx-2"
                          onClick={() => handleRemoveClick(i)}
                          variant="outline-danger"
                        >
                          Delete
                        </Button>
                      )}
                      {inputEducation.length - 1 === i && (
                        <Button
                          className="my-2 mx-2"
                          onClick={handleAddClick}
                          variant="outline-success"
                        >
                          Add
                        </Button>
                      )}
                  </Form.Group>
                </div>
              </React.Fragment>
            );
          })}
        </Row>
      </AccordionBody>
    </AccordionItem>
  );
};
export default Education;
