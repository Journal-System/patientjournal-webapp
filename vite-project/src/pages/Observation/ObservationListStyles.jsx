import { styled } from "@mui/system";
import { Box } from "@mui/material";

export const ObservationContainer = styled("div")`
  grid-area: main;
  width: 100vw;
  padding: 80px 60px 50px 60px; /* top right down left */
  background-color: #f8f9fa;
  color: #000000;
  justify-content: center;
  align-items: center;
  text-align: center;
  height: 100%;
`;

export const ObservationWrapper = styled(Box)`
  border: 2px solid #e0e0e0;
  margin: auto;
  border-radius: 8px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  padding: 2rem;
  background-color: #ffffff;
  width: 100%;
  height: 600px;
  max-width: 600px;
`;

export const SelectedUser = styled("div")`
  font-family: "Arial, sans-serif";
  font-size: 16px;
  font-weight: bold;
  color: #333;
  background-color: #f7f7f7;
  padding: 8px;
  border-radius: 4px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  text-align: center;
  text-transform: capitalize;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: lightgreen;
  }
`;