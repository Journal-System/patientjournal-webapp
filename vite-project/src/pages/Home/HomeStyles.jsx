import { styled } from "@mui/system";
import { Box, Typography } from "@mui/material";

export const HomeContainer = styled("div")`
  grid-area: main;
  width: 100vw;
  padding: 65px 60px 20px 60px; /* top right down left*/
  background-color: #f8f9fa;
  color: #000000;
  text-align: center;
  height: 100%;
`;

export const HomeContainerWrapper = styled(Box)`
  display: flex; // Use flexbox for alignment
  justify-content: center; // Center children horizontally
  align-items: center; // Center children vertically
  background-color: #ffffff;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  margin: auto; // Centers the wrapper in the parent
  width: calc(100% - 40px); // Adjust width based on padding
  max-width: 960px; // Maximum size of the wrapper
`;

export const HeadingStyle = styled(Typography)`
  color: #333;
  margin-bottom: 1rem;
  font-size: 2rem;
  font-weight: 600;
  text-align: center; /* Center the heading text */
`;

export const DescriptionStyle = styled("p")`
  color: #555;
  margin-bottom: 2rem;
  font-size: 1rem;
  line-height: 1.6;
  text-align: left; /* Align the text to the left */
  max-width: 800px; /* Set a max-width for better readability on larger screens */
  margin-left: auto; /* These two lines center the paragraph */
  margin-right: auto; /* in the container if it's not full width */
`;
