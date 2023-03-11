import { useState } from "react";

export function Todolist() {
  const [task, setTask] = useState("");
  const [list, setList] = useState([]);

  return (
    <div className="">
      <input
        value={task}
        type={"text"}
        onChange={(e) => {
          setTask(e.target.value);
        }}
        onKeyDown={(e) => {
          if (e.key === "Enter" && task != "") {
            const newList = [...list, { task, done: false }];
            setList(newList);
            setTask("");
          }
        }}
      />
      <button
        onClick={() => {
          setList([]);
          setTask("");
        }}
      >
        Clear
      </button>
      <ul>
        {list.map((item, index) => {
          if (item.done) return null;
          return (
            <li key={item.task}>
              {item.task}
              <button
                onClick={() => {
                  const aux = [...list];
                  aux[index].done = true;
                  setList(aux);
                }}
              >
                X
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
