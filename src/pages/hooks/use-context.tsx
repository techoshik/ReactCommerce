import { createContext, useContext, useState } from "react";


const ColorContext = createContext('red');

export default function UseProfilePage() {
  const [color, setColor] = useState('black');


  return (
    <ColorContext.Provider value={color}>
      <div style={{ padding: 30 }}>
        <button onClick={() => {
          setColor('blue');
        }}>Change Color</button>
        <hr />
        {color}
        <hr />
        <PrintColor color={color} />
        <hr />
        <PrintColorUsingContext />
        <hr />
      </div>
    </ColorContext.Provider>
  );
}

interface PrintColorProps {
  color: string;
}
function PrintColor(props: PrintColorProps) {
  return <>PrintColor: {props.color}</>;
}

function PrintColorUsingContext() {
  console.log(new Date());

  const color = useContext(ColorContext);

  return <>PrintColorUsingContext: {color}</>;
}