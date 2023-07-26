import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ImageUpload from '../components/post/ImageFile/ImageUpload';
// import { createRoom } from '../redux/modules/roomSlice';
import Topbar from '../components/main/Topbar';
import * as S from '../style/Room/RoomsAdd';
export default function RoomsAdd() {
    // 값을 담을 두 공간 필요 1. 제목 2. 내용
    // 따라서 2개의 useState가 필요 현재 상태를 저장하고
    // 변경할 수 있다.

    // const dispatch = useDispatch();
    const navigate = useNavigate();
    // selectList
    const selectList = ['house', 'Apartment', 'hotel'];
    const placeList = ['멋진수영장', '한옥', '열대지역', '인기급상승', '캐슬'];

    const initialRoomState = {
        title: '',
        description: '',
        price: 0,
        address: '',
        type: '',
        place: '',
    };

    const [rooms, setRooms] = useState(initialRoomState);
    const [imageFile, setImageFile] = useState(null);
    console.log('ImageFile', imageFile);
    console.log('Rooms', rooms);
    const imageCount = imageFile;

    // StInput값
    const onChangeHandler = e => {
        const { name, value } = e.target;
        setRooms(prevRooms => ({ ...prevRooms, [name]: value }));
    };
    // 추가하기 버튼
    const onSumitHandler = e => {
        if (Object.values(rooms).some(value => value.trim() === '') && imageCount >= 2) {
            return alert('모든 항목을 입력해주세요.');
        }
        // dispatch(
        //     createRoom({
        //         room: {
        //             ...rooms,
        //             price: parseFloat(rooms.price),
        //         },
        //         imageFile,
        //     }),
        // );
        navigate(`/`);
        setRooms(initialRoomState);
    };

    return (
        <div
            style={{
                maxWidth: '1920px',
                paddingInlineStart: '80px',
                paddingInlineEnd: '80px',
            }}
        >
            <Topbar />
            <S.Container>
                <S.P>당신의 공간을 에어비앤비하세요</S.P>
                <S.Border>
                    <ImageUpload setImageFile={setImageFile} />
                </S.Border>
                <S.Border>
                    <S.SpanBar>숙소</S.SpanBar>
                    <S.Input
                        type="text"
                        name="title"
                        value={rooms.title}
                        onChange={onChangeHandler}
                        placeholder="제목을 입력해주세요"
                    />
                </S.Border>

                <br />
                <S.Border>
                    <S.SpanBar>내용</S.SpanBar>
                    <S.Input
                        type="text"
                        name="description"
                        value={rooms.description}
                        onChange={onChangeHandler}
                        placeholder="내용을 입력해주세요"
                    />
                </S.Border>

                <br />
                <S.Border>
                    <S.SpanBar>가격</S.SpanBar>
                    <S.Input
                        type="text"
                        name="price"
                        value={rooms.price}
                        onChange={onChangeHandler}
                        placeholder="가격을 입력해주세요"
                    />
                </S.Border>
                <br />
                <S.Border>
                    <S.SpanBar>주소</S.SpanBar>
                    <S.Input
                        type="text"
                        name="address"
                        value={rooms.address}
                        onChange={onChangeHandler}
                        placeholder="주소를 입력해주세요"
                    />
                </S.Border>

                <br />
                <S.Border>
                    <S.SpanBar>타입</S.SpanBar>
                    <S.Select
                        type=""
                        value={rooms.type}
                        onChange={e => {
                            setRooms({ ...rooms, type: e.target.value });
                            console.log(e.target.value);
                        }}
                    >
                        {selectList.map(item => (
                            <option value={item} key={item}>
                                {item}
                            </option>
                        ))}
                    </S.Select>
                </S.Border>

                <br />

                <S.Border>
                    <S.SpanBar>테마</S.SpanBar>
                    <S.Select
                        type=""
                        value={rooms.place}
                        onChange={e => {
                            setRooms({ ...rooms, place: e.target.value });
                            console.log(e.target.value);
                        }}
                    >
                        {placeList.map(t => (
                            <option value={t} key={t}>
                                {t}
                            </option>
                        ))}
                    </S.Select>
                </S.Border>
                <br />

                <S.SubmitBtn
                    type="button"
                    className="btn btn-primary"
                    onClick={() => {
                        onSumitHandler();
                    }}
                >
                    당신의 에어비앤비 작성하기
                </S.SubmitBtn>
            </S.Container>
        </div>
    );
}

// const Container = styled.div`
//     display: inline-block;
//     vertical-align: middle;
//     max-width: 1000px;
//     max-height: 1000px;
//     width: 70%;
//     height: 70%;
//     text-align: center;
//     padding-left: 180px;
//     justify-content: 10px;
// `;

// const P = styled.p`
//     font-family: var(--font-semibold);
//     font-size: 25px;
//     font-weight: bold;
//     display: inline-block;
//     margin: 20px;
//     text-align: center;
//     letter-spacing: 0.1px;
//     line-height: 1.5;
//     color: black;
//     text-decoration: underline;
// `;
// const StInput = styled.input`
//     font-family: var(--font-regular);
//     font-size: 15px;
//     font-weight: bold;
//     margin: 50px;
//     letter-spacing: 0.1px;
//     padding: 30px;
//     border-radius: 18px;
// `;

// const StSelect = styled.select`
//     font-size: 18px;
//     font-weight: bold;
//     margin: 50px;
//     letter-spacing: 0.1px;
//     padding: 30px;
//     border-radius: 18px;
// `;

// const StSubmitBtn = styled.button`
//     cursor: pointer !important;
//     display: inline-block !important;
//     margin: 0px !important;
//     position: relative !important;
//     text-align: center !important;
//     text-decoration: none !important;
//     touch-action: manipulation !important;
//     /* font-family: var(--e-ls-qkw) !important; */
//     font-size: 16px !important;
//     line-height: 20px !important;
//     font-weight: 500 !important;
//     border-radius: 8px;
//     outline: none !important;
//     padding: 14px 24px !important;
//     transition: box-shadow 0.2s ease 0s, -ms-transform 0.1s ease 0s, -webkit-transform 0.1s ease 0s,
//         transform 0.1s ease 0s !important;
//     border: none !important;
//     background: linear-gradient(
//         to right,
//         rgb(239, 143, 166) 0%,
//         rgb(219, 67, 118) 50%,
//         rgb(227, 25, 120) 100%
//     ) !important;
//     color: rgb(255, 255, 255) !important;
//     width: 100% !important;
//     margin-bottom: 24px !important;
//     margin-top: 16px !important;
// `;

// const StSpanBar = styled.span`
//     font-family: var(--font-light);
//     font-size: 17px;
// `;
// const StBorder = styled.div`
//     border-bottom: 1px solid gray;
//     font-weight: 600;
// `;

// // const StBox = styled.box`
// //   border: 10px solid red;
// // `;
