import React from "react";
import * as S from "../../style/Main/MainPage";

import { Link } from "react-router-dom";
import Logo from "./topbar/Logo";
import Search from "./topbar/Search";
import TopbarRight from "./topbar/TopbarRight";

function Topbar() {
    return (
        <S.Div>
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
        </S.Div>
    );
}

export default Topbar;
