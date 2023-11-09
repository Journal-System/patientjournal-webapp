import { styled } from "@mui/system";
import { Box, Typography, TextField, Button } from "@mui/material";

export const LoginContainer = styled("div")`
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

export const LoginContainerWrapper = styled(Box)`
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

export const StyledForm = styled("form")`
  padding-top: 20px;
  display: flex;
  flex-direction: column;
`;

export const FormTitle = styled(Typography)`
padding-bottom: 20px;
  variant: 'h5',
  component: 'h2',
  margin-bottom: 1rem;
  color: #333;
`;

export const StyledInput = styled(TextField)`
  margin-bottom: 1rem;
  & .MuiInputBase-input {
    padding: 12px;
  }
  & .MuiOutlinedInput-root {
    & fieldset {
      bordercolor: #ccc;
    }
    &:hover fieldset {
      bordercolor: #007bff;
    }
    &.Mui-focused fieldset {
      bordercolor: #007bff;
    }
  }

  .MuiInputLabel-outlined.MuiInputLabel-marginDense {
    transform: translate(14px, 20px) scale(1); // Adjust label positioning and scale as needed
  }

  .MuiInputLabel-outlined.MuiInputLabel-shrink {
    transform: translate(14px, -4.5px) scale(0.75); // Adjust label positioning and scale when shrunk
  }
`;

export const StyledButton = styled(Button)`
  padding: 12px;
  margin-top: 1rem;
  border-radius: 5px;
  background-color: #007bff;
  color: #fff;
  font-size: 1rem;
  font-weight: 600;
  text-transform: none; // Removes uppercase transformation
  &:hover {
    background-color: #0056b3;
  }
`;

export const ErrorText = styled(Typography)`
  color: red;
  font-size: 0.9rem;
`;

export const SuccessText = styled(Typography)`
  color: green;
  font-size: 0.9rem;
`;