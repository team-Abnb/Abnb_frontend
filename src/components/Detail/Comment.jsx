import React from "react";
import * as S from "../../style/Detail/DetailPage";
import { IoIosArrowForward } from "react-icons/io";
import UserProfile from "./UserProfile";

function Comment() {
    return (
        <S.Comment>
            <UserProfile />
            <p className="overflow">
                성에서 멋진 시간을 보냈습니다. 폴의 숙소는 심지어 사진보다 더 좋았습니다. 스코틀랜드에서 가족 휴가를 보내기에 완벽한
                숙소였습니다. 침대도 편했고 주방도 잘 갖추어져 있었습니다. 계단이 많아 문제가 되지 않았지만 이동에 문제가 있는 경우 문제가
                될 수 있습니다. 부지도 멋진 곳이었습니다. 이 지역을 둘러보려면 자동차가 필요합니다. 이 독특한 숙소를 강추합니다!
            </p>
            <div>
                더보기
                <IoIosArrowForward />
            </div>
        </S.Comment>
    );
}

export default Comment;
