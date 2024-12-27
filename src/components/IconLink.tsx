import React from "react";
import IconFa from "./IconFa";
import { Button, Stack } from "react-bootstrap";

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
    <Button variant="light" onClick={() => openInNewTab()}>
      <Stack direction="horizontal">
        <IconFa name={icon} color={color} size={size} />
        <div className="p-2">{name}</div>
      </Stack>
    </Button>
  );
};

export default IconLink;
