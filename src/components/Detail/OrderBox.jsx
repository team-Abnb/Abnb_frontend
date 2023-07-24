import React from "react";
import * as S from "../../style/Detail/DetailPage";

function OrderBox() {
    return (
        <S.OrderBox>
            <div className="orderbox">
                <div className="orderInfo">
                    <h1>₩854,969 /박</h1>
                    <p>후기 32개</p>
                </div>
                <S.InputBox>
                    <div className="date">
                        <div className="startDate"></div>
                        <div className="finishDate"></div>
                    </div>
                    <div className="people"></div>
                    <S.OrderButton>예약하기</S.OrderButton>
                </S.InputBox>
            </div>
        </S.OrderBox>
    );
}

export default OrderBox;
