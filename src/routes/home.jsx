import { useEffect, useState } from "react"
import useTerserah from "../useTerserah"

export default function PageHome() {
  const { count, setCount, text, setText } = useTerserah()

  return (
    <div style={{
      alignItems: 'flex-start',
      display: 'flex',
      flexDirection: 'column',
      gap: 24,
      padding: 16,
    }}>
      <h1>This is my app</h1>
      <p>Welcome</p>

      {count}
      <button onClick={() => setCount(count + 1)}>Count</button>

      {text}
      <input type="text" onChange={(event) => setText(event.target.value)} />
    </div>
  )
}