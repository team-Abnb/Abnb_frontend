import React from "react";
import { FiShare } from "react-icons/fi";
import { AiFillHeart, AiOutlineHeart, AiFillStar } from "react-icons/ai";
import { BsTranslate } from "react-icons/bs";

import * as S from "../../style/Detail/DetailPage";

function Title() {
    return (
        <>
            <S.Title>
                <h1>
                    <BsTranslate style={{ marginRight: "10px" }} />
                    DOLLARBEG CASTLE - The Tower - 럭셔리 3베드 대여
                </h1>
                <div>
                    <S.Info>
                        <p>
                            <AiFillStar />
                        </p>
                        <p>4.7</p>
                        <p>후기 1개</p>
                        <p>Clackmannanshire, 스코틀랜드, 영국</p>
                    </S.Info>
                    <S.Share>
                        <p>
                            <FiShare />
                            공유하기
                        </p>
                        <AiFillHeart className="fullHeart" />
                        <AiOutlineHeart />
                        저장
                    </S.Share>
                </div>
            </S.Title>
        </>
    );
}

export default Title;
