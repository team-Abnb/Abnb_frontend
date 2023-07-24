import styled from "styled-components";

// DetailHeader.jsx
export const DetailHeader = styled.div`
    width: 100vw;
    height: 80px;
    border-bottom: 1px solid black;
`;

export const Menu = styled.div`
    margin: auto;
    width: 1120px;
    padding: 30px 0;
    display: flex;
    flex-direction: row;
    div {
        margin-right: 30px;
        font-size: 14px;
        cursor: pointer;
        &:hover {
            border-bottom: 5px solid;
            padding-bottom: 30px;
        }
    }
`;

// DetailPage.jsx
export const DetailPage = styled.div`
    line-height: 1.6;
    margin: auto;
    padding: 5%;
    max-width: 1120px;

    .information {
        display: flex;
        padding: 48px 0 24px 0;
    }
`;

// Title.jsx
export const Title = styled.div`
    div {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
    }
    h1 {
        font-size: 26px;
    }
    font-size: 14px;
`;

export const Info = styled.div`
    background-color: yellow;
`;

export const Share = styled.div`
    .fullHeart {
        color: red;
    }
`;

// ImageLists.jsx
export const ImageLists = styled.div`
    display: flex;
    flex-direction: row;
    padding: 24px 0 0 0;
`;

export const ImageContainer = styled.div`
    width: 100%;
    padding: auto;
    position: relative;
    display: inline-block;

    .firstImage {
        width: 100%;
        height: 100%;
        max-height: 410px;
        padding-right: 1%;
        border-radius: 3% 0 0 3%;
    }
    .lastImage {
        width: 100%;
        height: 100%;
        max-height: 410px;
        padding-left: 1%;
        border-radius: 0 3% 3% 0;
    }

    .firstOverlay {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        max-height: 410px;
        border-radius: 3% 0 0 3%;
        background-color: rgba(0, 0, 0, 0.3);
        opacity: 0;
        transition: opacity 0.3s ease;

        &:hover {
            opacity: 1;
        }
    }
    .lastOverlay {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        max-height: 410px;
        left: 1%;
        border-radius: 0 3% 3% 0;
        background-color: rgba(0, 0, 0, 0.3);
        opacity: 0;
        transition: opacity 0.3s ease;

        &:hover {
            opacity: 1;
        }
    }
`;

export const Button = styled.button`
    width: 135px;
    height: 34px;
    background-color: #fff;
    border: 1px solid #000;
    border-radius: 5px;
    cursor: pointer;
    position: relative;
    top: -10%;
    left: 83%;
    transform: translate(-50%, -50%);
    padding: 10px 20px;
    background-color: rgba(255, 255, 255, 0.7);
    border: none;
    border-radius: 5px;
    cursor: pointer;
    z-index: 1;
    display: flex;
    justify-content: center;
    align-items: center;
`;

// Information.jsx
export const Information = styled.div`
    width: 60%;
`;

export const Host = styled.div`
    display: flex;
    flex-direction: row;
    margin: 24px 0 24px 0;
    h3 {
        font-size: 16px;
    }
    p {
        font-size: 14px;
        color: rgb(113, 113, 113);
    }
    div {
        margin-left: 16px;
    }
    .imageSize {
        width: 24px;
        height: 24px;
    }
`;

export const Location = styled.div`
    display: flex;
    flex-direction: row;
    margin: 2px 0 20px 0;
    h3 {
        font-size: 16px;
        padding-left: 16px;
    }
    p {
        font-size: 14px;
        color: rgb(113, 113, 113);
        padding-left: 16px;
    }
    .imageSize {
        width: 24px;
        height: 24px;
    }
`;

export const Calendar = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    margin: 20px 0 20px 0;
    h3 {
        font-size: 16px;
        margin-left: 16px;
    }

    .imageSize {
        width: 24px;
        height: 24px;
    }
`;

// USerInfo.jsx
export const UserInfo = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    /* padding: 48px 0 24px 0; */

    border-bottom: 1px solid #ebebeb;
    h1 {
        font-size: 22px;
    }
    h2 {
        font-size: 16px;
    }
    img {
        width: 56px;
        height: 56px;
        border-radius: 100%;
    }
`;

// PlaceInfo.jsx
export const PlaceInfo = styled.div`
    padding-bottom: 24px;
    border-bottom: 1px solid #ebebeb;
    div {
        display: flex;
        flex-direction: row;
        align-items: center;
    }
`;

// Amenities.jsx
export const Amenities = styled.div`
    padding: 24px 0 24px 0;
    border-bottom: 1px solid #ebebeb;

    h1 {
        font-size: 22px;
        padding-bottom: 24px;
    }
    section {
        width: 100%;
        display: flex;
        flex-direction: row;
    }
    div {
        width: 100%;
        height: 100%;
    }
`;

export const Amenity = styled.div`
    display: flex;
    .amenityIcons {
        width: 24px;
        height: 24px;
        padding: 0 16px 16px 0;
    }
`;

// Reservation.jsx
export const Reservation = styled.div`
    padding: 24px 0;
`;

// CommentsBox.jsx
export const CommentsBox = styled.div`
    width: 100%;
    border-top: 1px solid #ebebeb;
    padding-top: 24px;

    h1 {
        font-size: 22px;
    }
`;

// Comment.jsx
export const Comment = styled.div`
    width: 40%;
    padding-right: 10%;
    margin: 0 0 16px;
    .userProfile {
        display: flex;
        flex-direction: row;
        div {
            display: flex;
            flex-direction: column;
            align-items: flex-start;
        }
        img {
            width: 40px;
            height: 40px;
            border-radius: 100%;
            margin-right: 16px;
        }
        h3 {
            font-size: 16px;
        }
        p {
            font-size: 14px;
            color: #717171;
        }
    }

    .overflow {
        color: #000;
        display: -webkit-box;
        -webkit-line-clamp: 3;
        -webkit-box-orient: vertical;
        overflow: hidden;
    }
    .overflow::after {
        content: "...";
    }

    div {
        display: flex;
        flex-direction: row;
        align-items: center;
    }
`;

// OrderBox.jsx
export const OrderBox = styled.div`
    width: 40%;

    .orderbox {
        width: 75%;
        height: 460px;
        margin-left: 15.5%;
        border: 1px solid rgb(221, 221, 221);
        border-radius: 12px;
        padding: 24px;
        box-shadow: rgba(0, 0, 0, 0.12) 0px 6px 16px;
    }

    .orderInfo {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        margin: 20px 0;
    }
    h1 {
        font-size: 22px;
    }
    p {
        color: #717171;
        text-decoration: underline;
        font-size: 14px;
    }
`;

export const InputBox = styled.div`
    width: 100%;
    height: 112px;
    border: 1px solid;
    border-radius: 8px;
    color: #717171;

    p {
        text-align: center;
        font-size: 14px;
        margin: 8px 0;
        color: #222222;
    }
    .orderInfos {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        padding-top: 16px;
        color: #222222;

        :first-child {
            text-decoration: underline;
        }
    }
    .resultOrder {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        padding-top: 16px;
        font-weight: 600;
        margin-top: 16px;
        border-top: 1px solid;
        color: #222222;
    }
`;

export const Data = styled.div`
    width: 100%;
    height: 50%;
    display: flex;
    flex-direction: row;
    .startDate {
        width: 50%;
        border-bottom: 1px solid;
        border-right: 1px solid;
    }
    .finishDate {
        width: 50%;
        border-bottom: 1px solid;
    }
`;

export const People = styled.button`
    width: 100%;
    height: 50%;
    border: none;
    border-radius: 0 0 8px 8px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
    background-color: #ffffff;
`;

export const OrderButton = styled.button`
    width: 100%;
    height: 48px;
    background-color: #ff385c;
    color: #ffffff;
    border: none;
    border-radius: 8px;
    margin: 20px 0;
`;
