import React from "react";
import Button from "./Button";

const listItem = [
  "All",
  "music",
  "coc",
  "sports",
  "dance",
  "edm",
  "skills",
  "cameo",
  "chill",
  "netflix",
  "cricket",
  "Live",
  "guns",
  "news",
];

const generatedButtons = listItem.map((item, id) => (
  <Button key={id} name={item} />
));

const ButtonList = () => {
  return <div className="flex ">{generatedButtons}</div>;
};

export default ButtonList;
