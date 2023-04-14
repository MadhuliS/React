import logo from './logo.svg';
import { useState } from 'react';
import {useEffect} from "react";

import './App.css';

export default function App() {
  const counter = <Counter />;
  return (
    <div>
      {counter}
    </div>
  );
}


function Counter() {

  const [count, setCount] = useState(0);
  const [hover, setHover] = useState(false);

  let className = 'counter';
  if (hover) {
    className += ' hover';
  }
  useEffect(() => {
    setCount(JSON.parse(window.localStorage.getItem('count')));
  }, []);



  const setScore = () => {
    localStorage.setItem('count', count + 1)
    return setCount(count + 1)
  }

  return (
    <div
      className={className}
      onPointerEnter={() => setHover(true)}
      onPointerLeave={() => setHover(false)}
    >
      <h1>{count}</h1>
      <button onClick={() => setScore()}>
        Click me to score
      </button>
    </div>
  );
}


