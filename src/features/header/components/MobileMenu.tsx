import CustomButton from "../../../components/CustomButton";
import styles from "../header.module.css";
import { CiViewTimeline, CiSquareChevRight } from "react-icons/ci";
import { GoSun, GoMoon } from "react-icons/go";
import { RxHamburgerMenu } from "react-icons/rx";
import type { HeaderPathOptions } from "../types";
import type { Theme } from "../../../context/ThemeContext";
import { proper } from "../../../utils";
import { useState } from "react";
import { PiHouseLineThin } from "react-icons/pi";
type MobileMenuProps = {
  handleNavigation: (path: HeaderPathOptions) => void;
  theme: Theme;
  isDark: boolean;
  toggleTheme: () => void;
  activePath: HeaderPathOptions | null;
};

function MobileMenu({
  handleNavigation,
  theme,
  isDark,
  toggleTheme,
  activePath,
}: MobileMenuProps) {
  const [menuVisible, setMenuVisible] = useState<boolean>(false);

  const onNavigation = (path: HeaderPathOptions) => {
    if (menuVisible) {
      setMenuVisible(false);
    }
    handleNavigation(path);
  };

  return (
    <div className={styles.linksMobile}>
      <CustomButton
        handleClick={() => setMenuVisible((prev) => !prev)}
        variant="ghost"
        size="lg"
      >
        <RxHamburgerMenu />
      </CustomButton>
      {menuVisible && (
        <div className={styles.menuWrapper}>
          <div className={styles.menuThemeSection}>
            <h4>Theme</h4>
            <CustomButton handleClick={toggleTheme} size="sm">
              {proper(theme)} {isDark ? <GoMoon /> : <GoSun />}
            </CustomButton>
          </div>
          <div className={styles.menuList}>
            <CustomButton
              handleClick={() => onNavigation("/")}
              variant="link"
              size="sm"
              style={`${styles.mobileMenuListItem} ${activePath === "/" ? styles.mobileListItemActive : ""}`}
            >
              <PiHouseLineThin className={styles.menuMobileIcon} />
              Home
            </CustomButton>
            <CustomButton
              handleClick={() => onNavigation("/projects")}
              variant="link"
              size="sm"
              style={`${styles.mobileMenuListItem} ${activePath === "/projects" ? styles.mobileListItemActive : ""}`}
            >
              <CiSquareChevRight className={styles.menuMobileIcon} />
              All Projects
            </CustomButton>
            <CustomButton
              handleClick={() => onNavigation("/#timeline")}
              variant="link"
              size="sm"
              style={`${styles.mobileMenuListItem} ${activePath === "/#timeline" ? styles.mobileListItemActive : ""}`}
            >
              <CiViewTimeline className={styles.menuMobileIcon} />
              Timeline
            </CustomButton>
          </div>
        </div>
      )}
    </div>
  );
}

export default MobileMenu;
