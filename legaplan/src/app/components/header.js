import styles from "../styles/header.module.scss";
import Image from "next/image";

export default function Header() {
  return (
    <>
      <header className={styles.header}>
        <div className={styles.container}>
          <Image src="./public/logo.svg" width={150} height={35} alt="Logo" />
          <p className={styles.wellcome}>Bem vindo de volta, Marcus</p>
          <p>Segunda, 01 de Setembro, de 2025</p>
        </div>
      </header>
    </>
  );
}
