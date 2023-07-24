import React from 'react';
import * as S from "./style/common/GlobalStyle";
import Router from "./shared/Router";

function App() {
    return (
        <S.GlobalStyle>
            <Router />
        </S.GlobalStyle>
    );
}
