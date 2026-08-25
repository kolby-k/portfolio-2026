import { useNavigate } from "react-router-dom";
import CustomButton from "../../components/CustomButton";
import Logo from "../../components/Logo";
import useTheme from "../../hooks/useTheme";
import { proper } from "../../utils";
import styles from "./header.module.css";
import { GoSun, GoMoon } from "react-icons/go";
function Header() {
  const { theme, isDark, toggleTheme } = useTheme();

  const nav = useNavigate();
  return (
    <div className={styles.header}>
      <div className={styles.innerWrapper}>
        <Logo size={"small"} style={styles.logo} />

        <div className={styles.links}>
          <CustomButton
            handleClick={() => nav("/projects")}
            variant="link"
            size="lg"
          >
            All Projects
          </CustomButton>
          <CustomButton
            handleClick={() => nav("/#timeline")}
            variant="link"
            size="lg"
          >
            Timeline
          </CustomButton>
        </div>
        <CustomButton handleClick={toggleTheme} size="sm">
          {proper(theme)} {isDark ? <GoMoon /> : <GoSun />}
        </CustomButton>
      </div>
    </div>
  );
}

export default Header;
