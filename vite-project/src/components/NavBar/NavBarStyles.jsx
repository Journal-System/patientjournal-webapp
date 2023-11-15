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
  white-space: nowrap;
  position: absolute;
  padding: center;
  margin: center;
  width: 55%;
  justify-content: right;
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
  background-color: #5a8fbb;
  color: #fff;
  padding: 10px 20px;
  border-radius: 8px;
  font-weight: bold;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #5a8fbb;
  }
`;
