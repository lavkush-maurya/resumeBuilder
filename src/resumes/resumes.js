import React, { useState } from "react";
import "./resumes.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Accordion, Col, Form, Row } from "react-bootstrap";
import Footer from "../components/footer/footer";
import Personal from "./form/personal";
import Social from "./form/social";
import Education from "./form/education";
import Project from "./form/project";
import Skill from "./form/skill";
import Language from "./form/language";
import Interest from "./form/interest";
import Work from "./form/work";
import Objective from "./form/objective";
import Simple from "./templates/simple";
import Modern from "./templates/modern";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import Classic from "./templates/classic";

const Resumes = () => {
  const [selectedComponent, setSelectedComponent] = useState(null);
  const handleComponentChange = (event) => {
    setSelectedComponent(event.target.value);
  };

  return (
    <>
      <div className="container" style={{marginBottom:"8rem"}}>
        <Row>
          <Col md="5">
            <div className="container p-0">
              <Form>
                <Accordion defaultActiveKey={["0"]}>
                  <Personal />
                  <Social />
                  <Education />
                  <Project />
                  <Skill />
                  <Language />
                  <Interest />
                  <Work />
                  <Objective />
                </Accordion>
              </Form>
            </div>
          </Col>
          <Col md="7">
            <div className="container p-0">
              <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
                <InputLabel id="demo-simple-select-standard-label">
                  Templates
                </InputLabel>
                <Select
                  labelId="demo-simple-select-standard-label"
                  id="demo-simple-select-standard"
                  onChange={handleComponentChange}
                  label="Templates"
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value="component1">Simple</MenuItem>
                  <MenuItem value="component2">Modern</MenuItem>
                  <MenuItem value="component3">Classic</MenuItem>
                </Select>
              </FormControl>
              {selectedComponent === "component1" && <Simple />}
              {selectedComponent === "component2" && <Modern />}
              {selectedComponent === "component3" && <Classic />}
            </div>
          </Col>
        </Row>
      </div>
      <Footer/>
    </>
  );
};

export default Resumes;
