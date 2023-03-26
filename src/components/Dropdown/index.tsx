import { useState } from "react";
import s from "./styles.module.css";

const listBrowser = [
  "Chrome",
  "Safari",
  "Firefox",
  "Chromium",
  "Shit yandex",
  "Opera",
];

export function Dropdown() {
  const [isOpen, setIsOpen] = useState(false);
  const [inputValue, setInputValue] = useState("");

  const onSubmitForm = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const inputName = inputValue.trim();
    setInputValue("");
    alert(inputName);
    setIsOpen(false);
  };

  const onCloseDropDown = (evt: React.MouseEvent) => {
    if (evt.target === evt.currentTarget) {
      setIsOpen(false);
    }
  };

  const browsersFilter = listBrowser?.filter((item) =>
    item?.toLowerCase().startsWith(inputValue.toLowerCase())
  );
  const onClickBrowser = (country: string) => {
    setInputValue(country);
    setIsOpen(false);
  };

  return (
    <div onClick={onCloseDropDown} className={s.blockForm}>
      <form id="form" onSubmit={onSubmitForm}>
        <input
          type="text"
          name="name"
          required
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onClick={() => setIsOpen(true)}
          className={s.input}
        />
        <button type="submit" className={s.button}>
          Submit
        </button>
      </form>
      {isOpen && (
        <ul className={s.listBrowsers}>
          {browsersFilter?.map((browser) => (
            <li
              key={browser}
              onClick={() => onClickBrowser(browser)}
              className={s.browser}
            >
              {browser}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
