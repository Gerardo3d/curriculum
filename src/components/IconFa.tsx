import React from "react";
import * as icons from "react-icons/fa";
import { VscError } from "react-icons/vsc";

type IconFaProps = {
    title?: string;
    name?: string;
    color?: string;
    size?: string;
};

const IconFa:React.FC<IconFaProps> = ({title="error", name="", color="", size="1em"}) => {
    const Icon = name && icons[name as keyof typeof icons];

    return (
        <>
            {Icon ?
            <Icon color={color} size={size} title={title}/>:
            <VscError color="red" size={size} title={title}/>
            }
        </>
    );
};

export default IconFa;