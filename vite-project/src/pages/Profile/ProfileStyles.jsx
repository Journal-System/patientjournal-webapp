import { styled } from "@mui/system";
import { Box } from "@mui/material";

export const ProfileContainer = styled("div")`
  grid-area: main;
  width: 100vw;
  padding: 70px 60px 20px 60px; /* top right down left */
  background-color: #f8f9fa;
  color: #000000;
  text-align: center;
  height: 100%;
`;

export const ProfileWrapper = styled(Box)`
  justify-content: center;
  align-items: center;
  background-color: #ffffff;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  padding: 100px;
  margin-left: 50px;
  width: 100%;
`;
