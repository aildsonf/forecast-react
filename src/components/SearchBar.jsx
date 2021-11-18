import React, { useRef, useState } from "react";
import { useGlobalState } from "../context/GlobalState";

export default function SearchBar() {
  const { findCapital } = useGlobalState();
  const [text, setText] = useState("");
  const inputRef = useRef(null);

  function handleChange() {
    setText(inputRef.current.value);
  }

  function handleClick(event) {
    event.preventDefault();
    findCapital(text);
    setText("");
  }

  return (
    <form className="flex flex-row my-8 self-center w-full shadow-lg">
      <input
        type="text"
        value={text}
        ref={inputRef}
        onChange={handleChange}
        placeholder="Insira aqui o nome da capital"
        className="w-full rounded-tl-md rounded-bl-md p-4 outline-none"
      />
      <button
        type="submit"
        onClick={handleClick}
        className="rounded-tr-md rounded-br-md p-4 bg-white cursor-pointer hover:bg-gray-200 transition duration-300"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="12"
          height="12"
          viewBox="0 0 24 24"
        >
          <path d="M23.809 21.646l-6.205-6.205c1.167-1.605 1.857-3.579 1.857-5.711 0-5.365-4.365-9.73-9.731-9.73-5.365 0-9.73 4.365-9.73 9.73 0 5.366 4.365 9.73 9.73 9.73 2.034 0 3.923-.627 5.487-1.698l6.238 6.238 2.354-2.354zm-20.955-11.916c0-3.792 3.085-6.877 6.877-6.877s6.877 3.085 6.877 6.877-3.085 6.877-6.877 6.877c-3.793 0-6.877-3.085-6.877-6.877z" />
        </svg>
      </button>
    </form>
  );
}
