import Topbar from '../components/main/Topbar';
import RoomCard from '../components/main/RoomCard';
import { useQuery } from 'react-query';
import { getRoomPosts } from '../axios/api';
import React, { useState, useEffect } from 'react';
import * as S from '../style/Main/MainPage';
import styled from 'styled-components';

import castle from '../images/castle.jpeg';
import hot from '../images/hot.jpeg';
import korean from '../images/korean.jpeg';
import pool from '../images/pool.jpeg';
import tropical from '../images/tropical.jpeg';

function Main() {
    const [selectedTheme, setSelectedTheme] = useState('한옥');
    const { isLoading, isError, data, refetch } = useQuery(['post', selectedTheme], () => getRoomPosts(selectedTheme));

    useEffect(() => {
        // Id가 변경될 때마다 useQuery를 다시 호출하도록 함
        refetch();
    }, [selectedTheme]);

    // useEffect(() => {
    //     console.log('selectedTheme:', selectedTheme);
    //     if (!isLoading && data) {
    //         console.log(
    //             'Filtered data:',
    //             data.filter(item => item.theme === selectedTheme),
    //         );
    //     }
    // }, [selectedTheme, isLoading, data]);

    if (isLoading) {
        return <p>로딩중.....</p>;
    }

    if (isError) {
        return <p>오류가 발생하였습니다...!</p>;
    }

    console.log('data', data);

    const handleThemeBtnClick = themeName => {
        setSelectedTheme(themeName);
    };

    return (
        <>
            <Topbar />
            <>
                <S.RoomTypeContainer>
                    <S.ThemeBtn onClick={() => handleThemeBtnClick('인기 급상승')}>
                        <div>
                            <img src={hot} alt="테마별 장소" />
                            <S.ThemeName>인기 급상승</S.ThemeName>
                        </div>
                    </S.ThemeBtn>
                    <S.ThemeBtn onClick={() => handleThemeBtnClick('한옥')}>
                        <div>
                            <img src={korean} alt="테마별 장소" />
                            <S.ThemeName>한옥</S.ThemeName>
                        </div>
                    </S.ThemeBtn>
                    <S.ThemeBtn onClick={() => handleThemeBtnClick('캐슬')}>
                        <div>
                            <img src={castle} alt="테마별 장소" />
                            <S.ThemeName>캐슬</S.ThemeName>
                        </div>
                    </S.ThemeBtn>
                    <S.ThemeBtn onClick={() => handleThemeBtnClick('오션뷰')}>
                        <div>
                            <img src={pool} alt="테마별 장소" />
                            <S.ThemeName>오션뷰</S.ThemeName>
                        </div>
                    </S.ThemeBtn>
                    <S.ThemeBtn onClick={() => handleThemeBtnClick('열대 지역')}>
                        <div>
                            <img src={tropical} alt="테마별 장소" />
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
            <StCardContainer>
                {data
                    .filter(item => item.theme === selectedTheme)
                    .map(item => (
                        <RoomCard key={item.roomId} item={item} />
                    ))}
            </StCardContainer>
        </>
    );
}

export default Main;

const StCardContainer = styled.div`
    max-width: 1278px;
    display: flex;
    flex-wrap: wrap;
    margin: 0 auto;
`;
