import React from "react";
import { CgMenuGridO } from "react-icons/cg";
import * as S from "../../style/Detail/DetailPage";

function ImageLists() {
    return (
        <>
            <S.ImageLists>
                <S.ImageContainer>
                    <img
                        src="https://a0.muscache.com/im/pictures/miso/Hosting-53058812/original/734016f0-6ab8-47b1-9690-b3ca373f6e5d.jpeg"
                        alt="장소 이미지"
                        className="firstImage"
                    />
                    <div class="firstOverlay"></div>
                </S.ImageContainer>
                <S.ImageContainer>
                    <img
                        src="https://a0.muscache.com/im/pictures/miso/Hosting-53058812/original/b53ab059-5eb5-40a7-8061-f5a2e34773cf.jpeg"
                        alt="장소 이미지"
                        className="lastImage"
                    />
                    <div class="lastOverlay"></div>
                    <S.Button>
                        <CgMenuGridO /> 사진 모두 보기
                    </S.Button>
                </S.ImageContainer>
            </S.ImageLists>
        </>
    );
}

export default ImageLists;
