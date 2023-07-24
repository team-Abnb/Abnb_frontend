import React from "react";
import * as S from "../../style/Detail/DetailPage";
import Comment from "./Comment";

function CommentsBox() {
    return (
        <S.CommentsBox>
            <h1>후기 32개</h1>
            <div>
                <Comment />
                <Comment />
            </div>
        </S.CommentsBox>
    );
}

export default CommentsBox;
