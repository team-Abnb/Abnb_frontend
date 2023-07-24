import React from 'react';
import * as S from '../../style/Detail/DetailPage';

function DetailHeader() {
    return (
        <S.DetailHeader>
            <S.Menu>
                <div>사진</div>
                <div>편의시설</div>
                <div>후기</div>
                <div>위치</div>
            </S.Menu>
        </S.DetailHeader>
    );
}

export default DetailHeader;
