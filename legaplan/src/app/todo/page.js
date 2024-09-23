"use client";

import styles from "../styles/todo.module.scss";
import Task from "../components/task";
import Modal from "react-modal";
import { AddTaskModal, DeleteTaskModal } from "../components/modals";
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
              <Task fOpenModal={openDeleteModal} />
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

        <AddTaskModal isOpen={modalIsOpen} funcCloseModal={closeModal} />
        <DeleteTaskModal
          isOpen={deleteModalisOpen}
          funcCloseModal={closeDeleteModal}
        />
      </div>
    </>
  );
}
