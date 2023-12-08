import React from "react";
import { BrowserRouter, Route, Routes} from "react-router-dom";
import MainPage from "./pages/MainPage";
import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {

  return (
    <BrowserRouter>
    <Header />
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/LOGIN" element={<LoginPage />} />
    </Routes>
    <Footer />
    </BrowserRouter>
  )
}

export default App
