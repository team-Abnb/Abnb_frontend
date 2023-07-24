import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from '../pages/Main';
import DetailPage from "../pages/DetailPage";

export default function Router() {  
    return (
        <BrowserRouter>
            <Routes>
      <Route path="/" element={<Main />} />
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
