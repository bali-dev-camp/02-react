import { NavLink, Outlet } from "react-router-dom";
import styles from "./root.module.css";

export default function Root() {
  return (
    <div>
      <header className={styles.header}>
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? styles.active : "")}
        >
          Home
        </NavLink>

        <NavLink
          to="/about"
          className={({ isActive }) => (isActive ? styles.active : "")}
        >
          About
        </NavLink>

        <NavLink to="/contact">Contact</NavLink>
      </header>

      <Outlet />
    </div>
  );
}
