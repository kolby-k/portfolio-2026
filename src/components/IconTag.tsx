import type { ReactElement } from "react";
import { FaNodeJs } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { TbApi } from "react-icons/tb";

import { FaReact } from "react-icons/fa";
import { RiNextjsFill } from "react-icons/ri";
import { BsCss } from "react-icons/bs";
import { BiLogoPostgresql } from "react-icons/bi";
import { FaPython } from "react-icons/fa";
import { BsTypescript } from "react-icons/bs";
export type IconTagProps = {
  label: string;
  icon?: string;
};

function IconTag({ label, icon }: IconTagProps) {
  let iconElement: undefined | ReactElement;

  switch (icon?.toLowerCase()) {
    case "node.js":
      iconElement = <FaNodeJs className="icon" />;
      break;
    case "express":
      iconElement = <SiExpress className="icon" />;
      break;
    case "rest":
      iconElement = <TbApi className="icon" />;
      break;
    case "react.js":
      iconElement = <FaReact className="icon" />;
      break;
    case "next.js":
      iconElement = <RiNextjsFill className="icon" />;
      break;
    case "css":
      iconElement = <BsCss className="icon" />;
      break;
    case "sql":
      iconElement = <BiLogoPostgresql className="icon" />;
      break;
    case "python":
      iconElement = <FaPython className="icon" />;
      break;
    case "typescript":
      iconElement = <BsTypescript className="icon" />;
      break;
    default:
      break;
  }
  return (
    <div className={`icon-tag`}>
      {iconElement && iconElement}
      <p>{label}</p>
    </div>
  );
}

export default IconTag;
