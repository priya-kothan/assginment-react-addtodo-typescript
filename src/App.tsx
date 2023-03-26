
import TodoList from "./component/TodoList";
import TodoAdd from "./component/TodoAdd";
import { useEffect, useState } from "react";
import { type } from "./todoType";
export default function App() {
  const [items, setItems] = useState<type[]>([]);
  const [count, setcount] = useState<number>(0);
  const onaddHandler = (todoText: string) => {
    setItems((prevTodos) => {
      return [
        ...prevTodos,
        {
          id: new Date().toISOString(),
          name: todoText,
          completed: true
        }
      ];
    });
    setcount(items.length + 1);
  };

  const removeHandler = (id: string) => {
    const removeItems = items.map((el) => {
      if (el.id === id) {
        el.completed = false;
        return el;
      }
      return el;
    });

    setItems(removeItems);
    // setItems((prov) => {
    //   return prov.filter((el) => el.id !== id);
    // });
    
  };

  useEffect(()=>{
    let count = items.filter((el) => el.completed === true)?.length;
    setcount(count);
  },[items])

  return (
    <div className="App">
      adada
      <TodoAdd addHandler={onaddHandler} />
      {count ? count : 0}
      <TodoList items={items} removeHandler={removeHandler} />
    </div>
  );
}
