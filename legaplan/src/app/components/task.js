import styles from "../styles/todo.module.scss";
import Image from "next/image";
import { Checkbox, Label, Field } from "@headlessui/react";
import { CheckIcon } from "@heroicons/react/16/solid";
import { useState } from "react";

export default function Task() {
  const [enabled, setEnabled] = useState(true);

  const handleChange = () => {
    setEnabled(!enabled);
  };

  return (
    <li className={styles.task}>
      <div>
        <Field>
          <Checkbox
            checked={enabled}
            onChange={handleChange}
            className={enabled ? styles.checked : styles.unchecked}
          >
            <CheckIcon className={styles.checkIcon} />
          </Checkbox>

          <Label className={enabled ? styles.labelChecked : styles.label}>
            Lavar as mãos
          </Label>
        </Field>
      </div>

      <Image src="/public/icon.svg" width={24} height={24} alt="Trash icon" />
    </li>
  );
}
