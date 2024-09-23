"use client";

import styles from "../styles/todo.module.scss";
import Task from "../components/task";
import Modal from "react-modal";
import { useState, useEffect } from "react";

export default function TodoList() {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [deleteModalisOpen, setDeleteModalisOpen] = useState(false);

  function openModal() {
    setModalIsOpen(true);
  }

  function closeModal() {
    setModalIsOpen(false);
  }

  function openDeleteModal() {
    setDeleteModalisOpen(true);
  }

  function closeDeleteModal() {
    setDeleteModalisOpen(false);
  }

  useEffect(() => {
    Modal.setAppElement("#__next");
  }, []);

  return (
    <>
      <div className={styles.container}>
        <div className={styles.tasksContainer}>
          <div>
            <h2 className={styles.divisions}>Suas tarefas hoje</h2>
            <ul className={styles.activeList}>
              <Task />
              <Task />
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

        <button onClick={openModal} className={styles.addButton}>
          Adicionar nova tarefa
        </button>

        <Modal
          className={styles.customModalContent}
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
        >
          <div className={styles.modalContainer}>
            <h2 className={styles.title}>Nova tarefa</h2>

            <div>
              <p className={styles.subtitle}>Título</p>
              <input
                type="text"
                placeholder="Digite"
                className={styles.input}
              />
            </div>

            <div className={styles.containerButtons}>
              <button className={styles.addButtonModal}>Adicionar</button>
              <button className={styles.cancelButtonModal} onClick={closeModal}>
                Cancelar
              </button>
            </div>
          </div>
        </Modal>

        <Modal
          className={styles.customModalContent}
          isOpen={deleteModalisOpen}
          onRequestClose={closeModal}
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
                onClick={closeDeleteModal}
              >
                Cancelar
              </button>
            </div>
          </div>
        </Modal>
      </div>
    </>
  );
}
