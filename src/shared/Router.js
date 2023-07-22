import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import DetailPage from "../pages/DetailPage";

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route
                    path="/"
                    element
                ></Route>
                <Route
                    path="/rooms"
                    element={<DetailPage />}
                />
            </Routes>
        </BrowserRouter>
    );
};

export default Router;
