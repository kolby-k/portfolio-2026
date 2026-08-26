import { useNavigate } from "react-router-dom";
import CustomButton from "../../components/CustomButton";
import Logo from "../../components/Logo";
import useTheme from "../../hooks/useTheme";
import { proper } from "../../utils";
import styles from "./header.module.css";
import { GoSun, GoMoon } from "react-icons/go";
import { RxHamburgerMenu } from "react-icons/rx";
import { useState } from "react";
import { CiViewTimeline, CiSquareChevRight } from "react-icons/ci";

function Header() {
  const [menuVisible, setMenuVisible] = useState<boolean>(false);

  const { theme, isDark, toggleTheme } = useTheme();

  const nav = useNavigate();

  const handleNavigation = (path: "/projects" | "/#timeline") => {
    setMenuVisible(false);
    return nav(path);
  };
  return (
    <div className={styles.header}>
      <div className={styles.innerWrapper}>
        <Logo size={"small"} style={styles.logo} />

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
        <div className={styles.linksMobile}>
          <CustomButton handleClick={() => setMenuVisible((prev) => !prev)}>
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
                  handleClick={() => handleNavigation("/projects")}
                  variant="link"
                  size="sm"
                >
                  <CiSquareChevRight className={styles.menuMobileIcon} />
                  All Projects
                </CustomButton>
                <span className={styles.menuListDivider}> </span>
                <CustomButton
                  handleClick={() => handleNavigation("/#timeline")}
                  variant="link"
                  size="sm"
                >
                  <CiViewTimeline className={styles.menuMobileIcon} />
                  Timeline
                </CustomButton>
              </div>
            </div>
          )}
        </div>
        <span className="hide-mobile">
          <CustomButton handleClick={toggleTheme} size="sm">
            {proper(theme)} {isDark ? <GoMoon /> : <GoSun />}
          </CustomButton>
        </span>
      </div>
    </div>
  );
}

export default Header;
