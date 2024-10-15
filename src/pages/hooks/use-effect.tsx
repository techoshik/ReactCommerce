import { useEffect, useState } from "react";

export default function UseEffectTest() {
  const [query, setQuery] = useState('');
  const [products, setProducts] = useState<string[]>([]);

  const loadResults = () => {
    if (query === '') {
      setProducts([]);
    } else {
      setProducts(['one', 'two', 'three']);
    }
  };

  useEffect(
    () => {
      console.log('[query]');
      loadResults();
    },
    [query]
  );


  return <div style={{ padding: 50 }}>
    <input
      type="text"
      value={query}
      placeholder="Search products..."
      onChange={(e) => {
        const newValue = e.target.value;
        setQuery(newValue);
      }}
    />
    <button onClick={loadResults}>Refresh</button>
    {products.map((product) => <h1 key={product}>{product}</h1>)}
  </div>
}