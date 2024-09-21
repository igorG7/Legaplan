import styles from "../styles/todo.module.scss";
import Image from "next/image";

export default function Task() {
  return (
    <li className={styles.task}>
      <div>
        <input className={styles.radio} type="checkbox"></input>
        <p>Lavar as mãos</p>
      </div>

      <Image src="/public/icon.svg" width={24} height={24} alt="Trash icon" />
    </li>
  );
}
