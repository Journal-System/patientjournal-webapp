import { styled } from "@mui/system";
import { AppBar } from "@mui/material";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";

export const NavbarContainer = styled(AppBar)`
  grid-area: header;
  position: static;
  background-color: #ffffff;
  color: #ffffff;
  padding: 0 20px;
`;

export const NavItems = styled("div")`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const LogoText = styled("div")`
  font-size: 1.5rem; 
  color: #333; 
  font-weight: 600; 
  display: flex; 
  align-items: center; 
  justify-content: center; 
  margin: 0 20px; 
  white-space: nowrap;
`;

export const StyledLink = styled(Link)`
  margin: 8px;
  color: #000000;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
    color: #000000;
  }
`;

export const UserName = styled(Link)`
  margin: 8px;
  color: #000000;

  &:hover {
    color: #000000;
  }
`;

export const StyledButton = styled(Button)`
  background-color: #5A8FBB;
  color: #fff; /* White text color */
  padding: 10px 20px; /* Padding for better spacing */
  border-radius: 8px; /* Rounded corners */
  font-weight: bold;
  transition: background-color 0.3s ease; /* Smooth transition effect */

  &:hover {
    background-color: #5A8FBB; 
  }
`;