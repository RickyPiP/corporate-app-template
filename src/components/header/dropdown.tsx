import React, { useEffect, useRef, useCallback } from "react";
/** @jsxImportSource @emotion/react */
import tw from "twin.macro";
import { Link } from "react-router-dom";
import { click } from "@testing-library/user-event/dist/click";
import useDropdown from "../../hooks/usePopups";
import { LinkData } from "../../assets/data";
import useOutsideClick from "../../hooks/useOutsideClick";

type DropdownProps = {
  isOpen: any;
  toggleDropdown: () => void;
  closeDropdown: () => void;
};

export const Dropdown = ({
  isOpen,
  toggleDropdown,
  closeDropdown,
}: DropdownProps) => {
  const ref = useRef<HTMLDivElement>(null);
  useOutsideClick(
    ref,
    useCallback(() => closeDropdown(), [closeDropdown])
  );

  const Links = LinkData.map(item => {
    return (
      <Link
        key={item.name}
        to={item.to}
        onClick={toggleDropdown}
        tw="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
      >
        {item.name}
      </Link>
    );
  });

  return (
    <div
      css={[
        tw` hidden absolute z-10 top-0 inset-x-0 p-2 transition transform origin-top-right`,
        isOpen && tw`block md:hidden`,
      ]}
      ref={ref}
      id="ricky"
    >
      <div tw="rounded-lg shadow-md bg-white ring-1 ring-black ring-opacity-5 overflow-hidden">
        <div tw="px-5 pt-4 flex items-center justify-between">
          <div>
            <img
              tw="h-8 w-auto"
              src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
              alt=""
            />
          </div>
          <div tw="-mr-2">
            <button
              onClick={() => toggleDropdown()}
              type="button"
              tw="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
            >
              <svg
                tw="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>
        <div tw="px-2 pt-2 pb-3 space-y-1 ">{Links}</div>
        <a
          href="#"
          tw="block w-full px-5 py-3 text-center font-medium text-indigo-600 bg-gray-50 hover:bg-gray-100"
        >
          {" "}
          Log in{" "}
        </a>
      </div>
    </div>
  );
};
