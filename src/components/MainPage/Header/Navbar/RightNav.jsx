import { styled,css } from "styled-components"
import RightNavButton from './RightNavButton';
import ProfileButton from './ProfileButton';
import {Link} from 'react-router-dom'
function RightNav() {
  return (
    <NavLayout>
        <LeftNavWrraper>
        <LeftNavBox>
            <StyledLink>
            <RoomCreateText>당신의 공간을 에어비엔비하세요</RoomCreateText>
            </StyledLink>
        </LeftNavBox>
        <RightNavButtonContainer>
            <RightNavButtonBox>
                <RightNavButton/>
            </RightNavButtonBox>
        </RightNavButtonContainer>
        </LeftNavWrraper>
        <div>
            <ProfileButton/>
        </div>
    </NavLayout>
  )
}
export default RightNav


const NavLayout = styled.nav`
    height : 80px;
    display : flex;
    align-items : center;
    justify-content : flex-end;
    flex : 1 0 140px;
    width : 100%;
`

const LeftNavBox = styled.div`
    padding : 12px;
    border-radius : 22px;
    height : 18px;
    white-space: nowrap;
    &:hover{
        background-color : #f2f2f2;
    }
`

const RoomCreateText = styled.div`
    display : flex;
    align-items : center;
    height : 100%;
`

const RightNavButtonBox = styled.div`
`

const LeftNavWrraper = styled.div`
    display : flex;
    align-items : center;
    gap : 10px;
`

const RightNavButtonContainer = styled.button`
    background : transparent;
    border : 0;
    cursor : pointer;
    margin-right : 8px;
    padding  : 12px;
    border-radius : 18px;
    &:hover{
        background-color : #f2f2f2;
    }
`


const StyledLink = styled(Link)`
    text-decoration : none;

    &:focus,
    &:hover,
    &:visited,
    &:link,
    &:active {
        color : #222222;
        text-decoration : none;
    }
`