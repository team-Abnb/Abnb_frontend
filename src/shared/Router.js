import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DetailPage from "../pages/DetailPage";
import MainPage from "../pages/MainPage";
import RoomsAdd from "../pages/RoomsAdd";

const queryClient = new QueryClient();

export default function Router() {
    return (
        <QueryClientProvider client={queryClient}>
            <BrowserRouter>
                <Routes>
                    <Route
                        path="/"
                        element={<MainPage />}
                    />
                    <Route
                        path="/roomsadd"
                        element={<RoomsAdd />}
                    />
                    <Route
                        path="/detailpage/:id"
                        element={<DetailPage />}
                    />
                </Routes>
            </BrowserRouter>
        </QueryClientProvider>
    );
}
