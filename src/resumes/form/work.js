import React, { useContext, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Col, Form, Row } from "react-bootstrap";
import AccordionBody from "react-bootstrap/esm/AccordionBody";
import AccordionHeader from "react-bootstrap/esm/AccordionHeader";
import AccordionItem from "react-bootstrap/esm/AccordionItem";
import { WORKCONTEXT } from "../../context/resumeContext/workContext";

const Work = () => {
  const { inputWork, handleInputChange, handleAddClick, handleRemoveClick } =
    useContext(WORKCONTEXT);

  useEffect(() => {
    console.log("inputWork Work =>>>", inputWork);
  }, [inputWork]);

  return (
    <AccordionItem eventKey="8">
      <AccordionHeader>Work Experience</AccordionHeader>
      <AccordionBody>
        <Row className="mb-3">
          {inputWork.map((x, i) => {
            return (
              <React.Fragment key={i}>
                <div className="box">
                  <Form.Group
                    as={Col}
                    md="6"
                    style={{ display: "flex", flexWrap: "wrap" }}
                  >
                    <Form.Label>Position</Form.Label>
                    <Form.Control
                      required
                      type="text"
                      name="position"
                      value={x.position}
                      onChange={(e) => handleInputChange(e, i)}
                      placeholder="Example Front-end Developer"
                    />
                  </Form.Group>
                  <Form.Group
                    as={Col}
                    md="6"
                    style={{ display: "flex", flexWrap: "wrap" }}
                  >
                    <Form.Label>Company Name</Form.Label>
                    <Form.Control
                      required
                      type="text"
                      name="compName"
                      value={x.compName}
                      onChange={(e) => handleInputChange(e, i)}
                      placeholder="Example Infosys, DarvinTech"
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
                      name="compStart"
                      value={x.compStart}
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
                      name="compEnd"
                      value={x.compEnd}
                      onChange={(e) => handleInputChange(e, i)}
                      htmlFor="endDate"
                    />
                  </Form.Group>
                  <Form.Group
                    as={Col}
                    md="12"
                    style={{ display: "flex", flexWrap: "wrap" }}
                  >
                    <Form.Label>Description</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Describe your role here"
                      name="description"
                      value={x.description}
                      onChange={(e) => handleInputChange(e, i)}
                      style={{ height: "8rem" }}
                    />

                    {inputWork.length !== 1 && (
                      <Button
                        className="my-2 mx-2"
                        onClick={() => handleRemoveClick(i)}
                        variant="outline-danger"
                      >
                        Delete
                      </Button>
                    )}
                    {inputWork.length - 1 === i && (
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
export default Work;
