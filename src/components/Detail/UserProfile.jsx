import React from "react";
import * as S from "../../style/Detail/DetailPage";

function UserProfile({ username, createdAt, profilePicture }) {
    return (
        <S.UserProfiles>
            <img
                src={profilePicture}
                alt="프로필 사진"
            />
            <div>
                <h3>{username}</h3>
                <p>{createdAt}</p>
            </div>
        </S.UserProfiles>
    );
}

export default UserProfile;
