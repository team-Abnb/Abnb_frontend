import { useState } from "react";
import { CgMenuGridO } from "react-icons/cg";
import * as S from "../../style/Detail/DetailPage";
import ImageListModal from "../common/Modal/ImageListModal";

function ImageLists({ roomPictures }) {
    const [imageModal, setImageModal] = useState(false);

    const ImageClickHandler = () => {
        setImageModal(true);
        document.body.style.overflow = "hidden";
    };
    return (
        <>
            <S.ImageLists>
                <S.ImageContainer>
                    <img
                        src={roomPictures[0]}
                        alt="장소 이미지"
                        className="firstImage"
                    />
                    <div class="firstOverlay"></div>
                </S.ImageContainer>
                <S.ImageContainer>
                    <img
                        src={roomPictures[1]}
                        alt="장소 이미지"
                        className="lastImage"
                    />
                    <div class="lastOverlay"></div>
                    <S.Button onClick={ImageClickHandler}>
                        <CgMenuGridO /> 사진 모두 보기
                    </S.Button>
                    {imageModal && (
                        <ImageListModal
                            setImageModal={setImageModal}
                            roomPictures={roomPictures}
                        />
                    )}
                </S.ImageContainer>
            </S.ImageLists>
        </>
    );
}

export default ImageLists;
