import React, { useContext } from "react";
import Header from "./components/header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./components/home-page";
import CompanyPage from "./components/company-page";
import Blog from "./components/blog-page";
import TestimonialPage from "./components/testimonial-page";
import FaqPage from "./components/faq-page";
import Footer from "./components/footer";
import SingleBlogPage from "./components/blog-page/single-blog-page";
import { BlogData } from "./assets/data";
import NotFound from "./assets/not-found";
import LoginModal from "./components/modals/login-modal";
import Recovery from "./components/recovery-page";
import { AuthContext } from "./context/auth-context";
import usePopups from "./hooks/usePopups";
import { useState } from "react";

function App() {
  const [isDropdownOpen, toggleDropdown, setClose] = usePopups();
  const [isModalOpen, setIsModalOpen, closeModal] = usePopups();
  const [auth, setAuth] = useState<any>("");
  const [rememberMe, setRememberMe] = useState(null);
  const value: any = {
    auth,
    setAuth,
    setIsModalOpen,
    isDropdownOpen,
    toggleDropdown,
    setClose,
    isModalOpen,
    closeModal,
    rememberMe,
    setRememberMe,
  };
  return (
    <AuthContext.Provider value={value}>
      <BrowserRouter>
        <Header />

        <Routes>
          <Route path="/" element={<Homepage />}></Route>

          <Route path="/Company" element={<CompanyPage />}></Route>
          <Route path="/Blog" element={<Blog />}></Route>
          <Route
            path="/Blog/:id"
            element={<SingleBlogPage data={BlogData} />}
          ></Route>

          <Route path="/Testimonials" element={<TestimonialPage />}></Route>
          <Route path="/FAQ" element={<FaqPage />}></Route>
          <Route path="/Recovery" element={<Recovery />}></Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </AuthContext.Provider>
  );
}

export default App;
