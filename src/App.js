import { Provider } from "react-redux";

import store from "./store";

import InvestmantCard from "./components/InvestmantCard";

function App() {
  return (
    <Provider store={store}>
      <InvestmantCard />
    </Provider>
  );
}

export default App;
