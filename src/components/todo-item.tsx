import { Todo } from "@/models/todo"

interface Props {
  todo: Todo;
}

export function TodoItem({ todo }: Props) {
  return <div
    style={{
      border: 5,
      borderRadius: 10,
      backgroundColor: "aliceblue",
      margin: 10,
      padding: 10
    }}>
    <p>{todo.title}</p>
  </div>
}