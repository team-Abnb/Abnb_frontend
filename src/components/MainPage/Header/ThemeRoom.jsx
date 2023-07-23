import { styled } from "styled-components"

function ThemeRoom() {
  return (
    <ThemeRoomLayout>
        <ThemeRoomBox>
            <ThemeButton>
                <ThemeButtonBox>
                    <img src='img/Hanok.jpeg' alt="Hanok.jpeg"/>
                    <ThemeSpan>한옥</ThemeSpan>
                </ThemeButtonBox>
            </ThemeButton>
            <ThemeButton>
                <ThemeButtonBox>
                    <img src='img/Castle.jpeg' alt="Castle.jpeg"/>
                    <ThemeSpan>캐슬</ThemeSpan>
                </ThemeButtonBox>
            </ThemeButton>
            <ThemeButton>
                <ThemeButtonBox>
                    <img src='img/Popular.jpeg' alt="Popular.jpeg"/>
                    <ThemeSpan>인기 급상승</ThemeSpan>
                </ThemeButtonBox>
            </ThemeButton>
            <ThemeButton>
                <ThemeButtonBox>
                    <img src='img/SwimPool.jpeg' alt="SwimPool.jpeg"/>
                    <ThemeSpan>멋진 수영장</ThemeSpan>
                </ThemeButtonBox>
            </ThemeButton>
            <ThemeButton>
                <ThemeButtonBox>
                    <img src='img/Tropics.jpeg' alt="Tropics.jpeg"/>
                    <ThemeSpan>열대 지역</ThemeSpan>
                </ThemeButtonBox>
            </ThemeButton>
        </ThemeRoomBox>
    </ThemeRoomLayout>
  )
}
export default ThemeRoom

const ThemeRoomLayout = styled.div`
    padding-inline-start: 100px;
    padding-inline-end : 100px;
    background-color : #ffffff;
    height : 78px;
    border-top : 1px solid #ebebeb;
    border-bottom : 1px solid #ebebeb;
    position : sticky;
    top : 80px;
    margin-bottom : 30px;
    display : flex;
    align-items : center;
    position : sticky;
    z-index : 10;
`

const ThemeRoomBox = styled.div`
    display : flex;
    height : 50px;
    width  :100%;
    justify-content : space-between;
`

const ThemeButton = styled.button`
    width : 70px;
    border-radius : 8px;
    border: none;
    background-color : transparent;
    cursor : pointer;
    display : flex;
    justify-content : center;
    padding : 4px 0 14px;
    color : rgb(110,110,110);
    img {
        width : 24px;
        height : 24px;
        margin-bottom : 8px;

    }
    transition-property : background-color;
    transition-duration : 0.2s;
    &:hover{
        background : rgb(215,215,215);
    }
`

const ThemeButtonBox = styled.div`
    display : flex;
    flex-direction : column;
    align-items : center;
`

const ThemeSpan = styled.span`
`