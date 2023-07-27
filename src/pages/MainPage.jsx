import Topbar from "../components/main/Topbar";
import RoomCard from "../components/main/RoomCard";
import { useQuery } from "react-query";
import { getRoomPosts } from "../axios/api";
import React, { useState, useEffect } from "react";
import * as S from "../style/Main/MainPage";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import castle from "../images/castle.jpeg";
import hot from "../images/hot.jpeg";
import korean from "../images/korean.jpeg";
import pool from "../images/pool.jpeg";
import tropical from "../images/tropical.jpeg";

function Main() {
    const [selectedTheme, setSelectedTheme] = useState("인기 급상승");
    const { isLoading, isError, data, refetch } = useQuery(["post", selectedTheme], () => getRoomPosts(selectedTheme));
    const navigate = useNavigate();

    useEffect(() => {
        refetch();
    }, [selectedTheme]);

    if (isLoading) {
        return <p>로딩중.....</p>;
    }

    if (isError) {
        return <p>오류가 발생하였습니다...!</p>;
    }

    console.log("data", data);

    const handleThemeBtnClick = (themeName) => {
        setSelectedTheme(themeName);
    };

    const handleBoxClick = (roomId) => {
        navigate(`/detailpage/${roomId}`);
    };

    return (
        <>
            <Topbar />
            <>
                <S.RoomTypeContainer>
                    <S.ThemeBtn onClick={() => handleThemeBtnClick("인기 급상승")}>
                        <div>
                            <img
                                src={hot}
                                alt="테마별 장소"
                            />
                            <S.ThemeName>인기 급상승</S.ThemeName>
                        </div>
                    </S.ThemeBtn>
                    <S.ThemeBtn onClick={() => handleThemeBtnClick("한옥")}>
                        <div>
                            <img
                                src={korean}
                                alt="테마별 장소"
                            />
                            <S.ThemeName>한옥</S.ThemeName>
                        </div>
                    </S.ThemeBtn>
                    <S.ThemeBtn onClick={() => handleThemeBtnClick("캐슬")}>
                        <div>
                            <img
                                src={castle}
                                alt="테마별 장소"
                            />
                            <S.ThemeName>캐슬</S.ThemeName>
                        </div>
                    </S.ThemeBtn>
                    <S.ThemeBtn onClick={() => handleThemeBtnClick("오션뷰")}>
                        <div>
                            <img
                                src={pool}
                                alt="테마별 장소"
                            />
                            <S.ThemeName>오션뷰</S.ThemeName>
                        </div>
                    </S.ThemeBtn>
                    <S.ThemeBtn onClick={() => handleThemeBtnClick("열대 지역")}>
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
            <S.CardContainer>
                {data
                    .filter((item) => item.theme === selectedTheme)
                    .map((item) => (
                        <div onClick={() => handleBoxClick(item.roomId)}>
                            <RoomCard
                                key={item.roomId}
                                item={item}
                            />
                        </div>
                    ))}
            </S.CardContainer>
        </>
    );
}

export default Main;
