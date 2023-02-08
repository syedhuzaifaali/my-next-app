import React from "react";
import useSWR from "swr";
import Todo from "./todo";

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function TodoList() {
  const { data, error } = useSWR(
    "api/todo/list",
    fetcher
  );

  if (error) return "An error has occurred.";
  if (!data) return "Loading...";
  return  (
    <div>
      <ul style={{ listStyleType: "none", padding: 0 }}>
        {data.todos.map((t) => {
          return (
            <li key={t.id} style={{ padding: "5px 0" }}>
              <Todo name={t.name} id={t.id} />
            </li>
          );
        })}
      </ul>
    </div>
  );
}
