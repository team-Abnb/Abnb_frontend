import {styled, ThemeProvider} from "styled-components";
import Logo from "./Navbar/Logo";
import RightNav from "./Navbar/RightNav";
import Search from "./ThemeRoom/Search";
import theme from './Navbar/theme';
function Navbar() {
  return (
    <ThemeProvider theme={theme}>
    <StHeaderLayout>
      <StHeaderWrraper>
        <StWrraper>
          <StLogoWrapper>
            <Logo />
          </StLogoWrapper>
          <StSearchWrraper>
            <Search />
          </StSearchWrraper>
          <RightNav />
        </StWrraper>
      </StHeaderWrraper>
    </StHeaderLayout>
    </ThemeProvider>
  );
}
export default Navbar;

const StHeaderLayout = styled.div`
  position: sticky;
  top: 0;
  z-index: 10;
  background-color: #ffffff;
  padding-inline-start: 80px;
  padding-inline-end: 80px;
`;

const StHeaderWrraper = styled.div`
  height: 80px;
  width: 100%;
  margin-bottom: 1px;
  position: relative;
`;

const StWrraper = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
  position: relative;
  width: 100%;
  min-width : 200px;
`;

const StLogoWrapper = styled.div`
  flex: 1 0 148px;
`;

const StSearchWrraper = styled.div`
  padding: 0 24px;
  text-align: center;
  flex: 0 1 auto;
  min-width: 348px;
`;
