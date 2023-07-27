import React from "react";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";

function LikeButton({ likeButton }) {
    return <>{likeButton === true ? <AiFillHeart style={{ color: "red" }} /> : <AiOutlineHeart />}</>;
    // if (likeButton === true) {
    //     return (
    //         <>
    //             <AiFillHeart style={{ color: "red" }} />
    //         </>
    //     );
    // } else if (likeButton === false) {
    //     return (
    //         <>
    //             <AiOutlineHeart />
    //         </>
    //     );
    // }
}

export default LikeButton;
