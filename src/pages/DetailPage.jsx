import * as S from "../style/Detail/DetailPage";

import { useParams } from "react-router-dom";
import { useQuery } from "react-query";
import { getRoomsDetail } from "../axios/api";

import TopBar from "../components/main/Topbar";
import DetailHeader from "../components/Detail/DetailHeader";
import Title from "../components/Detail/Title";
import ImageLists from "../components/Detail/ImageLists";
import Information from "../components/Detail/Information";
import CommentsBox from "../components/Detail/CommentsBox";
import OrderBox from "../components/Detail/OrderBox";
import PlaceLocation from "../components/Detail/PlaceLocation";

function DetailPage() {
    const param = useParams();
    const roomId = param.roomId;
    console.log(roomId);

    const { isLoading, isError, data } = useQuery("post", () => getRoomsDetail(roomId));

    if (isLoading) {
        return <p>로딩중.....</p>;
    }

    if (isError) {
        return <p>오류가 발생하였습니다...!</p>;
    }

    console.log(data);
    return (
        <>
            <TopBar />
            <DetailHeader />
            <S.DetailPage>
                <Title
                    roomId={data.roomId}
                    title={data.title}
                    address={data.address}
                    isWishList={data.isWishList}
                />
                <ImageLists roomPictures={data.roomPictures} />
                <div className="information">
                    <Information
                        userName={data.userName}
                        userProfilePicture={data.userProfilePicture}
                        content={data.content}
                        maxPeople={data.maxPeople}
                        theme={data.theme}
                    />
                    <OrderBox price={data.price} />
                </div>
                <CommentsBox roomId={data.roomId} />
                <PlaceLocation />
            </S.DetailPage>
        </>
    );
}

export default DetailPage;
