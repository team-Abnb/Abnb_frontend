import React from 'react';
import * as S from '../../../style/Main/MainPage';
import { Link } from 'react-router-dom';
import LangIcon from './LangIcon';
import UserInfo from './UserInfo';

function TopbarRight() {
    return (
        <S.Wrappers>
            <S.Nav>
                <S.Link>
                    <S.yledLink to="/api/rooms/main">
                        <S.Text>당신의 공간을 에어비앤비하세요</S.Text>
                    </S.yledLink>
                </S.Link>
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
