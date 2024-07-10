import React from "react";
import { Provider } from "react-redux";
import store from "./redux/store";
import GameFrame from "./components/GameFrame";
import GlobalStyles from "./styles/GlobalStyles";

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <GlobalStyles />
      <GameFrame />
    </Provider>
  );
};

export default App;
