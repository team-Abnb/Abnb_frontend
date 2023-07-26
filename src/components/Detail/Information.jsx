import React from "react";

import * as S from "../../style/Detail/DetailPage";
import { PiMedalMilitaryLight } from "react-icons/pi";
import { SlLocationPin } from "react-icons/sl";
import { CiCalendar } from "react-icons/ci";
import { IoIosArrowForward } from "react-icons/io";

import UserInfo from "./UserInfo";
import Amenities from "./Amenities";
import Reservation from "./Reservation";

function Information({ userName, userProfilePicture, content, maxPeople, theme }) {
    return (
        <S.Information>
            <UserInfo
                userName={userName}
                userProfilePicture={userProfilePicture}
                maxPeople={maxPeople}
                theme={theme}
            />
            <S.Host>
                <PiMedalMilitaryLight className="imageSize" />
                <div>
                    <h3>{userName}님은 슈퍼호스트입니다</h3>
                    <p>
                        슈퍼호스트는 풍부한 경험과 높은 평점을 자랑하며 게스트가 숙소에서 편안히 머무를 수 있도록 최선을 다하는
                        호스트입니다.
                    </p>
                </div>
            </S.Host>
            <S.Location>
                <div>
                    <SlLocationPin className="imageSize" />
                </div>
                <div>
                    <h3>훌륭한 숙소 위치</h3>
                    <p>최근 숙박한 게스트 중 95%가 위치에 별점 5점을 준 숙소입니다.</p>
                </div>
            </S.Location>
            <S.Calendar>
                <p>
                    <CiCalendar className="imageSize" />
                </p>
                <h3>전날 오전 10:23 전까지 무료로 취소하실 수 있습니다.</h3>
            </S.Calendar>
            <S.PlaceInfo>
                <p>{content}</p>
                <div
                    className="moreInfo"
                    onClick={(event) => alert("내용이 더 존재하지 않습니다.")}
                >
                    더 보기
                    <IoIosArrowForward />
                </div>
            </S.PlaceInfo>
            <Amenities />
            {/* <Reservation /> */}
        </S.Information>
    );
}

export default Information;
