import { ReactElement } from "react";
import LogoImage from "/assets/images/logo-bigger.png";
import styles from "./Logo.module.css";

const appUrl = import.meta.env.VITE_APP_URL;


export const Logo = (): ReactElement => {
  return <img className={styles["container-logo"]} src={appUrl+LogoImage} alt="logo-image" />;
};
