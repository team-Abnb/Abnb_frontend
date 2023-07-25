import { useState } from "react";
import * as S from "../../style/Detail/DetailPage";
import Comment from "./Comment";
import CommentListModal from "../common/Modal/CommentListModal";

function CommentsBox() {
    const [commentModal, setCommentModal] = useState(false);

    const CommentClickHandler = () => {
        setCommentModal(true);
        document.body.style.overflow = "hidden";

    };
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
            <S.CommentButton onClick={CommentClickHandler}>후기 32개 모두 보기</S.CommentButton>
            {commentModal && <CommentListModal setCommentModal={setCommentModal} />}
        </S.CommentsBox>
    );
}

export default CommentsBox;
