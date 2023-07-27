import React, { useEffect, useRef } from "react";
import * as S from "../../../style/common/Modal/Modal";
import UserProfile from "../../Detail/UserProfile";

function CommentListModal({ setCommentModal, comment, commentId, createdAt, profilePicture, username }) {
    const modalRef = useRef(null);

    const clickCloseModal = () => {
        setCommentModal(false);
        document.body.style.overflow = "auto";
    };

    useEffect(() => {
        const handleOutsideClick = (event) => {
            if (modalRef.current && !modalRef.current.contains(event.target)) {
                setCommentModal(false);
            }
        };

        document.addEventListener("mousedown", handleOutsideClick);
        return () => {
            document.removeEventListener("mousedown", handleOutsideClick);
            document.body.style.overflow = "auto";
        };
    }, [setCommentModal]);

    return (
        <S.ModalOverlay>
            <S.ModalContainer ref={modalRef}>
                <S.CloseButton onClick={clickCloseModal}>X</S.CloseButton>
                <div>
                    <S.UserComments>
                        <UserProfile
                            username={username}
                            createdAt={createdAt}
                            profilePicture={profilePicture}
                        />
                        <p>{comment}</p>
                    </S.UserComments>
                </div>
            </S.ModalContainer>
        </S.ModalOverlay>
    );
}

export default CommentListModal;
