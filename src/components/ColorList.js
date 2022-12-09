import React from "react";
import ColorItem from "./ColorItem";

function ColorList() {
  const colors = [
    "firebrick",
    "rebeccapurple",
    "salmon",
    "darkslategray",
    "hotpink",
  ];

  const users = [
    { id: 1, firstName: "Duane", lastName: "Watson" },
    { id: 2, firstName: "Duane", lastName: "Johnson" },
  ];

  const userHeadings = users.map((user) => {
    return <h1 key={user.id}>{user.firstName}</h1>;
  });

  const fib = [0, 1, 1, 2, 3, 5];

  const fibList = fib.map((number, index) => {
    return <div key={index}>{number}</div>;
  });

  const colorElements = colors.map((color) => {
    return <ColorItem color={color} />;
  });

  return (
    <div>
      <h1>Top 5 CSS Colors</h1>
      <ol>{colorElements}</ol>
      {userHeadings}
      {fibList}
    </div>
  );
}

export default ColorList;