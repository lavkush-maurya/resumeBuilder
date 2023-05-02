import { Box, TextField, } from "@mui/material";
import {Button} from "@mui/material";
import "bootstrap/dist/css/bootstrap.min.css";
// import { Button, Col, Form, Row } from "react-bootstrap";
import Footer from "../components/footer/footer";
import "./faq.css";

const FAQs = ({ setMessage, setEmail, handleAction }) => {
  // const handleSubmit = () => {
  //   alert("your data is submitted");
  // };
  return (
    <>
      <div className="container faq">
        {/* <Row className="mb-3">
          <Form.Group
            as={Col}
            md="12"
            style={{ display: "flex", flexWrap: "wrap" }}
          >
            <h2> How can we help you ?</h2>
          </Form.Group>
          <Form.Group
            as={Col}
            md="12"
            style={{ display: "flex", flexWrap: "wrap" }}
          >
            <Form.Label>Email</Form.Label>
            <Form.Control required type="text" placeholder="Enter Your Email" />
          </Form.Group>

          <Form.Group
            as={Col}
            md="12"
            style={{ display: "flex", flexWrap: "wrap" }}
          >
            <Form.Label>Description</Form.Label>
            <Form.Control
              required
              as="textarea"
              placeholder="Describe Your Query Here...."
              style={{ height: "8rem" }}
            />
          </Form.Group>
          <Form.Group
            as={Col}
            md="12"
            style={{ display: "flex", flexWrap: "wrap" }}
          >
            <Button
              type="submit"
              onClick={handleSubmit}
              className="my-2 mx-2"
              variant="outline-success"
            >
              Submit
            </Button>
          </Form.Group>
        </Row> */}
        <Box
                    component="form"
                    sx={{
                        '& > :not(style)': { m: 1, width: '25ch' },
                    }}
                    Validate
                    autoComplete="off"
                    className='flex'
                >
                    <TextField
                        id="email"
                        required
                        label="Enter the Email"
                        variant="outlined"
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <TextField
                        id="messege"
                        required
                        label="Enter the message"
                        variant="outlined"
                        onChange={(e) => setMessage(e.target.value)}
                    />
                </Box>

                <Button handleAction={handleAction} >Submit</Button>
      </div>
      <Footer />
    </>
  );
};
export default FAQs;
