import React from "react";
// import React, { useState, useCallback, useEffect, useRef } from "react";
// import { Container, Grid } from "@mui/material";
// import { useDispatch, useSelector } from "react-redux";
// import { createTheme, MuiThemeProvider } from "@material-ui/core/styles";
// import createBreakpoints from "@material-ui/core/styles/createBreakpoints";
// import { useCookies } from "react-cookie";
// import { useInView } from "react-intersection-observer";
// import { useNavigate } from "react-router-dom";
// import { increasePage, initPage, initRooms, nonMemberReadRooms, readRooms } from "../redux/modules/roomSlice";
import Topbar from "../components/main/Topbar";
import RoomType from "../components/main/RoomType";
import RoomCard from "../components/main/RoomCard";

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
