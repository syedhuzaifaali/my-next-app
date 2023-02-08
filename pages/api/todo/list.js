import { Console } from "console";
import { v4 as uuidv4 } from "uuid";

let todos = [
  {
    id: 1,
    name: "Learn Next.js",
    isDone: false,
  },
  {
    id:2,
    name: "Learn HTML",
    isDone: false,
  },
  {
    id:3,
    name: "Start new sideproject",
    isDone: false,
  },
];

export const addTodo = (name) => {
  let newTodo = {
    id:4,
    name,
    isDone: false,
  }; 
  todos.push(newTodo);
  
};

export const deleteTodo = (id) => {
  var usersindex= todos.findIndex(todo => todo.id == parseInt(id));
  todos.splice(usersindex,1);
};


export const updateTodo = ({ id, isDone }) => {

  let newTodos = [];
  todos.map((obj) => {
    let newTodo = { ...obj };
    if (obj.id == id) {
      newTodo = {
        id,
        name: obj.name,
        isDone,
      };
    }
    newTodos.push(newTodo);
  });
  todos = newTodos;
};

export default function handler(req, res) {
  res.status(200).json({ todos });
}