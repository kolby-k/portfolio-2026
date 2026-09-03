import styles from "../header.module.css";
import CustomButton from "../../../components/CustomButton";
import type { HeaderPathOptions } from "../types";
import { GoSun, GoMoon } from "react-icons/go";
import type { Theme } from "../../../context/ThemeContext";
import { proper } from "../../../utils";

type DesktopMenuProps = {
  handleNavigation: (path: HeaderPathOptions) => void;
  theme: Theme;
  isDark: boolean;
  toggleTheme: () => void;
  activePath: HeaderPathOptions | null;
};

function DesktopMenu({
  handleNavigation,
  theme,
  isDark,
  toggleTheme,
  activePath,
}: DesktopMenuProps) {
  console.log(`TODO: css for active path ${activePath}`);
  return (
    <>
      <div className={styles.links}>
        <CustomButton
          handleClick={() => handleNavigation("/projects")}
          variant="link"
          size="lg"
        >
          All Projects
        </CustomButton>
        <CustomButton
          handleClick={() => handleNavigation("/#timeline")}
          variant="link"
          size="lg"
        >
          Timeline
        </CustomButton>
      </div>
      <span className="hide-mobile">
        <CustomButton handleClick={toggleTheme} size="sm">
          {proper(theme)} {isDark ? <GoMoon /> : <GoSun />}
        </CustomButton>
      </span>
    </>
  );
}

export default DesktopMenu;
