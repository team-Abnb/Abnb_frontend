import React from 'react';
import { Link } from 'react-router-dom';
import * as S from '../../style/Main/TopbarRoom';
import Logo from './topbar/Logo';
import Search from './topbar/Search';
import TopbarRight from './topbar/TopbarRight';

function Topbar() {
    return (
        <S.Header>
            <S.Wrapper>
                <S.LogoWrapper>
                    <Link to="/">
                        <Logo />
                    </Link>
                </S.LogoWrapper>
                <S.SearchWrapper>
                    <Search />
                </S.SearchWrapper>
                <TopbarRight />
            </S.Wrapper>
        </S.Header>
    );
}

export default Topbar;
