import React from "react";
import patientLogo from "../../assets/patientlogo.png";
import { NavbarContainer, NavItems, TertiaryButton } from "./NavBarStyles";

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
        <div>
          <TertiaryButton variant="contained">Log In</TertiaryButton>
          <TertiaryButton variant="contained">Register</TertiaryButton>
        </div>
      </NavItems>
    </NavbarContainer>
  );
}
