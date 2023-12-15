import logo from "./logo.svg";
import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Header from "./components/Header/Header";
import OpponentMatch from "./pages/OpponentMatch/OpponentMatch";
import ContactPage from "./pages/ContactPage/ContactPage";
function App() {
  return (
    <>
      <BrowserRouter>
        {/* <Header /> */}
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/opponent-match" element={<OpponentMatch />}></Route>
          <Route path="/contact-page" element={<ContactPage />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
