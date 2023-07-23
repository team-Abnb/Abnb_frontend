import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from "../pages/MainPage";
import DetailPage from "../pages/DetailPage";
import WishListPage from "../pages/WishListPage";
import Navbar from "../components/MainPage/Header/Navbar";
import Footer from "../components/Commen/Footer";
function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <MainPage />
            </>
          }
        ></Route>
        <Route
          path="detail"
          element={
            <>
              <DetailPage />
            </>
          }
        ></Route>
        <Route path="wishlist" element={<WishListPage />}></Route>
      </Routes>
    </BrowserRouter>
  );
}
export default Router;
