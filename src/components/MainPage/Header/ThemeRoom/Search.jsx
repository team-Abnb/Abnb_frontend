import { styled } from "styled-components";
import SearchIcon from "./SearchIcon";

function Search() {
  return (
    <SearchLayout>
      <CommentBox>
        <SearchComment placeholder="검색 시작하기"></SearchComment>
      </CommentBox>
      <IconBox>
        <SearchIcon />
      </IconBox>
    </SearchLayout>
  );
}

const SearchLayout = styled.div`
  background-color: #ffffff;
  border: 1px solid #dddddd;
  border-radius: 40px;
  box-shadow: 0 1px 2px rgb(0, 0, 0, 0.08), 0 1px 2px rgb(0, 0, 0, 0.08);
  transition: box-shadow 0.2 ease;
  display: flex;
  justify-content: space-between;
`;

const CommentBox = styled.div`
  display: flex;
  align-items: center;
  flex: 1 1 auto;
  line-height: 22px;
  font-weight: 500;
  text-overflow: ellipsis;
  padding: 0 16px;
`;

const IconBox = styled.div`
  margin: 7px 7px 7px 0;
  border-radius: 50%;
  padding: 10px;
  width: 12px;
  height: 12px;
  background-color: #ff385c;
  cursor: pointer;
  color: #ffffff;
`;

const SearchComment = styled.input`
  border: none;
  height : 70%;
  width : 100%;
`

export default Search;
