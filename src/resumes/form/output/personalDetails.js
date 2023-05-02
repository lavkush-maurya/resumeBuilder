import { Avatar } from "@mui/material";
import { useContext } from "react";
import { PERSONALCONTEXT } from "../../../context/resumeContext/personalContext";

const PersonalDetails = () => {
    const { inputPersonal } = useContext(PERSONALCONTEXT);
    
    return (
        <>
        <Avatar sx={{width:"100px", height:"100px"}} src={inputPersonal.photo}/>
        <p>FirstName:{inputPersonal.firstName}</p>
        <p>LastName:{inputPersonal.lastName}</p>
        <p>profTitle:{inputPersonal.profTitle}</p>
        <p>Phone:{inputPersonal.phone}</p>
        <p>Address:{inputPersonal.address}</p>
        </>
    )
}
export default PersonalDetails;