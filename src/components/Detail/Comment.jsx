import React, { useState } from "react";
import * as S from "../../style/Detail/DetailPage";
import { IoIosArrowForward } from "react-icons/io";
import UserProfile from "./UserProfile";
import CommentListModal from "../common/Modal/CommentListModal";

function Comment({ comment, commentId, createdAt, profilePicture, username }) {
    const [commentModal, setCommentModal] = useState(false);

    const CommentClickHandler = () => {
        setCommentModal(true);
        document.body.style.overflow = "hidden";
    };
    return (
        <S.Comment>
            <UserProfile
                username={username}
                createdAt={createdAt}
                profilePicture={profilePicture}
            />
            <p className="overflow">{comment}</p>
            <div
                className="moreInfo"
                onClick={CommentClickHandler}
            >
                더보기
                <IoIosArrowForward />
                {commentModal && <CommentListModal setCommentModal={setCommentModal} />}
            </div>
        </S.Comment>
    );
}

export default Comment;
