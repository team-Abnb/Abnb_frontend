import React from "react";
import * as S from "./style/common/GlobalStyle";
import Router from "./shared/Router";
import { Provider } from "react-redux";
import store from "./redux/config/configStore";

function App() {
    return (
        <Provider store={store}>
            <S.GlobalStyle>
                <Router />;
            </S.GlobalStyle>
        </Provider>
    );
}
export default App;
