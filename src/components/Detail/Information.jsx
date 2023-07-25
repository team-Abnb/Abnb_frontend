import React from "react";

import * as S from "../../style/Detail/DetailPage";
import { PiMedalMilitaryLight } from "react-icons/pi";
import { SlLocationPin } from "react-icons/sl";
import { CiCalendar } from "react-icons/ci";
import { IoIosArrowForward } from "react-icons/io";

import UserInfo from "./UserInfo";
import Amenities from "./Amenities";
import Reservation from "./Reservation";

function Information() {
    return (
        <S.Information>
            <UserInfo />
            <S.Host>
                <PiMedalMilitaryLight className="imageSize" />
                <div>
                    <h3>Paul님은 슈퍼호스트입니다</h3>
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
                <h3>7월 24일 오전 10:23 전까지 무료로 취소하실 수 있습니다.</h3>
            </S.Calendar>
            <S.PlaceInfo>
                <p>
                    돌라베그 성은 스코틀랜드의 독특한 성 휴양지입니다. 이 고급 아파트에는 3개의 테마가 있는 침실, 영화방 및 타워가 있으며,
                    전용 옥상 테라스와 주변 시골과 오칠 언덕의 파노라마 전망을 자랑합니다. <br />
                    독특하고 유서 깊은 달러베그 성의 타워 아파트는 완전히 새롭게 단장되었으며 고급 가구와 함께 높은 수준으로 선보입니다.
                    여러 개의 방에 있는 포탑 코너와 모든 창문에서 탁월한 전망을 감상할 수 있어 전체적으로 훌륭한 특성을 유지하고 있습니다...
                </p>
                <div>
                    더보기
                    <IoIosArrowForward />
                </div>
            </S.PlaceInfo>
            <Amenities />
            {/* <Reservation /> */}
        </S.Information>
    );
}

export default Information;
