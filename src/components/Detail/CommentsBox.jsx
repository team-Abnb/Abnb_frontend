import React from "react";
import * as S from "../../style/Detail/DetailPage";
import Comment from "./Comment";

function CommentsBox() {
    return (
        <S.CommentsBox>
            <h1>후기 32개</h1>
            <S.CommentLists>
                <Comment />
                <Comment />
                <Comment />
                <Comment />
                <Comment />
                <Comment />
            </S.CommentLists>
            <S.CommentButton>후기 32개 모두 보기</S.CommentButton>
        </S.CommentsBox>
    );
}

export default CommentsBox;
