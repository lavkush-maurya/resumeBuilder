import React, { useContext, useEffect } from "react";
import { Button, Col, Form, FormControl, Row } from "react-bootstrap";
import AccordionBody from "react-bootstrap/esm/AccordionBody";
import AccordionHeader from "react-bootstrap/esm/AccordionHeader";
import AccordionItem from "react-bootstrap/esm/AccordionItem";
import { LANGUAGECONTEXT } from "../../context/resumeContext/languageContext";


const Language = () => {
  const {inputLanguage, handleInputChange, handleAddClick, handleRemoveClick} = useContext(LANGUAGECONTEXT);


  useEffect(() => {
    console.log("inputLanguage Language =>>>", inputLanguage);
  }, [inputLanguage]);  
  
  
  return (
    <AccordionItem eventKey="6">
      <AccordionHeader>Language</AccordionHeader>
      <AccordionBody>
        <Row className="mb-3">
          <Form.Group as={Row} md="12" style={{ display: "flex" }}>
            {inputLanguage.map((x, i) => {
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
                        name="language"
                        required
                        placeholder="Example Html, CSS"
                        value={x.language}
                        onChange={(e) => handleInputChange(e, i)}
                      />

                      {inputLanguage.length !== 1 && (
                        <Button
                          className="my-2 mx-2"
                          onClick={() => handleRemoveClick(i)}
                          variant="outline-danger"
                        >
                          Delete
                        </Button>
                      )}
                      {inputLanguage.length - 1 === i && (
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
export default Language;
