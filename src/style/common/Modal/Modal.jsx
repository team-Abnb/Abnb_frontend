import styled from "styled-components";

export const ModalOverlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 9999;
    div {
        overflow-y: scroll;
        overflow-x: hidden;
    }
`;

export const ModalContainer = styled.div`
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 70%;
    height: 700px;
    border-radius: 12px;
    box-sizing: border-box;
    padding: 24px;
    background-color: white;
    z-index: 10000;
`;

export const CloseButton = styled.button`
    width: 40px;
    height: 40px;
    border: none;
    background-color: #ffffff;
    cursor: pointer;
`;

// ImageListModal.jsx
export const ImageLists = styled.div`
    text-align: center;
    img {
        margin: 20px 0;
    }
`;

// CommentListModal.jsx
export const UserComments = styled.div`
    border-bottom: 1px solid #ebebeb;
    padding: 20px 0;
`;
