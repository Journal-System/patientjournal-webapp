import { styled } from "@mui/system";
import { Box } from "@mui/material";

export const PatientsContainer = styled("div")`
  grid-area: main;
  width: 100vw;
  padding: 70px 60px 20px 60px; /* top right down left*/
  background-color: #f8f9fa;
  color: #000000;
  text-align: center;
  height: 100%;
`;

export const ContainerWrapper = styled(Box)`
  justify-content: center;
  align-items: center;
  background-color: #ffffff; /* Background color for the wrapper */
  border: 1px solid #e0e0e0; /* Example border styling */
  border-radius: 8px; /* Rounded corners */
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1); /* Box shadow */
  padding: 20px; /* Padding for the wrapper */
`;

export const MyInput = styled("input")`
  background-image: url('/css/searchicon.png'); /* Add a search icon to input */
  background-position: 10px 12px; /* Position the search icon */
  background-repeat: no-repeat; /* Do not repeat the icon image */
  background-color: #ffffff;
  color: #000000;
  ${'' /* width: 100%; */}
  font-size: 16px; /* Increase font-size */
  padding: 12px 50px 12px 20px; /* Add some padding */
  border: 2px solid #ddd; /* Add a grey border */
  margin-bottom: 12px; /* Add some space below the input */
`;

export const MyTable = styled("table")`
  border-collapse: collapse; /* Collapse borders */
  width: 100%; /* Full-width */
  border: 1px solid #ddd; /* Add a grey border */
  font-size: 18px; /* Increase font-size */
`;

export const TableCell = styled("td")`
  text-align: center; /* Left-align text */
  padding: 12px; /* Add padding */
`;

export const TableRow = styled("tr")`
  border-bottom: 1px solid #ddd; /* Add a bottom border to all table rows */
  &:hover {
    background-color: #f1f1f1; /* Add a grey background color on hover */
  }
`;

export const TableHeader = styled(TableRow)`
  background-color: #f1f1f1; /* Add a grey background color to the table header */
`;