import React from "react";
import "./App.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "bootstrap/dist/css/bootstrap.min.css";
import About from "./about/about";
import { Route, Routes } from "react-router-dom";
import Home from "./home";
import Resumes from "./resumes/resumes";
import FAQ from "./faq/faq";
import HTW from "./how_to_write/how_to_write";
import Protected from "./components/Protected";
import { AuthContextProvider } from "./context/AuthContext";
import Signin from "./common/Signin";
import Header from "./components/header/header";
import PersonalContext from "./context/resumeContext/personalContext";
import SocialContext from "./context/resumeContext/socialContext";
import ProjectContext from "./context/resumeContext/projectContext";
import { SkillContext } from "./context/resumeContext/skillContext";
import { LanguageContext } from "./context/resumeContext/languageContext";
import { InterestContext } from "./context/resumeContext/interestContext";
import { EducationContext } from "./context/resumeContext/educationContext";
import WorkContext from "./context/resumeContext/workContext";
import ObjectiveContext from "./context/resumeContext/objectiveContext";

function App() {
  return (
    <PersonalContext>
      <SocialContext>
        <EducationContext>
          <ProjectContext>
            <SkillContext>
              <LanguageContext>
                <InterestContext>
                  <WorkContext>
                    <ObjectiveContext>
                      <div className="App">
                        <ToastContainer />
                        <AuthContextProvider>
                          <Header />
                          <Routes>
                            <Route path="/signin" element={<Signin />} />
                            <Route path="/" element={<Home />} />
                            <Route path="/about" element={<About />} />
                            <Route
                              path="/resume"
                              element={
                                <Protected>
                                  <Resumes />
                                </Protected>
                              }
                            />
                            <Route path="/how_to_write" element={<HTW />} />
                            <Route path="/FAQs" element={<FAQ />} />
                          </Routes>
                        </AuthContextProvider>
                      </div>
                    </ObjectiveContext>
                  </WorkContext>
                </InterestContext>
              </LanguageContext>
            </SkillContext>
          </ProjectContext>
        </EducationContext>
      </SocialContext>
    </PersonalContext>
  );
}

export default App;
