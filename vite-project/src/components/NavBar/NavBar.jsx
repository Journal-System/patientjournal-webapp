import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import patientLogo from "../../assets/patientlogo.png";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import {
  NavbarContainer,
  NavItems,
  LogoText,
  StyledLink,
  UserName,
  StyledButton,
} from "./NavBarStyles";

export default function NavBar() {
  const [userEmail, setUserEmail] = useState(null);
  const [dropdown, setDropDowm] = useState(null);
  const [userRole, setUserRole] = useState(null);
  const open = Boolean(dropdown);

  useEffect(() => {
    const email = localStorage.getItem("userEmail");
    const role = localStorage.getItem("userRole");
    if (email) {
      setUserEmail(email);
      setUserRole(role);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("userEmail");
    localStorage.removeItem("userRole");
    setUserEmail("");
    window.location.href = "/Login";
  };

  const handleClick = (event) => {
    setDropDowm(event.currentTarget);
  };
  const handleClose = () => {
    setDropDowm(null);
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
            <div>
              <StyledLink>
                <StyledButton
                  id="basic-button"
                  aria-controls={open ? "basic-menu" : undefined}
                  aria-haspopup="true"
                  aria-expanded={open ? "true" : undefined}
                  onClick={handleClick}
                >
                  Dashboard
                </StyledButton>
                <Menu
                  id="basic-menu"
                  anchorEl={dropdown}
                  open={open}
                  onClose={handleClose}
                  MenuListProps={{
                    "aria-labelledby": "basic-button",
                  }}
                >
                  <MenuItem onClick={handleClose} component={Link} to="/">
                    Home
                  </MenuItem>
                  {userRole === "PATIENT" && (
                    <div>
                      <MenuItem onClick={handleClose}>My Profile</MenuItem>
                      <MenuItem
                        onClick={handleClose}
                        component={Link}
                        to="/Messages"
                      >
                        Messages
                      </MenuItem>
                    </div>
                  )}
                  {userRole === "STAFF" && (
                    <div>
                      <MenuItem onClick={handleClose}>
                        Create Patient Note
                      </MenuItem>
                      <MenuItem
                        onClick={handleClose}
                        component={Link}
                        to="/Messages"
                      >
                        Messages
                      </MenuItem>
                    </div>
                  )}
                  {userRole === "DOCTOR" && (
                    <div>
                      <MenuItem
                        onClick={handleClose}
                        component={Link}
                        to="/Patients"
                      >
                        Patient List
                      </MenuItem>
                      <MenuItem onClick={handleClose}>
                        Create Patient Note
                      </MenuItem>
                      <MenuItem
                        onClick={handleClose}
                        component={Link}
                        to="/Messages"
                      >
                        Messages
                      </MenuItem>
                    </div>
                  )}
                  <MenuItem
                    onClick={() => {
                      handleLogout();
                      handleClose();
                    }}
                  >
                    Logout
                  </MenuItem>
                </Menu>
              </StyledLink>
              <UserName>{userEmail}</UserName>
            </div>
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
