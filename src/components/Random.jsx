import React from "react";

function Random({ min, max }) {
  const minRounded = Math.ceil(min);
  const maxRounded = Math.floor(max);
  const result = Math.floor(
    Math.random() * (maxRounded - minRounded) + minRounded
  );
  return (
    <h3>
      Random value between {min} and {max} is => {result}
    </h3>
  );
}

export default Random;
