import styled from 'styled-components';

export const Img = styled.img`
    width: 40%;
    height: 40%;
    object-fit: cover;
`;
export const ImgUp = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`;
export const Input = styled.input`
    display: none;
`;
export const ImgContainer = styled.div`
    /* width: 680px;
  height: 300px; */
    width: 100%;
    height: 40%;
    background: linear-gradient(
        to right,
        rgb(239, 143, 166) 0%,
        rgb(219, 67, 118) 50%,
        rgb(227, 25, 120) 100%
    ) !important;
    border: 4px solid pink;
`;

export const Label = styled.label`
    display: block;
    margin-bottom: 10px;
    width: 70px;
    height: 70px;
`;

export const DeleteButton = styled.button`
    border-radius: 10px;
    border: 0px;
`;
