import { Routes, Route, Navigate } from "react-router-dom";
import Header from "../Header/Header";
import Appstyled from "./AppStyled";
import HomePage from "../../pages/HomePage/HomePage";

const App = (): React.ReactElement => {
  return (
    <Appstyled>
      <Header />
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<HomePage />} />
      </Routes>
    </Appstyled>
  );
};

export default App;
