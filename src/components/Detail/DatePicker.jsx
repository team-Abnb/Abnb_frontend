import React from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

export const StartDatePicker = ({ startDate, setStartDate }) => {
    return (
        <DatePicker
            dateFormat="yyyy/MM/dd"
            selected={startDate}
            onChange={(date) => setStartDate(date)}
        />
    );
};

export const FinishReactDatePicker = ({ finishDate, setFinishDate }) => {
    return (
        <DatePicker
            dateFormat="yyyy/MM/dd"
            selected={finishDate}
            onChange={(date) => setFinishDate(date)}
        />
    );
};
