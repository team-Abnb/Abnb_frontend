import React, { useEffect, useState, useRef, useCallback } from 'react';
import { TextField, Box, Modal, IconButton, Grid } from '@mui/material';
import styled from 'styled-components';
import CloseIcon from '@mui/icons-material/Close';
import { useDispatch, useSelector } from 'react-redux';
import { useCookies, setCookie, cookies } from 'react-cookie';
import {
    signUp,
    login,
    clearEmailDuplicate,
    clearNickDuplicate,
    clearDuplicate,
    checkDuplicationEmail,
    checkDuplicationNickname,
} from '../../redux/modules/loginSlice';
import { initPage, initRooms } from '../../redux/modules/roomSlice';

function AccountForm({ open, isLogin, handleClose }) {
    const duplicate = useSelector(state => state.login.duplicate);
    const [checkEmail, setCheckEmail] = useState(false);
    const [checkNick, setCheckNick] = useState(false);
    const [disable, setDisable] = useState(true);
    const contentInput = useRef();
    const [email, setEmail] = useState('');
    const [nickname, setNickName] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPwd, setconfirmPwd] = useState('');
    const [modal, setModal] = useState(false);
    const [pwdMsg, setPwdMsg] = useState('');
    const [confirmPwdMsg, setConfirmPwdMsg] = useState('');

    const passwordCheck = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{8,20}$/;
    const emailCheck =
        /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    const handler = () => {
        setModal(!modal);
        contentInput.current.value = '';
    };

    const dispatch = useDispatch();

    function onEmailChangeHandler(event) {
        setEmail(event.target.value);
        setCheckEmail(false);
        setDisable(false);
        dispatch(clearEmailDuplicate());
    }

    function onLoginHandler() {
        handleClose();
        const account = {
            email,
            password,
        };
        dispatch(login({ ...account, setCookie }));
        setEmail('');
        setPassword('');
    }

    function onNicknameChangeHandler(event) {
        setNickName(event.target.value);
        setCheckNick(false);
        setDisable(false);
        dispatch(clearNickDuplicate());
    }

    function onPasswordChangeHandler(event) {
        setPassword(event.target.value);
    }

    function onCheckEmail(CheckEmail) {
        if (!emailCheck.test(email)) {
            alert('올바른 형식의 이메일 주소여야 합니다.');
            dispatch(clearEmailDuplicate());
            return;
        }
        dispatch(checkDuplicationEmail(email));
        if (checkEmail === true) {
            alert('이미 사용중인 이메일입니다.');
        } else {
            alert('사용가능한 이메일입니다.');
        }
    }

    function onCheckNick(checkNick) {
        if (nickname === '') {
            alert('닉네임은 필수 입력 값입니다.');
            dispatch(clearEmailDuplicate());
            return;
        }
        dispatch(checkDuplicationNickname(nickname));
        if (checkNick === true) {
            alert('이미 사용중인 닉네임입니다.');
        } else {
            alert('사용가능한 닉네임입니다.');
        }
    }

    const onChangeConfirmPwd = useCallback(
        e => {
            const currConfirmPwd = e.target.value;
            setconfirmPwd(currConfirmPwd);

            if (currConfirmPwd !== password) {
                setConfirmPwdMsg('비밀번호가 일치하지 않습니다.');
            } else {
                setConfirmPwdMsg('올바른 비밀번호입니다.');
            }
            setDisable(false);
        },
        [password],
    );

    function onSubmitHandler() {
        if (!passwordCheck.test(password)) {
            alert('올바른 형식의 비밀번호여야 합니다.');
        } else {
            alert('회원가입 되었습니다.');
        }
        const account = {
            email,
            nickname,
            password,
        };
        dispatch(signUp(account));
        dispatch(clearDuplicate());
        setEmail('');
        setPassword('');
        setNickName('');
        setconfirmPwd('');
        handleClose();
    }

    useEffect(() => {
        dispatch(initRooms());
        dispatch(initPage());
    }, [cookies]);

    useEffect(() => {
        setCheckEmail(!duplicate.emailDuplicate);
        setCheckNick(!duplicate.nickDuplicate);
        // console.log(duplicate.emailDuplicate, duplicate.nickDuplicate);
    }, [duplicate.emailDuplicate, duplicate.nickDuplicate]);

    useEffect(() => {
        // console.log(checkEmail, checkNick);
        if (checkEmail && checkNick && passwordCheck.test(password)) setDisable(false);
        else setDisable(true);
    }, [checkEmail, checkNick, password]);

    return (
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <StBox>
                <StHeader>
                    <StCloseIconBtn
                        sx={{ minHeight: 0, minWidth: 0, padding: 0, color: '#222222' }}
                        size="small"
                        onClick={() => handleClose()}
                    >
                        <CloseIcon style={{ fontSize: 20 }} />
                    </StCloseIconBtn>
                    {isLogin ? '로그인' : '회원가입'}
                    <StDiv />
                </StHeader>
                <StInner>
                    <StDivBox>
                        <TextField
                            fullWidth
                            id="outlined-basic"
                            label="Email"
                            variant="outlined"
                            onChange={event => onEmailChangeHandler(event)}
                        />
                    </StDivBox>
                    {isLogin ? null : (
                        <StDivBox>
                            <TextField
                                fullWidth
                                id="outlined-basic"
                                label="닉네임"
                                variant="outlined"
                                value={nickname}
                                onChange={event => onNicknameChangeHandler(event)}
                            />
                        </StDivBox>
                    )}
                    <StDivBox>
                        <TextField
                            fullWidth
                            id="outlined-basic"
                            label="비밀번호"
                            variant="outlined"
                            type="password"
                            value={password}
                            helperText={
                                isLogin
                                    ? ''
                                    : '비밀번호는 영문, 숫자, 특수기호가 적어도 1개 이상씩 포함 된 8자 ~ 20자여야 합니다.'
                            }
                            onChange={event => onPasswordChangeHandler(event)}
                        />
                        {isLogin ? null : (
                            <TextField
                                fullWidth
                                id="outlined-basic"
                                label="비밀번호 확인"
                                variant="outlined"
                                type="password"
                                value={confirmPwd}
                                onChange={event => onChangeConfirmPwd(event)}
                                helperText={confirmPwdMsg}
                            />
                        )}
                    </StDivBox>
                    <StBtn
                        disabled={isLogin ? false : disable}
                        onClick={isLogin ? () => onLoginHandler() : () => onSubmitHandler()}
                    >
                        계속
                    </StBtn>
                    {isLogin ? null : (
                        <Grid container columns={9}>
                            <Grid item sx={{ marginRight: '57px' }} xs={4} sm={4} md={4}>
                                <StBtn onClick={() => onCheckEmail()}>이메일 중복 확인</StBtn>
                            </Grid>
                            <Grid item xs={4} sm={4} md={4}>
                                <StBtn onClick={() => onCheckNick()}>닉네임 중복 확인</StBtn>
                            </Grid>
                        </Grid>
                    )}
                </StInner>
            </StBox>
        </Modal>
    );
}
const StCloseIconBtn = styled(IconButton)`
    flex: 0 0 16px !important;
    text-align: left !important;
`;

const StBtn = styled.button`
    cursor: pointer;
    font-family: var(--font-light);
    display: inline-block !important;
    margin: 0px !important;
    position: relative !important;
    text-align: center !important;
    text-decoration: none !important;
    touch-action: manipulation !important;
    /* font-family: var(--e-ls-qkw) !important; */
    font-size: 16px !important;
    line-height: 20px !important;
    font-weight: 600 !important;
    border-radius: 8px;
    outline: none !important;
    padding: 14px 24px !important;
    transition:
        box-shadow 0.2s ease 0s,
        -ms-transform 0.1s ease 0s,
        -webkit-transform 0.1s ease 0s,
        transform 0.1s ease 0s !important;
    border: none !important;
    background: linear-gradient(to right, rgb(230, 30, 77) 0%, rgb(227, 28, 95) 50%, rgb(215, 4, 102) 100%);
    color: rgb(255, 255, 255) !important;
    width: 100% !important;
    margin-bottom: 24px !important;
    margin-top: 16px !important;
    &:disabled {
        opacity: 0.6;
        cursor: not-allowed;
    }
`;

const StInner = styled(Box)`
    padding: 24px !important;
    flex: 1 1 auto !important;
    overflow-y: auto !important;
    outline: none !important;
`;

const StH3 = styled.h3`
    font-family: var(--font-medium);
    font-size: 22px !important;
    line-height: 26px !important;
    color: rgb(34, 34, 34) !important;
    font-weight: 600 !important;
    margin-top: 8px !important;
    margin-bottom: 24px !important;
`;

const StDiv = styled.div`
    flex: 0 0 16px !important;
    text-align: right !important;
`;

const StHeader = styled.header`
    font-family: var(--font-medium);
    height: 64px !important;
    display: flex !important;
    flex: 0 0 auto !important;
    align-items: center !important;
    justify-content: space-between !important;
    padding: 0px 24px !important;
    border-bottom: 1px solid rgb(235, 235, 235) !important;
    color: rgb(34, 34, 34) !important;
    font-size: 16px !important;
    line-height: 20px !important;
    font-weight: 800 !important;
`;

const StBox = styled(Box)`
    outline: none;
    width: 100% !important;
    max-width: 568px !important;
    height: 100%;
    max-height: 682px !important;
    border-radius: 12px !important;
    background-color: #ffffff;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
`;
const StDivBox = styled.div`
    text-align: center;
    margin-top: 20px;
    justify-content: 10px;
`;

export default AccountForm;
