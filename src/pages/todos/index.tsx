import { TodoItem } from "@/components/todo-item";
import { firebaseDatabase } from "@/configs/firebase-config";
import { Todo } from "@/models/todo";
import { collection, getDocs } from "firebase/firestore";
import Link from "next/link";
import { useEffect, useState } from "react";


export default function TodosPage() {
  const [todos, setTodos] = useState<Todo[]>([]);

  useEffect(() => {
    const coll = collection(firebaseDatabase, 'todos');
    getDocs(coll).then((snapshot) => {
      const newTodos: Todo[] = snapshot.docs.map((doc) => {
        return {
          id: doc.id,
          title: doc.get('title'),
          isCompleted: doc.get('completed') ?? false,
        }
      });
      setTodos(newTodos);
    });

  }, []);

  return <div style={{ padding: 20 }}>
    <div style={{
      margin: 20,
      display: "flex",
      flex: 1,
      justifyContent: "space-between",
      alignContent: "center",
    }}>
      <h1 style={{ display: "inline-block" }}>Todos</h1>

      <button onClick={() => {
        window.location.href = "/todos/create";
      }}>Add</button>

      <a href="/todos/create">Add</a>

      <Link href="/todos/create">Add</Link>
    </div>
    {todos.length === 0 ? "No more todo!" : null}
    {todos.map((todo) => <TodoItem key={todo.id} todo={todo} />)}
  </div>
}