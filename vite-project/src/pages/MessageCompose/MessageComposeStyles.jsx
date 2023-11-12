import { styled } from '@mui/system';
import { Box } from '@mui/material';

export const MessagesContainer = styled('div')`
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

export const MessagesWrapper = styled(Box)`
    border: 2px solid #e0e0e0;
    margin: auto;
    border-radius: 8px;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
    padding: 1rem;
    background-color: #ffffff;
    width: 100%;
    height: 300px;
    max-width: 1300px;
`;