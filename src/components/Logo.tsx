import { Link } from "react-router-dom";

type LogoProps = {
  size: "small" | "medium" | "large";
  style?: string;
};
function Logo({ size, style }: LogoProps) {
  return (
    <Link to={"/"} className="ghost-link">
      <span className={`logo logo_${size} ${style}`} aria-hidden="true" />
    </Link>
  );
}

export default Logo;
