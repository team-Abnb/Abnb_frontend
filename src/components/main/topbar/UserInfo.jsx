/* eslint-disable no-shadow */
import React, { useState } from 'react';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { Divider } from '@mui/material';
import { useCookies } from 'react-cookie';
import { useDispatch } from 'react-redux';
import UserIcon from './UserIcon';
import UserMenuIcon from './UserMenuIcon';
import SignUp from '../../signup/SignUp';
import Login from '../../login/Login';
import { initPage, initRooms } from '../../../redux/modules/roomSlice';
import * as S from '../../../style/Login/UserInfo';
import { setSignUpOpen, setAnchorEl, setLoginOpen } from '../../../redux/modules/modalSlice';

function UserInfo() {
    // eslint-disable-next-line no-shadow
    const [signUpOpen, setSignUpOpen] = useState(false);
    const [loginOpen, setLoginOpen] = useState(false);
    const [anchorEl, setAnchorEl] = React.useState(null);

    const dispatch = useDispatch();
    const [cookies, removeCookies] = useCookies(['accessToken']);
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
    const handleClick = event => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    function logout() {
        removeCookies('accessToken');
        handleClose();
        dispatch(initRooms());
        dispatch(initPage());
    }
    return (
        <>
            <S.UserInfoDiv>
                <S.UserInfoBtn
                    id="basic-button"
                    aria-controls={open ? 'basic-menu' : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? 'true' : undefined}
                    onClick={event => handleClick(event)}
                >
                    <UserMenuIcon />
                    <UserIcon />
                </S.UserInfoBtn>
                <Menu
                    id="basic-menu"
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                    MenuListProps={{
                        'aria-labelledby': 'basic-button',
                    }}
                >
                    <MenuItem onClick={cookies.accessToken ? () => logout() : () => handleLoginOpen()}>
                        {cookies.accessToken ? '로그아웃' : '로그인'}
                    </MenuItem>
                    <Divider />
                    <MenuItem onClick={() => handleSignUpOpen()}>회원가입</MenuItem>
                </Menu>
            </S.UserInfoDiv>
            <SignUp open={signUpOpen} handleClose={() => handleSignUpClose()} />
            <Login open={loginOpen} handleClose={() => handleLoginClose()} />
        </>
    );
}

export default UserInfo;
