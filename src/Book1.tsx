import React from "react";
interface Props {
  child: any;
}
const Book1 = ({ child }: Props) => {
  return (
    <div>
      {child.map((item: any, index: any) => {
        <div>Author: {item}</div>;
      })}
    </div>
  );
};

export default Book1;
