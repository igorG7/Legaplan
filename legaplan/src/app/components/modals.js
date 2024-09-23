import styles from "../styles/modal.module.scss";
import Modal from "react-modal";

export function AddTaskModal(props) {
  return (
    <>
      <Modal
        className={styles.customModalContent}
        isOpen={props.isOpen}
        onRequestClose={props.funcCloseModal}
      >
        <div className={styles.modalContainer}>
          <h2 className={styles.title}>Nova tarefa</h2>

          <div>
            <p className={styles.subtitle}>Título</p>
            <input type="text" placeholder="Digite" className={styles.input} />
          </div>

          <div className={styles.containerButtons}>
            <button className={styles.addButtonModal}>Adicionar</button>
            <button
              className={styles.cancelButtonModal}
              onClick={props.funcCloseModal}
            >
              Cancelar
            </button>
          </div>
        </div>
      </Modal>
    </>
  );
}

export function DeleteTaskModal(props) {
  return (
    <>
      <Modal
        className={styles.customModalContent}
        isOpen={props.isOpen}
        onRequestClose={props.funcCloseModal}
      >
        <div className={styles.modalContainer}>
          <h2 className={styles.title}>Deletar tarefa</h2>

          <div>
            <p className={styles.textDelete}>
              Tem certeza que você deseja deletar essa tarefa?
            </p>
          </div>

          <div className={styles.containerButtons}>
            <button className={styles.deleteModalButton}>Deletar</button>
            <button
              className={styles.cancelButtonModal}
              onClick={props.funcCloseModal}
            >
              Cancelar
            </button>
          </div>
        </div>
      </Modal>
    </>
  );
}
