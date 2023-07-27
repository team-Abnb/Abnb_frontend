import { useState, useEffect } from "react";
import { useMutation } from "react-query";
import { postLike } from "../../axios/api";
import { FiShare } from "react-icons/fi";
import { AiFillStar } from "react-icons/ai";
import { BsTranslate } from "react-icons/bs";

import * as S from "../../style/Detail/DetailPage";

import LikeButton from "../common/LikeButton/LikeButton";

function Title({ roomId, title, address, isWishList }) {
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
        <>
            <S.Title>
                <h1>
                    <BsTranslate style={{ marginRight: "10px" }} />
                    {title}
                </h1>
                <div>
                    <S.Info>
                        <p>
                            <AiFillStar />
                        </p>
                        <p>4.7</p>
                        <p>후기 1개</p>
                        <p>{address}</p>
                    </S.Info>
                    <S.Share>
                        <p>
                            <FiShare />
                            공유하기
                        </p>
                        <p onClick={LikeButtonHandler}>
                            <LikeButton likeButton={likeButton} />
                            저장
                        </p>
                    </S.Share>
                </div>
            </S.Title>
        </>
    );
}

export default Title;
