import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import DetailPage from '../pages/DetailPage';
import Main from '../pages/Main';
import RoomsAdd from '../pages/RoomsAdd';

export default function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Main />} />
                <Route path="/api/rooms/main" element={<RoomsAdd />} />
                <Route path="/" element></Route>
                <Route path="/rooms" element={<DetailPage />} />
            </Routes>
        </BrowserRouter>
    );
}
