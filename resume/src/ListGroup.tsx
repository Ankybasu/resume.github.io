import { useState } from "react";
interface Props {
  items: string[];
  headings: string;
  onSelected: (item: string) => void;
}
function ListGroup({ items, headings, onSelected }: Props) {
  //hook update in-built libraries
  //arr[0]->variable,arr[1]=function
  const [selectedIndex, setSelectedIndex] = useState(1);
  //   const activeHighlight = (index: any) => {
  //     if (index == selectedIndex) {
  //       return true;
  //     }
  //   };
  return (
    <>
      <h1>{headings}</h1>
      <ul className="list-group">
        {items.map((item: any, index: any) => (
          <li
            className={
              index === selectedIndex
                ? "list-group-item active"
                : "list-group-item"
            }
            key={item}
            onClick={() => {
              {
                setSelectedIndex(index);
                onSelected(item);
              }
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}
export default ListGroup;
