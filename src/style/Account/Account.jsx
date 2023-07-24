import styled from "styled-components";
import { Box, IconButton } from "@mui/material";

export const CloseIconBtn = styled(IconButton)`
    flex: 0 0 16px !important;
    text-align: left !important;
`;

export const Btn = styled.button`
    cursor: pointer;
    font-family: var(--font-light);
    display: inline-block !important;
    margin: 0px !important;
    position: relative !important;
    text-align: center !important;
    text-decoration: none !important;
    touch-action: manipulation !important;
    font-size: 16px !important;
    line-height: 20px !important;
    font-weight: 600 !important;
    border-radius: 8px;
    outline: none !important;
    padding: 14px 24px !important;
    transition: box-shadow 0.2s ease 0s, -ms-transform 0.1s ease 0s, -webkit-transform 0.1s ease 0s, transform 0.1s ease 0s !important;
    border: none !important;
    background: linear-gradient(to right, rgb(230, 30, 77) 0%, rgb(227, 28, 95) 50%, rgb(215, 4, 102) 100%);
    color: rgb(255, 255, 255) !important;
    width: 100% !important;
    margin-bottom: 24px !important;
    margin-top: 16px !important;
    &:disabled {
        opacity: 0.6;
        cursor: not-allowed;
    }
`;

export const Inner = styled(Box)`
    padding: 24px !important;
    flex: 1 1 auto !important;
    overflow-y: auto !important;
    outline: none !important;
`;

export const H3 = styled.h3`
    font-family: var(--font-medium);
    font-size: 22px !important;
    line-height: 26px !important;
    color: rgb(34, 34, 34) !important;
    font-weight: 600 !important;
    margin-top: 8px !important;
    margin-bottom: 24px !important;
`;

export const Div = styled.div`
    flex: 0 0 16px !important;
    text-align: right !important;
`;

export const Header = styled.header`
    font-family: var(--font-medium);
    height: 64px !important;
    display: flex !important;
    flex: 0 0 auto !important;
    align-items: center !important;
    justify-content: space-between !important;
    padding: 0px 24px !important;
    border-bottom: 1px solid rgb(235, 235, 235) !important;
    color: rgb(34, 34, 34) !important;
    font-size: 16px !important;
    line-height: 20px !important;
    font-weight: 800 !important;
`;

export const Boxes = styled(Box)`
    outline: none;
    width: 100% !important;
    max-width: 568px !important;
    height: 100%;
    max-height: 682px !important;
    border-radius: 12px !important;
    background-color: #ffffff;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
`;
export const DivBox = styled.div`
    text-align: center;
    margin-top: 20px;
    justify-content: 10px;
`;
