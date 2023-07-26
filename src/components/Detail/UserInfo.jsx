import React from "react";
import * as S from "../../style/Detail/DetailPage";

function UserInfo({ userName, userProfilePicture, maxPeople, theme }) {
    return (
        <S.UserInfo>
            <div>
                <h1>
                    {userName} 님이 호스팅하는 {theme}
                </h1>
                <h2>최대 인원 {maxPeople}명침실 3개침대 4개욕실 2개</h2>
            </div>
            <img
                src={userProfilePicture}
                alt="프로필 사진"
            />
        </S.UserInfo>
    );
}

export default UserInfo;
