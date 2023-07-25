import * as S from "../style/Detail/DetailPage";

import DetailHeader from "../components/Detail/DetailHeader";
import Title from "../components/Detail/Title";
import ImageLists from "../components/Detail/ImageLists";
import Information from "../components/Detail/Information";
import CommentsBox from "../components/Detail/CommentsBox";
import OrderBox from "../components/Detail/OrderBox";
import PlaceLocation from "../components/Detail/PlaceLocation";

function DetailPage() {
    return (
        <>
            <DetailHeader />
            <S.DetailPage>
                <Title />
                <ImageLists />
                <div className="information">
                    <Information />
                    <OrderBox />
                </div>
                <CommentsBox />
                <PlaceLocation />
            </S.DetailPage>
        </>
    );
}

export default DetailPage;
