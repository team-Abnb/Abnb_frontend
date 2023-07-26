import React from "react";
import * as S from "../../style/Main/MainPage";
import LikeButton from "../../components/common/LikeButton/LikeButton";

function RoomCard() {
    return (
        <S.RoomCards>
            <S.RoomCard>
                <S.RoomsImage>
                    <img
                        src="https://a0.muscache.com/im/pictures/miso/Hosting-577765450265818795/original/69d05e75-fba6-4b31-bfa1-f00264e5766c.jpeg?im_w=720"
                        alt="장소"
                    />
                    <span>
                        <LikeButton />
                    </span>
                </S.RoomsImage>
                <h3>주소</h3>
                <p>타이틀</p>
                <p>가격/박</p>
            </S.RoomCard>
        </S.RoomCards>
    );
}
export default RoomCard;
