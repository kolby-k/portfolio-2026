import { useNavigate } from "react-router-dom";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";

export type NavButtonProps = {
  title: string;
  to: string | number;
  hint?: "forward" | "back";
};

function NavButton({ title, to, hint }: NavButtonProps) {
  const navigate = useNavigate();

  const handleClick = () => {
    if (typeof to === "number") {
      navigate(to);
    } else {
      navigate(to);
    }
  };
  return (
    <button className="nav-button" onClick={handleClick} title={title}>
      {hint === "back" && <BsArrowLeft className="font-icon" />}
      {title}
      {hint === "forward" && <BsArrowRight />}
    </button>
  );
}

export default NavButton;
