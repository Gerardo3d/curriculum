import React from "react";
import IconFa from "./IconFa";

type IconLinkProps = {
  name?: string;
  url?: string;
  icon?: string;
  color?: string;
  size?: string;
};

const IconLink: React.FC<IconLinkProps> = ({
  name,
  url,
  icon,
  color,
  size,
}) => {
  const openInNewTab = () => {
    window.open(url, "_blank", "noreferrer");
  };

  return (
    <div className="pointer" onClick={() => openInNewTab()}>
      <IconFa name={icon} color={color} size={size} title={name} />
    </div>
  );
};

export default IconLink;
