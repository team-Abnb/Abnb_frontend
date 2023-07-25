import { useState, useEffect } from "react";
import * as S from "../../style/Detail/DetailPage";

function DetailHeader() {
    const [scrollPosition, setScrollPosition] = useState(0);

    const updateScroll = () => {
        setScrollPosition(window.scrollY || document.documentElement.scrollTop);
    };

    useEffect(() => {
        window.addEventListener("scroll", updateScroll);

        return () => {
            window.removeEventListener("scroll", updateScroll);
        };
    }, []);

    const headerStyle = {
        width: "100vw",
        height: "80px",
        backgroundColor: "#ffffff",
        borderBottom: "1px solid #ebebeb",
        position: "fixed",
        zIndex: "990",
        transition: "5s",
        display: scrollPosition > 652 ? "block" : "none",
    };

    return (
        <div style={headerStyle}>
            <S.Menu>
                <div>사진</div>
                <div>편의시설</div>
                <div>후기</div>
                <div>위치</div>
            </S.Menu>
        </div>
    );
}

export default DetailHeader;
