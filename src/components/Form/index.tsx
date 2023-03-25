import { useState } from "react";
import { BrowserList } from "../BrowserList";
import s from "./Form.module.css";

export function Form() {
  console.log("Form");
  const [isOpen, setIsOpen] = useState(false);
  const [typingName, setTypingName] = useState("");

  const onSubmit = (event: any) => {
    event.preventDefault();
    const inputName = event.target.elements.name.value.trim();
    setTypingName("");
    alert(inputName);
    setIsOpen(false);
  };

  const onClick = () => {
    setIsOpen(true);
  };

  const onChange = (event: React.FormEvent<HTMLInputElement>) => {
    setTypingName(event.currentTarget.value);
  };

  const onCloseDropDown = (evt: React.MouseEvent) => {
    if (evt.target === evt.currentTarget) {
      setIsOpen(false);
    }
  };

  return (
    <div onClick={onCloseDropDown} className={s.blockForm}>
      <form id="form" onSubmit={onSubmit} onClick={onClick}>
        <input
          type="text"
          name="name"
          required
          value={typingName}
          onChange={onChange}
          className={s.input}
        />
        <button type="submit" className={s.button}>
          Submit
        </button>
      </form>
      {isOpen && (
        <BrowserList
          typingName={typingName}
          setIsOpen={setIsOpen}
          setTypingName={setTypingName}
        />
      )}
    </div>
  );
}
