/* eslint-disable no-shadow */

import React, { useState } from "react";
import * as S from "../.././../style/Login/UserInfo";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { Divider } from "@mui/material";
import { useCookies } from "react-cookie";

import UserIcon from "./UserIcon";
import UserMenuIcon from "./UserMenuIcon";
import SignUp from "../../signup/SignUp";
import Login from "../../login/Login";

function UserInfo() {
    const [signUpOpen, setSignUpOpen] = useState(false);
    const [loginOpen, setLoginOpen] = useState(false);
    const [anchorEl, setAnchorEl] = React.useState(null);

    const token = localStorage.getItem("token");

    // const dispatch = useDispatch();
    const [cookies, removeCookies] = useCookies(["accessToken"]);
    const open = Boolean(anchorEl);

    function handleSignUpOpen() {
        setSignUpOpen(true);
        setAnchorEl(null);
    }
    function handleSignUpClose() {
        setSignUpOpen(false);
    }
    function handleLoginOpen() {
        setLoginOpen(true);
        setAnchorEl(null);
    }
    function handleLoginClose() {
        setLoginOpen(false);
    }
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    function logout() {
        removeCookies("accessToken");
        handleClose();
        // dispatch(initRooms());
        //dispatch(initPage());
    }
    return (
        <>
            <S.UserInfoDiv>
                <S.UserInfoBtn
                    id="basic-button"
                    aria-controls={open ? "basic-menu" : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? "true" : undefined}
                    onClick={(event) => handleClick(event)}
                >
                    <UserMenuIcon />
                    <UserIcon />
                </S.UserInfoBtn>
                {!token ? (
                    <Menu
                        id="basic-menu"
                        anchorEl={anchorEl}
                        open={open}
                        onClose={handleClose}
                        MenuListProps={{
                            "aria-labelledby": "basic-button",
                        }}
                    >
                        <MenuItem onClick={cookies.accessToken ? () => logout() : () => handleLoginOpen()}>
                            {cookies.accessToken ? "로그아웃" : "로그인"}
                        </MenuItem>
                        <Divider />
                        <MenuItem onClick={() => handleSignUpOpen()}>회원가입</MenuItem>
                    </Menu>
                ) : null}
            </S.UserInfoDiv>
            <SignUp
                open={signUpOpen}
                handleClose={() => handleSignUpClose()}
            />
            <Login
                open={loginOpen}
                handleClose={() => handleLoginClose()}
            />
        </>
    );
}

export default UserInfo;
