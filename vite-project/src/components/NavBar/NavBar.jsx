import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import patientLogo from "../../assets/patientlogo.png";
import {
  NavbarContainer,
  NavItems,
  LogoText,
  StyledLink,
} from "./NavbarStyles";

export default function Navbar() {
  const [userEmail, setUserEmail] = useState(null);

  useEffect(() => {
    // Check for user email in localStorage
    const email = localStorage.getItem('userEmail');
    if (email) {
      setUserEmail(email);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("userEmail");
    setUserEmail("");
    window.location.href = "/Login";
  };

  return (
    <NavbarContainer>
      <NavItems>
        <div>
          <img
            src={patientLogo}
            alt="Patient Journal Logo"
            style={{ height: "60px" }}
          />
        </div>
        <LogoText>Patient Journal</LogoText>
        <div>
          {userEmail ? (
            <>
              <StyledLink>{userEmail}</StyledLink>
              <StyledLink variant="contained" onClick={handleLogout}>
              Log Out
              </StyledLink>
            </>
          ) : (
            <>
              <StyledLink variant="contained" component={Link} to="/Login">
                Log In
              </StyledLink>
              <StyledLink variant="contained" component={Link} to="/Register">
                Register
              </StyledLink>
            </>
          )}
        </div>
      </NavItems>
    </NavbarContainer>
  );
}