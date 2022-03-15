/** @jsxImportSource @emotion/react */
import React from "react";
import tw from "twin.macro";

type HamburgerProps = {
  onClick: (event: React.MouseEvent<HTMLElement>) => void;
};

export const HamburgerBtn = (props: HamburgerProps) => {
  return (
    <div
      tw="md:hidden hover:bg-gray-700 p-1 rounded-md cursor-pointer"
      onClick={props.onClick}
    >
      <span
        className="iconify"
        data-icon="charm:menu-hamburger"
        data-width="25"
        data-height="25"
      ></span>
    </div>
  );
};
