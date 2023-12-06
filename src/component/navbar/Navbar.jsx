/* eslint-disable no-unused-vars */
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { FaHeart } from "react-icons/fa6";
import { Link, useNavigate } from "react-router-dom";
import "./style.css";
import { auth } from "../../firebase";
import { signOut } from "firebase/auth";

const Navbars = () => {
  const navigate = useNavigate();
  const user = auth.currentUser;

  const logout = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        console.log("Sign-out successful.");
        navigate("/");
      })
      .catch((error) => {
        // An error happened.
        console.log("An error happened.", error);
      });
  };

  const showFav = () => {
    console.log("object")
    navigate('/fav')
  };
  return (
    <Navbar expand="lg" className="bg-primary">
      <Container className="navbars">
        <Navbar.Brand
          className="pointer text-light"
          onClick={() => navigate("/")}
        >
          React-Bootstrap
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto navLinks">
            {/* -------- */}

            {/* ---------- */}
            {user ? (
              <>
                <Nav className="m-2 text-danger " onClick={showFav}>
                  <FaHeart />
                </Nav>
                <Nav className="m-2 text-danger" onClick={logout}>
                  Logout
                </Nav>
              </>
            ) : (
              <>
                <Nav
                  className=" pointer m-2 text-light"
                  onClick={() => navigate("/signin")}
                >
                  sign in
                </Nav>
                <Nav
                  className="pointer m-2 text-light"
                  onClick={() => navigate("/signup")}
                >
                  sign up
                </Nav>
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navbars;
