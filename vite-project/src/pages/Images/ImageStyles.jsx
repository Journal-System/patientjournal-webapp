import { styled } from "@mui/system";
import { Box } from "@mui/material";

export const ImagesMainContainer = styled("div")`
  grid-area: main;
  width: 100vw;
  padding: 15px 60px 50px 60px; /* top right down left */
  background-color: #f8f9fa;
  color: #000000;
  justify-content: center;
  align-items: center;
  text-align: center;
  height: 100%;
`;

export const CanvasContainer = styled("div")`
maxWidth: 100%;
width: 'auto';
maxHeight: 100%;
height: 'auto';
`;
