import React from "react";
import * as S from "../../../style/Main/MainPage";

import SearchIcon from "./SearchIcon";

function Search() {
    return (
        <S.Search>
            <S.WhereBtn>
                <S.WhereSpan>위치</S.WhereSpan>
                <S.WhereText>어디든지</S.WhereText>
            </S.WhereBtn>
            <S.SpanBar />
            <S.WhereWeek>
                <S.WhereWeekText>언제든 일주일</S.WhereWeekText>
            </S.WhereWeek>
            <S.SpanBar />
            <S.AddGuest>
                <S.AddGuestText>게스트 추가</S.AddGuestText>
            </S.AddGuest>
            <S.Icon>
                <SearchIcon />
            </S.Icon>
        </S.Search>
    );
}

export default Search;
