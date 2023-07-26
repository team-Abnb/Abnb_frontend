import React from "react";
import * as S from "../../style/Main/MainPage";
import LikeButton from "../../components/common/LikeButton/LikeButton";

function RoomCard({ item }) {
    const { address, title, price, roomPictures } = item;
    return (
        <S.RoomCards>
            <S.RoomCard>
                <S.RoomsImage>
                    <img
                        src={roomPictures[0]}
                        alt="장소"
                    />
                    <span>
                        <LikeButton />
                    </span>
                </S.RoomsImage>
                <h3>{address}</h3>
                <p>{title}</p>
                <p>{price}</p>
            </S.RoomCard>
        </S.RoomCards>
    );
}
export default RoomCard;
