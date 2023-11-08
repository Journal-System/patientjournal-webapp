import { styled } from "@mui/system";
import { AppBar, Button as MuiButton } from "@mui/material";

export const NavbarContainer = styled(AppBar)`
  grid-area: header;
  position: static;
  background-color: #9C9F84;
  color: #ffffff;
  padding: 0 20px;
`;

export const NavItems = styled("div")`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Button = styled(MuiButton)`
  color: #ffffff;
  margin-left: 10px;
  &:first-of-type {
    margin-left: 0;
  }
`;

export const PrimaryButton = styled(Button)`
  background-color: #4CAF50;
  &:hover {
    background-color: #357a38;
  }
`;