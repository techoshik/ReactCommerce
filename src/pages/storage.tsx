import { useEffect, useState } from "react";

const keyCount = 'count';

export default function LocalStoragePage() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const storedCount = localStorage.getItem(keyCount);
    if (storedCount === null) return;
    const value = parseInt(storedCount);
    console.log({ value });

    if (value > 0) {
      setCount(value);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(keyCount, count.toString());
  }, [count]);

  const handleIncrement = () => {
    const newCount = count + 1;
    setCount(newCount);
    // localStorage.setItem(keyCount, newCount.toString());
  }

  const handleDecrement = () => {
    const newCount = count - 1;
    setCount(newCount);
    // localStorage.setItem(keyCount, newCount.toString());
  }

  return <div style={{ padding: 20 }}>
    <button onClick={handleIncrement}>Increment</button>
    <br />
    <br />
    {JSON.stringify(count)}
    <br />
    <br />
    <button onClick={handleDecrement}>Decrement</button>
  </div>
}