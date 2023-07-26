import React, { useEffect, useRef } from "react";
import * as S from "../../../style/common/Modal/Modal";

function ImageListModal({ setImageModal, roomPictures }) {
    const modalRef = useRef(null);

    const clickCloseModal = () => {
        setImageModal(false);
        document.body.style.overflow = "auto";
    };

    console.log("110", roomPictures);

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
                    {roomPictures.map((item) => (
                        <S.ImageLists>
                            <img
                                src={item}
                                alt="장소"
                            />
                        </S.ImageLists>
                    ))}
                </div>
            </S.ModalContainer>
        </S.ModalOverlay>
    );
}

export default ImageListModal;
