import React from "react";
// import React, { useState } from "react";
import * as S from "../../style/Main/MainPage";

import castle from "../../images/castle.jpeg";
import hot from "../../images/hot.jpeg";
import korean from "../../images/korean.jpeg";
import pool from "../../images/pool.jpeg";
import tropical from "../../images/tropical.jpeg";

function RoomType() {
    return (
        <>
            <S.RoomTypeContainer>
                <S.ThemeBtn>
                    <div>
                        <img
                            src={hot}
                            alt="테마별 장소"
                        />
                        <S.ThemeName>인기 급상승</S.ThemeName>
                    </div>
                </S.ThemeBtn>
                <S.ThemeBtn>
                    <div>
                        <img
                            src={korean}
                            alt="테마별 장소"
                        />
                        <S.ThemeName>한옥</S.ThemeName>
                    </div>
                </S.ThemeBtn>
                <S.ThemeBtn>
                    <div>
                        <img
                            src={castle}
                            alt="테마별 장소"
                        />
                        <S.ThemeName>캐슬</S.ThemeName>
                    </div>
                </S.ThemeBtn>
                <S.ThemeBtn>
                    <div>
                        <img
                            src={pool}
                            alt="테마별 장소"
                        />
                        <S.ThemeName>멋진 수영장</S.ThemeName>
                    </div>
                </S.ThemeBtn>
                <S.ThemeBtn>
                    <div>
                        <img
                            src={tropical}
                            alt="테마별 장소"
                        />
                        <S.ThemeName>열대 지역</S.ThemeName>
                    </div>
                </S.ThemeBtn>

                <S.FilterDiv>
                    <S.FilterBtn>
                        <S.FilterSpan>
                            <S.FilterText>필터</S.FilterText>
                        </S.FilterSpan>
                    </S.FilterBtn>
                </S.FilterDiv>
            </S.RoomTypeContainer>
        </>
    );
}

export default RoomType;
