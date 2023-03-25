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
}
export function BrowserList({ typingName, setTypingName }: Props) {
  const browsers = listBrowser?.filter((item) =>
    item?.toLowerCase().includes((typingName ?? "").toLowerCase())
  );
  const onClick = (country: string) => {
    setTypingName(country);
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
