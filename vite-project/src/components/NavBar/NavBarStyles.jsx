import { styled } from "@mui/system";
import { AppBar } from "@mui/material";
import { Link } from "react-router-dom";

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
  font-size: 1.5rem; // Example font size
  color: #333; // Example text color
  font-weight: 600; // Example font weight
  display: flex; // Use flex to center the content
  align-items: center; // Center vertically
  justify-content: center; // Center horizontally
  margin: 0 20px; // Add some margin on the sides
  white-space: nowrap; // Prevent the text from wrapping
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