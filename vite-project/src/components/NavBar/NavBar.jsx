import React from "react";
import { Link } from "react-router-dom";
import patientLogo from "../../assets/patientlogo.png";
import {
  NavbarContainer,
  NavItems,
  LogoText,
  StyledLink,
} from "./NavbarStyles";

export default function Navbar() {
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
          <StyledLink variant="contained" component={Link} to="/Login">
            Log In
          </StyledLink>
          <StyledLink variant="contained" component={Link} to="/Register">
            Register
          </StyledLink>
        </div>
      </NavItems>
    </NavbarContainer>
  );
}
