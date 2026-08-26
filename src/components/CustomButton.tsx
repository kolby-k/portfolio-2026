import type { PropsWithChildren } from "react";

interface CustomButtonProps extends PropsWithChildren {
  handleClick?: () => void;
  variant?: "default" | "outline" | "secondary" | "ghost" | "link";
  size?: "xs" | "sm" | "md" | "lg" | "xl";
  visible?: boolean;
  style?: string;
}

function CustomButton({
  handleClick = () => console.log("Click"),
  children = "Button",
  variant = "default",
  size = "sm",
  visible = true,
  style = "",
}: CustomButtonProps) {
  if (!visible) return null;

  return (
    <button
      onClick={handleClick}
      className={`custom_button btn_variant_${variant} btn_size_${size} ${style}`}
    >
      {children}
    </button>
  );
}

export default CustomButton;
