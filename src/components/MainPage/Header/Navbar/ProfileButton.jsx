import { styled } from "styled-components"
import UserIcon from "./UserIcon"
import UserToggle from "./UserToggle"


function ProfileButton() {
  return (
    <ProfileLayout>
        <ToggleButton>
          <div>
            <UserToggle/>
          </div>
          <div>
            <UserIcon/>
          </div>
        </ToggleButton>
    </ProfileLayout>
  )
}
export default ProfileButton

const ProfileLayout = styled.div`

`

const ToggleButton = styled.button`
    padding : 5px 5px 5px 12px;
    background-color : transparent;
    border : 1px solid #DDDDDD;
    cursor : pointer;
    text-align : inherit;
    border-radius : 21px;
    height : 42px;
    outline : none;
    display : flex;
    align-items : center;
    &:hover{
      box-shadow : 0.1px 0.1px 1px
    }
`