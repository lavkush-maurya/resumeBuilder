import { useContext } from "react";
import { SOCIALCONTEXT } from "../../../context/resumeContext/socialContext";
const SocialDetails = () => {
  const { inputSocial } = useContext(SOCIALCONTEXT);

  return (
    <>
      <p>github:{inputSocial.github} </p>
      <p>linkedIn:{inputSocial.linkedIn} </p>
      <p>email:{inputSocial.email} </p>
      <p>instagram:{inputSocial.instagram} </p>
    </>
  );
};

export default SocialDetails;
