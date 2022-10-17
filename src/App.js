import "./App.css";
import { Route, Routes } from "react-router-dom";
import Main from "./container/Main";
import FirstPage from "./container/FirstPage";
import SecondPage from "./container/SecondPage";
import ThirdPage from "./container/ThirdPage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Main />}>
          <Route index element={<FirstPage />} />
          <Route path="secondPage" element={<SecondPage />} />
          <Route path="thirdPage" element={<ThirdPage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
