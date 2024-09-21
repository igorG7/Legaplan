import styles from "../styles/todo.module.scss";
import Task from "../components/task";

export default function TodoList() {
  return (
    <>
      <div className={styles.container}>
        <div>
          <div className={styles.tasksContainer}>
            <div>
              <h2 className={styles.divisions}>Suas tarefas hoje</h2>
              <ul className={styles.activeList}>
                <Task />
              </ul>
            </div>

            <div>
              <h2 className={styles.divisions}>Tarefas Finalizadas</h2>
              <ul className={styles.activeList}>
                <Task />
              </ul>
            </div>
          </div>

          <button className={styles.addButton}>Adicionar nova tarefa</button>
        </div>
      </div>
    </>
  );
}
