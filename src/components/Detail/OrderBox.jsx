import { useState, useEffect } from "react";
import * as S from "../../style/Detail/DetailPage";
import { BsChevronDown } from "react-icons/bs";
import ChoosePeople from "./ChoosePeople";
import { StartDatePicker, FinishReactDatePicker } from "./DatePicker";

function OrderBox() {
    const [chooseBox, setChooseBox] = useState(false);
    const [scrollPosition, setScrollPosition] = useState(622);
    const [countPeople, setCountPeople] = useState(1);

    const [startDate, setStartDate] = useState(new Date());
    const [finishDate, setFinishDate] = useState(new Date());

    const showList = () => {
        setChooseBox(!chooseBox);
    };

    const updateScroll = () => {
        setScrollPosition(window.scrollY || document.documentElement.scrollTop);
    };

    useEffect(() => {
        window.addEventListener("scroll", updateScroll);
        return () => {
            window.removeEventListener("scroll", updateScroll);
        };
    }, []);

    useEffect(() => {
        const today = new Date();
        if (finishDate.getTime() < startDate.getTime()) {
            alert("finishDate는 startDate보다 이전 날짜일 수 없습니다.");
            setStartDate(today);
            setFinishDate(today);
        }
    }, [startDate, finishDate]);

    console.log(startDate);
    console.log(finishDate);
    
    return (
        <S.OrderBox>
            <div className="orderbox">
                <div className="orderInfo">
                    <h1>₩854,969 /박</h1>
                    <p>후기 32개</p>
                </div>
                <S.InputBox>
                    <S.Data>
                        <div className="startDate">
                            <StartDatePicker
                                startDate={startDate}
                                setStartDate={setStartDate}
                            />
                        </div>
                        <div className="finishDate">
                            <FinishReactDatePicker
                                finishDate={finishDate}
                                setFinishDate={setFinishDate}
                            />
                        </div>
                    </S.Data>
                    <S.People onClick={showList}>
                        <div>게스트 {countPeople}명</div>
                        <div>
                            <BsChevronDown />
                        </div>
                    </S.People>
                    {chooseBox && (
                        <ChoosePeople
                            countPeople={countPeople}
                            setCountPeople={setCountPeople}
                        />
                    )}
                    <S.OrderButton>예약하기</S.OrderButton>
                    <p>예약 확정 전에는 요금이 청구되지 않습니다.</p>
                    <div className="orderInfos">
                        <div>₩854,969 x 3박 </div>
                        <div>₩2,564,907</div>
                    </div>
                    <div className="orderInfos">
                        <div>청소비</div>
                        <div>₩198,445</div>
                    </div>
                    <div className="resultOrder">
                        <div>총 합계</div>
                        <div>₩2,763,352</div>
                    </div>
                </S.InputBox>
            </div>
        </S.OrderBox>
    );
}

export default OrderBox;
