import styled from 'styled-components';

export const Container = styled.div`
    display: inline-block;
    vertical-align: middle;
    max-width: 1000px;
    max-height: 1000px;
    width: 70%;
    height: 70%;
    text-align: center;
    padding-left: 180px;
    justify-content: 10px;
`;

export const P = styled.p`
    font-family: var(--font-semibold);
    font-size: 25px;
    font-weight: bold;
    display: inline-block;
    margin: 20px;
    text-align: center;
    letter-spacing: 0.1px;
    line-height: 1.5;
    color: black;
    text-decoration: underline;
`;
export const Input = styled.input`
    font-family: var(--font-regular);
    font-size: 15px;
    font-weight: bold;
    margin: 50px;
    letter-spacing: 0.1px;
    padding: 30px;
    border-radius: 18px;
`;

export const Select = styled.select`
    font-size: 18px;
    font-weight: bold;
    margin: 50px;
    letter-spacing: 0.1px;
    padding: 30px;
    border-radius: 18px;
`;

export const SubmitBtn = styled.button`
    cursor: pointer !important;
    display: inline-block !important;
    margin: 0px !important;
    position: relative !important;
    text-align: center !important;
    text-decoration: none !important;
    touch-action: manipulation !important;
    /* font-family: var(--e-ls-qkw) !important; */
    font-size: 16px !important;
    line-height: 20px !important;
    font-weight: 500 !important;
    border-radius: 8px;
    outline: none !important;
    padding: 14px 24px !important;
    transition: box-shadow 0.2s ease 0s, -ms-transform 0.1s ease 0s, -webkit-transform 0.1s ease 0s,
        transform 0.1s ease 0s !important;
    border: none !important;
    background: linear-gradient(
        to right,
        rgb(239, 143, 166) 0%,
        rgb(219, 67, 118) 50%,
        rgb(227, 25, 120) 100%
    ) !important;
    color: rgb(255, 255, 255) !important;
    width: 100% !important;
    margin-bottom: 24px !important;
    margin-top: 16px !important;
`;

export const SpanBar = styled.span`
    font-family: var(--font-light);
    font-size: 17px;
`;
export const Border = styled.div`
    border-bottom: 1px solid gray;
    font-weight: 600;
`;
