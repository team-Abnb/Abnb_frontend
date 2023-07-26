import React from 'react';
import * as S from '../../../style/Main/MainPage';
//import StyledLink from '../../../style/Main/MainPage';

import LangIcon from './LangIcon';
// import styled from 'styled-components';
import UserInfo from './UserInfo';

function TopbarRight() {
    return (
        <S.Wrappers>
            <S.Nav>
                <S.StLink>
                    <S.StyledLink to="/api/rooms/main">
                        <S.Text>당신의 공간을 에어비앤비하세요</S.Text>
                    </S.StyledLink>
                </S.StLink>
                <S.IconBtn>
                    <S.IconWrapper>
                        <LangIcon />
                    </S.IconWrapper>
                </S.IconBtn>
                <UserInfo />
            </S.Nav>
        </S.Wrappers>
    );
}

export default TopbarRight;
