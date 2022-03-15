import styled from "@emotion/styled";
import tw from "twin.macro";
import "twin.macro";

const IconWrapper = styled.div(
  tw` flex items-center justify-center py-2 w-1/3 rounded-md text-gray-600 shadow border-solid border border-gray-300 hover:cursor-pointer hover:bg-gray-100`
);

type IconProps = {
  icon: string;
};

const FormIcon = ({ icon }: IconProps) => {
  return (
    <IconWrapper tw="border-2">
      <span
        className="iconify"
        data-icon={icon}
        data-width="20"
        data-height="20"
      ></span>
    </IconWrapper>
  );
};

export default FormIcon;
