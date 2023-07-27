import * as S from "../../style/Detail/DetailPage";

function ChoosePeople({ countPeople, setCountPeople }) {
    // countPeople state 대신 selectedCount prop을 사용합니다.

    const addCount = () => {
        setCountPeople((prevCount) => prevCount + 1); // setCountPeople 함수를 호출하여 인원 수를 업데이트합니다.
    };

    const minusCount = () => {
        setCountPeople((prevCount) => prevCount - 1); // setCountPeople 함수를 호출하여 인원 수를 업데이트합니다.
    };

    if (countPeople < 1) {
        return (
            <S.ChoosePeople>
                <button>-</button>
                <div>{countPeople}</div>
                <button onClick={addCount}>+</button>
            </S.ChoosePeople>
        );
    }
    
    if (countPeople >= 20) {
        return (
            <S.ChoosePeople>
                <button onClick={minusCount}>-</button>
                <div>{countPeople}</div>
                <button>+</button>
            </S.ChoosePeople>
        );
    }

    return (
        <S.ChoosePeople>
            <button onClick={minusCount}>-</button>
            <div>{countPeople}</div>
            <button onClick={addCount}>+</button>
        </S.ChoosePeople>
    );
}

export default ChoosePeople;
