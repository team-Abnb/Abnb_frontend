import { useState } from "react";
import * as S from "../../style/Detail/DetailPage";
import Comment from "./Comment";
import CommentListModal from "../common/Modal/CommentListModal";
import { getComments } from "../../axios/api";
import { useQuery } from "react-query";

function CommentsBox({ roomId }) {
    console.log(roomId);
    const [commentModal, setCommentModal] = useState(false);

    const CommentClickHandler = () => {
        setCommentModal(true);
        document.body.style.overflow = "hidden";
    };

    const { isLoading, isError, data } = useQuery("get", () => getComments(roomId));

    if (isLoading) {
        return <p>로딩중.....</p>;
    }

    if (isError) {
        return <p>오류가 발생하였습니다...!</p>;
    }

    return (
        <>
            <S.CommentsBox>
                <h1>후기 {data.totalComments}개</h1>
                {data.commentResponseDtos.map((item) => (
                    <S.CommentLists>
                        <Comment
                            id={item.key}
                            comment={item.comment}
                            commentId={item.commentId}
                            createdAt={item.createdAt}
                            profilePicture={item.profilePicture}
                            username={item.username}
                        />
                    </S.CommentLists>
                ))}
                <S.CommentButton onClick={CommentClickHandler}>후기 {data.totalComments}개 모두 보기</S.CommentButton>
                {commentModal &&
                    data.commentResponseDtos.map((modal) => (
                        <CommentListModal
                            setCommentModal={setCommentModal}
                            comment={modal.comment}
                            commentId={modal.commentId}
                            createdAt={modal.createdAt}
                            profilePicture={modal.profilePicture}
                            username={modal.username}
                        />
                    ))}
            </S.CommentsBox>
        </>
    );
}

export default CommentsBox;
