import React from "react";
import * as S from "../../../style/Main/MainPage";

import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";

function LikeButton() {
    return (
        <>
            <AiFillHeart style={{ color: "red" }} />
            {/* <AiOutlineHeart /> */}
        </>
    );
}

export default LikeButton;
