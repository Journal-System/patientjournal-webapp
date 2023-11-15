import { styled } from "@mui/system";

export const MessageContainer = styled("div")`
  grid-area: main;
  width: 100vw;
  padding: 70px 60px 20px 60px; /* top right down left */
  background-color: #f8f9fa;
  color: #000000;
  text-align: center;
  height: 100%;
`;

export const DoctorWrapper = styled("div")`
  justify-content: center;
  align-items: center;
  background-color: #ffffff;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  margin-left: 150px;
  width: 35%;
  height: 100%;
`;

export const StaffWrapper = styled("div")`
  justify-content: center;
  align-items: center;
  background-color: #ffffff;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  margin-left: 150px;
  width: 35%;
`;

export const PatientWrapper = styled("div")`
  justify-content: center;
  align-items: center;
  background-color: #ffffff;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  margin: auto;
  width: 35%;
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