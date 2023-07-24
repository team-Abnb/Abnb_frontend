import React from "react";

import * as S from "../../style/Detail/DetailPage";
import { AiOutlineWifi, AiOutlineCar } from "react-icons/ai";
import { BiSolidWasher, BiSolidDryer, BiCctv } from "react-icons/bi";
import { LuBath } from "react-icons/lu";
import { PiFlowerTulipLight, PiForkKnife } from "react-icons/pi";
import { CiMonitor } from "react-icons/ci";

function Amenities() {
    return (
        <S.Amenities>
            <h1>숙소 편의시설</h1>
            <section>
                <div>
                    <S.Amenity>
                        <p>
                            <PiFlowerTulipLight className="amenityIcons" />
                        </p>
                        <div>정원 전망</div>
                    </S.Amenity>
                    <S.Amenity>
                        <p>
                            <AiOutlineWifi className="amenityIcons" />
                        </p>
                        <div>무선 인터넷</div>
                    </S.Amenity>
                    <S.Amenity>
                        <p>
                            <PiForkKnife className="amenityIcons" />
                        </p>
                        <div>주방</div>
                    </S.Amenity>
                    <S.Amenity>
                        <p>
                            <AiOutlineCar className="amenityIcons" />
                        </p>
                        <div>건물 내 무료 주차</div>
                    </S.Amenity>
                    <S.Amenity>
                        <p>
                            <BiSolidWasher className="amenityIcons" />
                        </p>
                        <div>세탁기 무료 사용 – 숙소 내</div>
                    </S.Amenity>
                </div>
                <div>
                    <S.Amenity>
                        <p>
                            <BiSolidDryer className="amenityIcons" />
                        </p>
                        <div>건조기 무료 사용 – 숙소 내</div>
                    </S.Amenity>
                    <S.Amenity>
                        <p>
                            <LuBath className="amenityIcons" />
                        </p>
                        <div>욕조</div>
                    </S.Amenity>
                    <S.Amenity>
                        <p>
                            <CiMonitor className="amenityIcons" />
                        </p>
                        <div>75인치 HDTV + 넷플릭스</div>
                    </S.Amenity>
                    <S.Amenity>
                        <p>
                            <BiCctv className="amenityIcons" />
                        </p>
                        <div>숙소 내 보안 카메라</div>
                    </S.Amenity>
                </div>
            </section>
        </S.Amenities>
    );
}

export default Amenities;
