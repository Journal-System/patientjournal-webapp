import { styled } from "@mui/system";
import { AppBar, Button as MuiButton } from "@mui/material";

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

const Button = styled(MuiButton)`
  color: #ffffff;
  margin-left: 10px;
  padding: 8px 16px;
  text-transform: none; // Removes uppercase transformation for a more modern feel
  font-size: 0.875rem;
  border-radius: 4px; // Slightly rounded corners for a softer look
  &:first-of-type {
    margin-left: 0;
  }
`;

// Not being used
export const SecondaryButton = styled(Button)`
  color: #007bff; // Use the primary color for text
  background-color: transparent; // Transparent background for a minimalistic look
  border: 1px solid #007bff; // Outline with the primary color

  &:hover {
    background-color: rgba(0, 123, 255, 0.04); // Slight tint on hover for feedback
  }
`;

export const TertiaryButton = styled(Button)`
  color: #6c757d; // A muted color for less important actions
  background-color: transparent; // Transparent background for a minimalistic look

  &:hover {
    color: #5a6268; // A slightly darker shade for hover state
    background-color: rgba(108, 117, 125, 0.04); // Slight tint on hover for feedback
  }
`;
