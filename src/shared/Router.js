import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DetailPage from "../pages/DetailPage";
import MainPage from "../pages/MainPage";

export default function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route
                    path="/"
                    element={<MainPage />}
                />
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
}
