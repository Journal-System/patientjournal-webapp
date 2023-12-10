import { styled } from "@mui/system";
import { Box } from "@mui/material";

export const PatientsContainer = styled("div")`
  grid-area: main;
  width: 100vw;
  padding: 70px 60px 20px 60px; /* top right down left */
  background-color: #f8f9fa;
  color: #000000;
  text-align: center;
  height: 100%;
`;

export const ContainerWrapper = styled(Box)`
  justify-content: center;
  align-items: center;
  background-color: #ffffff;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  padding: 20px;
`;

export const MyInput = styled("input")`
  background-image: url("/css/searchicon.png");
  background-position: 10px 12px;
  background-repeat: no-repeat;
  background-color: #ffffff;
  color: #000000;
  ${"" /* width: 100%; */}
  font-size: 16px;
  padding: 12px 50px 12px 20px;
  border: 2px solid #ddd;
  margin-bottom: 12px;
`;

export const MyTable = styled("table")`
  border-collapse: collapse;
  width: 100%;
  border: 1px solid #ddd;
  font-size: 18px;
`;

export const TableCell = styled("td")`
  text-align: center;
  padding: 12px;
`;

export const TableRow = styled("tr")`
  border-bottom: 1px solid #ddd;
  &:hover {
    background-color: #f1f1f1;
  }
`;

export const TableHeader = styled(TableRow)`
  background-color: #f1f1f1;
`;