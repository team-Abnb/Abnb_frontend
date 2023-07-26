import React from "react";
import Topbar from "../components/main/Topbar";
import RoomType from "../components/main/RoomType";
import RoomCard from "../components/main/RoomCard";
import api from "../axios/api";

function Main() {
    return (
        <>
            <Topbar />
            <RoomType />
            <RoomCard />
        </>
    );
}

export default Main;
