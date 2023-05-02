import React, { useContext, useEffect } from "react";
import { Button, Col, Form, FormControl, Row } from "react-bootstrap";
import AccordionBody from "react-bootstrap/esm/AccordionBody";
import AccordionHeader from "react-bootstrap/esm/AccordionHeader";
import AccordionItem from "react-bootstrap/esm/AccordionItem";
import { INTERESTCONTEXT } from "../../context/resumeContext/interestContext";



const Interest = () => {
  const {inputInterest, handleInputChange, handleAddClick, handleRemoveClick} = useContext(INTERESTCONTEXT);


  useEffect(() => {
    console.log("inputInterest Interest =>>>", inputInterest);
  }, [inputInterest]);  
  
  
  return (
    <AccordionItem eventKey="7">
      <AccordionHeader>Interest</AccordionHeader>
      <AccordionBody>
        <Row className="mb-3">
          <Form.Group as={Row} md="12" style={{ display: "flex" }}>
            {inputInterest.map((x, i) => {
              return (
                <React.Fragment key={i}>
                  <div className="box">
                    <Form.Group
                      as={Col}
                      md="6"
                      className="p-2"
                      style={{ display: "flex", flexWrap: "wrap" }}
                    >
                      <FormControl
                        name="interest"
                        required
                        placeholder="Example Html, CSS"
                        value={x.interest}
                        onChange={(e) => handleInputChange(e, i)}
                      />

                      {inputInterest.length !== 1 && (
                        <Button
                          className="my-2 mx-2"
                          onClick={() => handleRemoveClick(i)}
                          variant="outline-danger"
                        >
                          Delete
                        </Button>
                      )}
                      {inputInterest.length - 1 === i && (
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
          </Form.Group>
        </Row>
      </AccordionBody>
    </AccordionItem>
  );
};
export default Interest;
