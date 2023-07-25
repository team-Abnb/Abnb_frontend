import React, { useEffect, useRef } from "react";
import * as S from "../../../style/common/Modal/Modal";
import UserProfile from "../../Detail/UserProfile";

function CommentListModal({ setCommentModal }) {
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
                        <UserProfile />
                        <p>
                            성에서 멋진 시간을 보냈습니다. 폴의 숙소는 심지어 사진보다 더 좋았습니다. 스코틀랜드에서 가족 휴가를 보내기에
                            완벽한 숙소였습니다. 침대도 편했고 주방도 잘 갖추어져 있었습니다. 계단이 많아 문제가 되지 않았지만 이동에 문제가
                            있는 경우 문제가 될 수 있습니다. 부지도 멋진 곳이었습니다. 이 지역을 둘러보려면 자동차가 필요합니다. 이 독특한
                            숙소를 강추합니다!
                        </p>
                    </S.UserComments>
                </div>
            </S.ModalContainer>
        </S.ModalOverlay>
    );
}

export default CommentListModal;
