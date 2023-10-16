import React from "react";

function Greetings({ lang, children }) {
  let greeting = "";
  if (lang === "fr") {
    greeting = "Bonjour";
  } else if (lang === "en") {
    greeting = "Hello";
  } else if (lang === "de") {
    greeting = "Hallo";
  } else if (lang === "es") {
    greeting = "Ola";
  }

  return (
    <h1>
      "{greeting}, {children} !"
    </h1>
  );
}

export default Greetings;
