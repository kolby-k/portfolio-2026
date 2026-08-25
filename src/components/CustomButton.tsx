import type { PropsWithChildren } from "react";

interface CustomButtonProps extends PropsWithChildren {
  handleClick?: () => void;
  variant?: "default" | "outline" | "secondary" | "ghost" | "link";
  size?: "xs" | "sm" | "md" | "lg" | "xl";
}

function CustomButton({
  handleClick = () => console.log("Click"),
  children = "Button",
  variant = "default",
  size = "sm",
}: CustomButtonProps) {
  return (
    <button
      onClick={handleClick}
      className={`custom_button btn_variant_${variant} btn_size_${size}`}
    >
      {children}
    </button>
  );
}

export default CustomButton;
