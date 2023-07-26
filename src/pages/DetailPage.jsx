import * as S from "../style/Detail/DetailPage";

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
    const { isLoading, isError, data } = useQuery("post", () => getRoomsDetail(2));

    if (isLoading) {
        return <p>로딩중.....</p>;
    }

    if (isError) {
        return <p>오류가 발생하였습니다...!</p>;
    }

    // console.log("data", data);

    return (
        <>
            <TopBar />
            <DetailHeader />
            <S.DetailPage>
                <Title
                    title={data.title}
                    address={data.address}
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
                <CommentsBox />
                <PlaceLocation />
            </S.DetailPage>
        </>
    );
}

export default DetailPage;

// address
// :
// "dasdsd"
// content
// :
// "내용"
// createdAt
// :
// "2023-07-26 17:57"
// isWishList
// :
// false
// maxPeople
// :
// 3
// modifiedAt
// :
// "2023-07-26 17:57"
// price
// :
// 50000
// roomId
// :
// 1
// roomPictures
// :
// (3) ['https://abnb-clone-project.s3.ap-northeast-2.amazo…/roomPicture/ea5a6529-4dca-4538-97fe-c5c5598a0d57', 'https://abnb-clone-project.s3.ap-northeast-2.amazo…/roomPicture/7e49649b-25b5-46d1-9301-4e3ec15f2f82', 'https://abnb-clone-project.s3.ap-northeast-2.amazo…/roomPicture/217fb595-64eb-49a2-9482-9ef6ff374bca']
// theme
// :
// "오션뷰"
// title
// :
// "RDS에 작성"
// userId
// :
// 1
// userName
// :
// "tester"
// userProfilePicture
// :
// null
