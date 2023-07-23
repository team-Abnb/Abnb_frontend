import Grids from "../components/MainPage/Body/Grids";
import Navbar from "../components/MainPage/Header/Navbar";
import ThemeRoom from "../components/MainPage/Header/ThemeRoom";
import { ThemeProvider } from 'styled-components';
import theme from "../components/MainPage/Header/Navbar/theme";
function MainPage() {
  return (
    <>
    <ThemeProvider theme={theme}>
      <Navbar />
      <ThemeRoom/>
      <Grids/>
    </ThemeProvider>
    </>
  );
}
export default MainPage;
