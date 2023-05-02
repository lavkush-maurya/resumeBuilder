import React, { useEffect } from "react";
import { GoogleButton } from "react-google-button";
import { UserAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { Container } from "@mui/system";
import "./Form.css";

const Signin = () => {
  const { googleSignIn, user } = UserAuth();
  const navigate = useNavigate();

  const handleGoogleSignIn = async () => {
    try {
      await googleSignIn();
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (user != null) {
      navigate("/resume");
    }
  });
  // , [user]);

  return (
    <Container sx={{ border: "1px solid lightblue", padding: "" }}>
      <div style={{ textAlign: "-webkit-center" }}>
        <h1 className="text-3xl font-bold py-8">Sign in with Google</h1>
        <div className="max-w-[240px] m-auto py-4">
          <GoogleButton onClick={handleGoogleSignIn} />
        </div>
      </div>
    </Container>
  );
};

export default Signin;
