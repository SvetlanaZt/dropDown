import { useState } from "react";
import { BrowserList } from "../BrowserList";

// interface Props {
//   setIsOpen: Function;
// }
export function Form() {
  const [isOpen, setIsOpen] = useState(false);
  const [typingName, setTypingName] = useState("");
  console.log(typingName);

  const onSubmit = (event: any) => {
    event.preventDefault();
    const inputName = event.target.elements.name.value.trim();
    alert(inputName);
  };

  const onClick = () => {
    setIsOpen(true);
  };

  const onChange = (event: any) => {
    setTypingName(event.target.value);
  };
  return (
    <div>
      <form id="form" onSubmit={onSubmit} onClick={onClick}>
        <input
          type="text"
          name="name"
          required
          value={typingName}
          onChange={onChange}
        />
        <button type="submit">Submit</button>
      </form>
      {isOpen && (
        <BrowserList typingName={typingName} setTypingName={setTypingName} />
      )}
    </div>
  );
}