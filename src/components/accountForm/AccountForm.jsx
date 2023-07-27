import React, { useEffect, useState, useRef, useCallback } from "react";
import { TextField, Modal, Grid } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import * as S from "../../style/Account/Account";
import { useMutation } from "react-query";
import { addUsers, login } from "../../axios/api";

function AccountForm({ open, isLogin, handleClose }) {
    const [checkEmail, setCheckEmail] = useState(false);
    const [checkNick, setCheckNick] = useState(false);
    const [disable, setDisable] = useState(true);
    const contentInput = useRef();
    const [email, setEmail] = useState("");
    const [nickname, setNickName] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPwd, setconfirmPwd] = useState("");
    const [modal, setModal] = useState(false);
    const [confirmPwdMsg, setConfirmPwdMsg] = useState("");

    const passwordCheck = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{8,20}$/;
    const emailCheck =
        /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    const handler = () => {
        setModal(!modal);
        contentInput.current.value = "";
    };

    function onEmailChangeHandler(event) {
        const CurrEmail = event.target.value;
        setEmail(CurrEmail);
        setCheckEmail(false);
        setDisable(false);
    }
    const loginMutation = useMutation(login, {
        onSuccess: () => {
            console.log("로그인 성공");
        },
    });

    function onLoginHandler() {
        const account = {
            email,
            password,
        };

        loginMutation.mutate(account);
        handleClose();
        setEmail("");
        setPassword("");

        alert("로그인되었습니다.");
    }

    function onNicknameChangeHandler(event) {
        setNickName(event.target.value);
        setCheckNick(false);
        setDisable(false);
    }

    function onPasswordChangeHandler(event) {
        setPassword(event.target.value);
    }

    function onCheckEmail(CheckEmail) {
        if (!emailCheck.test(email)) {
            alert("올바른 형식의 이메일 주소여야 합니다.");
            return;
        }
        if (checkEmail === true) {
            alert("이미 사용중인 이메일입니다.");
        } else {
            alert("사용가능한 이메일입니다.");
        }
    }

    function onCheckNick(checkNick) {
        if (nickname === "") {
            alert("닉네임은 필수 입력 값입니다.");
            return;
        }
        if (checkNick === true) {
            alert("이미 사용중인 닉네임입니다.");
        } else {
            alert("사용가능한 닉네임입니다.");
        }
    }

    const onChangeConfirmPwd = useCallback(
        (e) => {
            const currConfirmPwd = e.target.value;
            setconfirmPwd(currConfirmPwd);

            if (currConfirmPwd !== password) {
                setConfirmPwdMsg("비밀번호가 일치하지 않습니다.");
            } else {
                setConfirmPwdMsg("올바른 비밀번호입니다.");
            }
            setDisable(false);
        },
        [password]
    );

    const addNewUserMutation = useMutation(addUsers, {
        onSuccess: () => {
            alert("회원가입 되었습니다.");
        },
    });

    function onSubmitHandler() {
        if (!passwordCheck.test(password)) {
            alert("올바른 형식의 비밀번호여야 합니다.");
        } else {
            const newUser = {
                email: email,
                username: nickname,
                password: password,
            };

            addNewUserMutation.mutate(newUser);
            setEmail("");
            setPassword("");
            setNickName("");
            setconfirmPwd("");
            handleClose();
        }
    }

    useEffect(() => {
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
            <S.Boxes>
                <S.Header>
                    <S.CloseIconBtn
                        sx={{ minHeight: 0, minWidth: 0, padding: 0, color: "#222222" }}
                        size="small"
                        onClick={() => handleClose()}
                    >
                        <CloseIcon style={{ fontSize: 20 }} />
                    </S.CloseIconBtn>
                    {isLogin ? "로그인" : "회원가입"}
                    <S.Div />
                </S.Header>
                <S.Inner>
                    <S.DivBox>
                        <TextField
                            fullWidth
                            id="outlined-basic"
                            label="Email"
                            variant="outlined"
                            onChange={(event) => onEmailChangeHandler(event)}
                        />
                    </S.DivBox>
                    {isLogin ? null : (
                        <S.DivBox>
                            <TextField
                                fullWidth
                                id="outlined-basic"
                                label="닉네임"
                                variant="outlined"
                                value={nickname}
                                onChange={(event) => onNicknameChangeHandler(event)}
                            />
                        </S.DivBox>
                    )}
                    <S.DivBox>
                        <TextField
                            fullWidth
                            id="outlined-basic"
                            label="비밀번호"
                            variant="outlined"
                            type="password"
                            value={password}
                            helperText={isLogin ? "" : "비밀번호는 영문, 숫자, 특수기호가 적어도 1개 이상씩 포함 된 8자 ~ 20자여야 합니다."}
                            onChange={(event) => onPasswordChangeHandler(event)}
                        />
                        {isLogin ? null : (
                            <TextField
                                fullWidth
                                id="outlined-basic"
                                label="비밀번호 확인"
                                variant="outlined"
                                type="password"
                                value={confirmPwd}
                                onChange={(event) => onChangeConfirmPwd(event)}
                                helperText={confirmPwdMsg}
                            />
                        )}
                    </S.DivBox>
                    <S.Btn
                        disabled={isLogin ? false : disable}
                        onClick={
                            isLogin
                                ? (event) => {
                                      onLoginHandler();
                                  }
                                : (event) => {
                                      onSubmitHandler();
                                  }
                        }
                    >
                        계속
                    </S.Btn>
                    {isLogin ? null : (
                        <Grid
                            container
                            columns={9}
                        >
                            <Grid
                                item
                                sx={{ marginRight: "57px" }}
                                xs={4}
                                sm={4}
                                md={4}
                            >
                                <S.Btn onClick={() => onCheckEmail()}>이메일 중복 확인</S.Btn>
                            </Grid>
                            <Grid
                                item
                                xs={4}
                                sm={4}
                                md={4}
                            >
                                <S.Btn onClick={() => onCheckNick()}>닉네임 중복 확인</S.Btn>.{" "}
                            </Grid>
                        </Grid>
                    )}
                </S.Inner>
            </S.Boxes>
        </Modal>
    );
}

export default AccountForm;
