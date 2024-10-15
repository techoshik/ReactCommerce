import { useState } from "react";

export default function UseState() {
  const [count, setCount] = useState(0);

  const [user, setUser] = useState({
    name: "John Doe",
    age: 30,
  });

  const decrement = () => { };

  const increment = () => {
    setCount(11);
    setCount(count + 1);

    setUser({
      name: user.name,
      age: user.age + 1,
    });

    setUser({
      ...user,
      age: user.age + 1,
    });

    setUser((previousState) => ({
      ...previousState,
      age: previousState.age + 1,
    }));
  };

  return <div style={{ padding: 20 }}>
    <button onClick={decrement}>Decrement</button>

    {JSON.stringify(user)}

    <button onClick={increment}>Increment</button>
  </div>
}
