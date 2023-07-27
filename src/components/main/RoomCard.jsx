import { useState } from "react";
import { useMutation } from "react-query";
import { postLike } from "../../axios/api";
import * as S from "../../style/Main/MainPage";
import LikeButton from "../../components/common/LikeButton/LikeButton";

function RoomCard({ item }) {
    const { address, title, price, roomPictures, roomId, isWishList } = item;
    const [likeButton, setLikeButton] = useState(isWishList);

    const addLikeButtonMutation = useMutation(postLike, {
        onSuccess: (data) => {
            console.log("좋아요 성공", data);
        },
    });

    const LikeButtonHandler = (event) => {
        const roomNum = { roomId };
        addLikeButtonMutation.mutate(roomNum);
        setLikeButton(!likeButton);
    };
    return (
        <S.RoomCards>
            <S.RoomCard>
                <S.RoomsImage>
                    <img
                        src={roomPictures[0]}
                        alt="장소"
                    />
                    <span onClick={LikeButtonHandler}>
                        <LikeButton likeButton={likeButton} />
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
