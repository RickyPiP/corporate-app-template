import React from "react";
/** @jsxImportSource @emotion/react */
import tw from "twin.macro";

type SupportProps = {
  children: React.ReactNode;
};

const SupportComponent = ({ children }: SupportProps) => {
  return (
    <div tw="flex   justify-between items-center space-x-2 ml-3 ">
      <div tw="font-medium">Support</div>
      <div>
        <img
          tw="inline-block h-10 w-10 rounded-full"
          src="https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=256&h=256&q=80"
          alt=""
        />
      </div>
      {children}
    </div>
  );
};

export default SupportComponent;
