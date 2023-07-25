import React from "react";
import * as S from "../../style/Detail/DetailPage";

function UserProfile() {
    return (
        <S.UserProfiles>
            <img
                src="https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjZ8fHBlb3BsZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60"
                alt="프로필 사진"
            />
            <div>
                <h3>Diane</h3>
                <p>2023년 5월</p>
            </div>
        </S.UserProfiles>
    );
}

export default UserProfile;
