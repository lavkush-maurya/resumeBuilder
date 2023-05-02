import React, { useContext, useEffect} from "react";
import { PERSONALCONTEXT } from "../../context/resumeContext/personalContext";
import "bootstrap/dist/css/bootstrap.min.css";
import { Col, Form, FormGroup, Row } from "react-bootstrap";
import AccordionBody from "react-bootstrap/esm/AccordionBody";
import AccordionHeader from "react-bootstrap/esm/AccordionHeader";
import AccordionItem from "react-bootstrap/esm/AccordionItem";

const Personal = () => {

  const {inputPersonal, setInputPersonal} = useContext(PERSONALCONTEXT);

  // handle input change
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setInputPersonal({ ...inputPersonal, [name]: value });
  };

  const getBase64 = (file) => {
    return new Promise((resolve) => {
      let fileInfo;
      let baseURL = "";
      // Make new FileReader
      let reader = new FileReader();

      // Convert the file to base64 text
      reader.readAsDataURL(file);

      // on reader load somthing...
      reader.onload = () => {
        // Make a fileInfo Object
        console.log("Called", reader);
        baseURL = reader.result;
        console.log(baseURL);
        resolve(baseURL);
      };
      console.log(fileInfo);
    });
  };

  const handleImgUpload = (e) => {
    const img = e.target.files[0];
    getBase64(img)
      .then((result) => {
        setInputPersonal({ ...inputPersonal, [e.target.name]: result });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    console.log("inputPersonal Personal =>>>", inputPersonal);
  }, [inputPersonal]);

  return (
    <AccordionItem eventKey="0">
      <AccordionHeader>Personal Details</AccordionHeader>
      <AccordionBody>
        <Row className="mb-3">
          {[inputPersonal].map((x, i) => {
            return (
              <React.Fragment key={i}>
                <div className="box">
                  <Form.Group
                    className="mb-3"
                    style={{ display: "flex", flexWrap: "wrap" }}
                  >
                    <Form.Label>Add Your Professional Photo</Form.Label>
                    <Form.Control
                      type="file"
                      required
                      onChange={handleImgUpload}
                      name="photo"
                    />
                  </Form.Group>
                  <Form.Group
                    as={Col}
                    md="12"
                    style={{ display: "flex", flexWrap: "wrap" }}
                  >
                    <Form.Label>First Name</Form.Label>
                    <Form.Control
                      required
                      type="text"
                      name="firstName"
                      value={x.firstName}
                      onChange={(e) => handleInputChange(e, i)}
                      placeholder="First name"
                    />
                  </Form.Group>
                  <Form.Group
                    as={Col}
                    md="12"
                    style={{ display: "flex", flexWrap: "wrap" }}
                  >
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control
                      required
                      type="text"
                      name="lastName"
                      value={x.lastName}
                      onChange={(e) => handleInputChange(e, i)}
                      placeholder="Last name"
                    />
                  </Form.Group>
                  <Form.Group
                    as={Col}
                    md="12"
                    style={{ display: "flex", flexWrap: "wrap" }}
                  >
                    <Form.Label>Profesional Title</Form.Label>
                    <Form.Control
                      required
                      type="text"
                      name="profTitle"
                      value={x.profTitle}
                      onChange={(e) => handleInputChange(e, i)}
                      placeholder="like FullStack Developer"
                    />
                  </Form.Group>

                  <Form.Group
                    as={Col}
                    md="12"
                    style={{ display: "flex", flexWrap: "wrap" }}
                  >
                    <Form.Label>Phone</Form.Label>
                    <Form.Control
                      required
                      type="number"
                      name="phone"
                      value={x.phone}
                      onChange={(e) => handleInputChange(e, i)}
                      placeholder="Enter your phone number"
                    />
                  </Form.Group>

                  <FormGroup
                    as={Col}
                    md="12"
                    style={{ display: "flex", flexWrap: "wrap" }}
                  >
                    <Form.Label>City/State you live</Form.Label>
                    <Form.Control
                      as="textarea"
                      name="address"
                      value={x.address}
                      onChange={(e) => handleInputChange(e, i)}
                      placeholder="Example like Surat,Gujarat"
                      style={{ height: "2rem" }}
                    />
                  </FormGroup>
                </div>
              </React.Fragment>
            );
          })}
        </Row>
      </AccordionBody>
    </AccordionItem>
  );
};

export default Personal;
