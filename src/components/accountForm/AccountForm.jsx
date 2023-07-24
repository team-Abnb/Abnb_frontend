import React, { useState } from "react";
import { TextField, Modal, Grid } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
// import styled from "@emotion/styled";

import * as S from "../../style/Account/Account";

function AccountForm({ open, isLogin, handleClose }) {
    const [modal, setModal] = useState(false);

    const handler = () => {
        setModal(!modal);
    };

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
                    <S.H3>에어비앤비에 오신 것을 환영합니다.</S.H3>
                    <S.DivBox>
                        <TextField
                            fullWidth
                            id="outlined-basic"
                            label="Email"
                            variant="outlined"
                        />
                    </S.DivBox>

                    {isLogin ? null : (
                        <S.DivBox>
                            <TextField
                                fullWidth
                                id="outlined-basic"
                                label="닉네임"
                                variant="outlined"
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
                            helperText={isLogin ? "" : "비밀번호는 영문, 숫자, 특수기호가 적어도 1개 이상씩 포함 된 8자 ~ 20자여야 합니다."}
                        />
                    </S.DivBox>
                    <S.Btn>계속</S.Btn>
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
                                <S.Btn>이메일 중복 확인</S.Btn>
                            </Grid>
                            <Grid
                                item
                                xs={4}
                                sm={4}
                                md={4}
                            >
                                <S.Btn>닉네임 중복 확인</S.Btn>
                            </Grid>
                        </Grid>
                    )}
                </S.Inner>
            </S.Boxes>
        </Modal>
    );
}

export default AccountForm;
