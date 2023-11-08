import React from "react";
import patientLogo from "../../assets/patientlogo.png";
import { NavbarContainer, PrimaryButton, NavItems } from "./NavbarStyles";
import { margin } from "@mui/system";

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
          <PrimaryButton variant="contained">Log In</PrimaryButton>
          <PrimaryButton variant="contained">Register</PrimaryButton>
        </div>
      </NavItems>
    </NavbarContainer>
  );
}
