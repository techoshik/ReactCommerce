import { Card, CircularProgress, Container, Typography } from "@mui/material";
import { useEffect, useState } from "react";

interface Todo {
  id: number;
  title: string;
  userId: number;
  completed: boolean;
}

export default function TodosPage() {
  const [loading, setLoading] = useState(true);
  const [todos, setTodos] = useState<Todo[]>([]);

  const loadData = async function () {
    console.log('before', new Date());

    setLoading(true);
    const res = await fetch('https://jsonplaceholder.typicode.com/todos');
    const list: Todo[] = await res.json();

    setTodos(list);
    setLoading(false);

    console.log('after', new Date());
  }

  useEffect(() => {
    loadData();
  }, []);

  if (loading) {
    return <Container>
      <CircularProgress />
    </Container>
  }

  return <Container>
    {todos.map((todo) => <Card key={todo.id} sx={{ m: 1, p: 2 }}>
      <Typography>{todo.title}</Typography>
      <Typography>Completed: {"" + todo.completed}</Typography>
    </Card>
    )}
  </Container >
}