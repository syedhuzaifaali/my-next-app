"use client";

import { COOKIE_NAME_PRERENDER_BYPASS } from "next/dist/server/api-utils";
import { useRouter } from "next/navigation";
import { toNamespacedPath } from "path";

async function update(id, isDone, refresh) {
  await fetch(`/api/todo/update`, {
    method: "POST",
    body: JSON.stringify({ id, isDone }),
  });

  refresh();
}

async function deleteTodo(id, refresh) 
{
  await fetch(`/api/todo/delete?id=${id}`, {
    method: "DELETE",
  });
 refresh();

}

export default function Todo(todo ) {
  const router = useRouter();
  
  return (
    <> 
     <input
        type="checkbox"     
        checked={todo.isDone}
      />
     {todo.name} 
     <button onClick={() => deleteTodo(todo.id, router.refresh)}>
        Delete
      </button>
    </>
  );
}