import React from "react";

interface IListProps {
  items: string[];
}

const List = ({ items }: IListProps) => (
  <ul>
    {items.map((item: string) => (
      <li key={item}>{item}</li>
    ))}
  </ul>
);
export default List;
