import React from "react";
interface Props {
  author: string;
  title: string;
}
const Book = ({ author, title }: Props) => {
  return (
    <div>
      Author:{author}
      <p className="txt">Title:{title}</p>
    </div>
  );
};

export default Book;
