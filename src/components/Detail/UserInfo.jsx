import React from "react";
import * as S from "../../style/Detail/DetailPage";

function UserInfo() {
    return (
        <S.UserInfo>
            <div>
                <h1>Paul 님이 호스팅하는 캐슬</h1>
                <h2>최대 인원 6명침실 3개침대 4개욕실 2개</h2>
            </div>
            <img
                src="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cGVvcGxlfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60"
                alt="프로필 사진"
            />
        </S.UserInfo>
    );
}

export default UserInfo;
