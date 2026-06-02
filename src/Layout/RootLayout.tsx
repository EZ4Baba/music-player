import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar/Sidebar";
import styles from "./RootLayout.module.css";
export default function RootLayout() {
  return (
    <div className={styles.rootlayout}>
      <Sidebar />
      <main>
        <Outlet />
      </main>
    </div>
  );
}
