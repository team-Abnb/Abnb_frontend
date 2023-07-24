import React, { useState } from 'react';
import AccountForm from '../component/accountForm/AccountForm';

function Main() {
    const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
    const [isSignUpModalOpen, setIsSignUpModalOpen] = useState(false);

    // 로그인 모달을 열기 위한 핸들러
    const handleOpenLoginModal = () => {
        setIsLoginModalOpen(true);
    };

    // 회원가입 모달을 열기 위한 핸들러
    const handleOpenSignUpModal = () => {
        setIsSignUpModalOpen(true);
    };

    // 모달 닫기 핸들러
    const handleCloseModal = () => {
        setIsLoginModalOpen(false);
        setIsSignUpModalOpen(false);
    };

    return (
        <div>
            {/* 홈페이지 컨텐츠 */}
            {/* 로그인 버튼 */}
            <button onClick={handleOpenLoginModal}>로그인</button>
            {/* 회원가입 버튼 */}
            <button onClick={handleOpenSignUpModal}>회원가입</button>

            {/* 로그인 모달 */}
            <AccountForm open={isLoginModalOpen} isLogin={true} handleClose={handleCloseModal} />

            {/* 회원가입 모달 */}
            <AccountForm open={isSignUpModalOpen} isLogin={false} handleClose={handleCloseModal} />
        </div>
    );
}

export default Main;
