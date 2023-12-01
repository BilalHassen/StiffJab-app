import logo from "./logo.svg";
import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/homePage";
function App() {
  return (
    <>
      <BrowserRouter>
        <Route path="/" element={<HomePage />}></Route>
      </BrowserRouter>
    </>
  );
}

export default App;
