import React from "react";
import s from "./BrowserList.module.css";

const listBrowser = [
  "Chrome",
  "Safari",
  "Firefox",
  "Chromium",
  "Shit yandex",
  "Opera",
];
interface Props {
  typingName?: string;
  setTypingName: Function;
  setIsOpen: Function;
}
export function BrowserList({ typingName, setTypingName, setIsOpen }: Props) {
  console.log("BrowserList");

  const browsers = listBrowser?.filter((item) =>
    item?.toLowerCase().startsWith((typingName ?? "").toLowerCase())
  );
  const onClick = (country: string) => {
    setTypingName(country);
    setIsOpen(false);
  };

  return (
    <ul className={s.listBrowsers}>
      {browsers?.map((country) => (
        <li
          key={country}
          onClick={() => onClick(country)}
          className={s.browser}
        >
          {country}
        </li>
      ))}
    </ul>
  );
}
