import { useEffect, useState } from "react";

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
  const browser = listBrowser?.filter((item) =>
    item?.toLowerCase().includes((typingName ?? "").toLowerCase())
  );
  const onClick = (country: any) => {
    setTypingName(country);
  };

  return (
    <ul>
      {browser?.map((country) => (
        <li key={country} onClick={() => onClick(country)}>
          {country}
        </li>
      ))}
    </ul>
  );
}
