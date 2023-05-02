import React, { useContext, useEffect } from "react";
import { PROJECTCONTEXT } from "../../context/resumeContext/projectContext";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Col, Form, Row } from "react-bootstrap";
import AccordionBody from "react-bootstrap/esm/AccordionBody";
import AccordionHeader from "react-bootstrap/esm/AccordionHeader";
import AccordionItem from "react-bootstrap/esm/AccordionItem";

const Project = () => {
  const { inputProject, handleInputChange, handleAddClick, handleRemoveClick  } = useContext(PROJECTCONTEXT);

  useEffect(() => {
    console.log("inputProject Project =>>>", inputProject);
  }, [inputProject]);

  return (
    <AccordionItem eventKey="4">
      <AccordionHeader>Project</AccordionHeader>
      <AccordionBody>
        <Row className="mb-3">
          {inputProject.map((x, i) => {
            return (
              <React.Fragment key={i}>
                <div className="box">
                  <Form.Group
                    as={Col}
                    md="12"
                    style={{ display: "flex", flexWrap: "wrap" }}
                  >
                    <Form.Label>Project Name</Form.Label>
                    <Form.Control
                      required
                      type="text"
                      name="projectName"
                      value={x.projectName}
                      onChange={(e) => handleInputChange(e, i)}
                      placeholder="Project Title"
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
                      name="projStart"
                      value={x.projStart}
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
                      name="projEnd"
                      value={x.projEnd}
                      onChange={(e) => handleInputChange(e, i)}
                      htmlFor="endDate"
                    />
                  </Form.Group>

                  <Form.Group
                    as={Col}
                    md="12"
                    style={{ display: "flex", flexWrap: "wrap" }}
                  >
                    <Form.Label>Project Description</Form.Label>
                    <Form.Control
                      required
                      as="textarea"
                      name="description"
                      value={x.description}
                      onChange={(e) => handleInputChange(e, i)}
                      placeholder="Detail about your project"
                      style={{ height: "8rem" }}
                    />
                    {inputProject.length !== 1 && (
                        <Button
                          className="my-2 mx-2"
                          onClick={() => handleRemoveClick(i)}
                          variant="outline-danger"
                        >
                          Delete
                        </Button>
                      )}
                      {inputProject.length - 1 === i && (
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

export default Project;
