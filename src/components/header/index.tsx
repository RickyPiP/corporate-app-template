/** @jsxImportSource @emotion/react */
import tw from "twin.macro";
import { Container } from "../container";
import { Link } from "react-router-dom";
import { AccessBtn } from "../access-button";
import { HamburgerBtn } from "./hamburger-button";
import { Dropdown } from "./dropdown";
// import useDropdown from "../../hooks/useDropdown";
import useDropdown from "../../hooks/usePopups";
import { createContext, useState, useEffect, useContext } from "react";
import React from "react";
import usePopups from "../../hooks/usePopups";
import LoginModal from "../modals/login-modal";
import SupportComponent from "./support-component";
import { LinkData } from "../../assets/data";
import { AuthContext } from "../../context/auth-context";
import axios from "axios";

const Header = () => {
  const {
    auth,
    setAuth,
    setIsModalOpen,
    isDropdownOpen,
    toggleDropdown,
    setClose,
    isModalOpen,
    closeModal,
    rememberMe,
  }: any = useContext(AuthContext);

  React.useEffect(() => {
    const data = localStorage.getItem("authentication");
    const check = localStorage.getItem("check");
    console.log(check);
    if (data) {
      setAuth(JSON.parse(data));
    }
    if (!check) {
      localStorage.removeItem("authentication");
      setAuth("");
    }
  }, [setAuth]);

  React.useEffect(() => {
    if (rememberMe) {
      localStorage.setItem("authentication", JSON.stringify(auth));
    }
  }, [rememberMe, auth]);

  function removeAuth() {
    const search = () => {
      axios.post(
        "http://35.233.55.158:7350/v1/auth/signout",
        {},
        {
          headers: {
            Authorization: `bearer ${auth}`,
          },
        }
      );
    };
    search();
    console.log(auth);
    localStorage.removeItem("authentication");
  }

  const Links = LinkData.map(item => {
    return (
      <Link
        key={item.name}
        to={item.to}
        tw="no-underline font-medium text-white hover:text-gray-300"
      >
        {item.name}
      </Link>
    );
  });

  return (
    <div tw="text-white bg-gray-800 pb-10 pt-5">
      {/* <div tw="text-center" §={() => console.log(auth)}>
        click me
      </div> */}
      <Dropdown
        isOpen={isDropdownOpen}
        toggleDropdown={toggleDropdown}
        closeDropdown={setClose}
      />

      <Container>
        <div tw="flex justify-between items-center px-5 py-2 ">
          <Link to="/" tw="md:hidden">
            <img
              src="https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg"
              alt="logo"
              tw="h-10"
            ></img>
          </Link>

          <div tw="hidden  resize-none flex-shrink-0 md:block md:flex md:items-center md:space-x-5 lg:space-x-12">
            <Link to="/">
              <img
                src="https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg"
                alt="logo"
                tw="h-12"
              ></img>
            </Link>

            {Links}
          </div>
          <div>
            <HamburgerBtn
              onClick={() => {
                toggleDropdown();
              }}
            />
            <div tw="hidden md:block">
              {!auth ? (
                <AccessBtn
                  text="Log in"
                  handleClick={() => setIsModalOpen(true)}
                />
              ) : (
                <SupportComponent>
                  <div
                    onClick={() => {
                      setAuth("");
                      removeAuth();
                    }}
                  >
                    <AccessBtn text="Log out"></AccessBtn>
                  </div>
                </SupportComponent>
              )}
            </div>
          </div>
        </div>
      </Container>

      {isModalOpen && <LoginModal close={closeModal} />}
    </div>
  );
};

export default Header;
