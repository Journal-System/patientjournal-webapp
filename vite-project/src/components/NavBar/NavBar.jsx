import React from "react";
import patientLogo from "../../assets/patientlogo.png";
import {
  NavbarContainer,
  NavItems,
  TertiaryButton,
  LogoText,
  SecondaryButton
} from "./NavBarStyles";

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
          <SecondaryButton variant="contained">Log In</SecondaryButton>
          <SecondaryButton variant="contained">Register</SecondaryButton>
        </div>
      </NavItems>
    </NavbarContainer>
  );
}
