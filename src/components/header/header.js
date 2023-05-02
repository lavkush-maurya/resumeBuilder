import { Link } from "react-router-dom";
import { UserAuth } from "../../context/AuthContext";
import Button from "@mui/material/Button";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { green, red } from "@mui/material/colors";
import "./header.css";
import AccountPopover from "./AccountPopover";

const Header = () => {
  //new one
  const { user, logOut } = UserAuth();

  const handleSignOut = async () => {
    try {
      await logOut();
    } catch (error) {
      console.log(error);
    }
  };

  const theme = createTheme({
    palette: {
      primary: {
        main: red[500],
      },
      secondary: {
        main: green[500],
      },
    },
  });

  return (
    <header className="p-3 text-bg-dark">
      <div className="container-fluid m-0">
        <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
          <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0" style={{alignItems:"center"}}>
            <li>
              
              <Link to="/" className="nav-link px-2 text-danger">
                Home
              </Link>
            </li>
            <li>
              <Link to="/resume" className="nav-link px-2 text-white">
                Resumes
              </Link>
            </li>
            <li>
              <Link to="/how_to_write" className="nav-link px-2 text-white">
                How to write ?
              </Link>
            </li>
            <li>
              <Link to="/FAQs" className="nav-link px-2 text-white">
                FAQs
              </Link>
            </li>
            <li>
              <Link to="/about" className="nav-link px-2 text-white">
                About
              </Link>
            </li>
          </ul>
          <ThemeProvider theme={theme}>
            {user?.displayName ? (
              <>
                <p id="pp1">Welcome, {user?.displayName}&nbsp;&nbsp;</p>
                <AccountPopover />
                <Button
                  style={{ marginLeft: "30px" }}
                  variant="contained"
                  onClick={handleSignOut}
                >
                  Logout
                </Button>
              </>
            ) : (
              <Button
                style={{ marginLeft: "30px" }}
                variant="contained"
                className="px-2 text-white"
                color="secondary"
              >
                <Link to="/signin">Sign in</Link>
              </Button>
            )}
          </ThemeProvider>
        </div>
      </div>
    </header>
  );
};
export default Header;
