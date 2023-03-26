import React from "react";
import { type } from "../todoType";
const TodoList: React.FC<{
  items: type[];
  removeHandler: (id: string) => void;
}> = (props) => {
  return (
    <div>
      <ul>
        {props.items &&
          props.items.map((e) => {
            return (
              <div>
                <li onClick={() => props.removeHandler(e.id)}>
                  {e.completed === false ? <del>e.name</del> : e.name}
                </li>
                <li>{e.id}</li>
              </div>
            );
          })}
      </ul>
    </div>
  );
};

export default TodoList;
