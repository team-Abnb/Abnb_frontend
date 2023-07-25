import React, { useEffect, useRef } from "react";
import * as S from "../../../style/common/Modal/Modal";

function ImageListModal({ setImageModal }) {
    const modalRef = useRef(null);

    const clickCloseModal = () => {
        setImageModal(false);
        document.body.style.overflow = "auto";
    };

    useEffect(() => {
        const handleOutsideClick = (event) => {
            if (modalRef.current && !modalRef.current.contains(event.target)) {
                setImageModal(false);
            }
        };

        document.addEventListener("mousedown", handleOutsideClick);
        return () => {
            document.removeEventListener("mousedown", handleOutsideClick);
            document.body.style.overflow = "auto";
        };
    }, [setImageModal]);

    return (
        <S.ModalOverlay>
            <S.ModalContainer ref={modalRef}>
                <S.CloseButton onClick={clickCloseModal}>X</S.CloseButton>
                <div>
                    <S.ImageLists>
                        <img
                            src="https://images.unsplash.com/photo-1585231474241-c8340c2b2c65?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Y2FzdGxlfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60"
                            alt="장소"
                        />
                    </S.ImageLists>
                </div>
            </S.ModalContainer>
        </S.ModalOverlay>
    );
}

export default ImageListModal;
