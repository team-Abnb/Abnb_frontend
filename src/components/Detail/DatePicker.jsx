import React from "react";
import DatePicker from "react-datepicker";
import * as S from "../../style/Detail/DetailPage";
import "react-datepicker/dist/react-datepicker.css";

export const StartDatePicker = ({ startDate, setStartDate }) => {
    return (
        <S.DatePicker>
            <DatePicker
                dateFormat="yyyy/MM/dd"
                selected={startDate}
                onChange={(date) => setStartDate(date)}
            />
        </S.DatePicker>
    );
};

export const FinishReactDatePicker = ({ finishDate, setFinishDate }) => {
    return (
        <S.DatePicker>
            <DatePicker
                dateFormat="yyyy/MM/dd"
                selected={finishDate}
                onChange={(date) => setFinishDate(date)}
            />
        </S.DatePicker>
    );
};
