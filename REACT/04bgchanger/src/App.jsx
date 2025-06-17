import { useState } from "react"
import Button from "./button"

function App() {
  const [color, setColor] = useState("olive")

  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        transition: "background-color 0.2s",
        backgroundColor: color,
        position: "relative"
      }}
    >
      <h1
        style={{
          position: "fixed",
          top: "2rem",
          left: "50%",
          transform: "translateX(-50%)",
          color: "white",
          textShadow: "2px 2px 4px rgba(0,0,0,0.3)",
          fontSize: "2.5rem",
          fontWeight: "bold"
        }}
      >
        Background Changer
      </h1>
      <div
        style={{
          position: "fixed",
          bottom: "3rem",
          left: 0,
          right: 0,
          display: "flex",
          justifyContent: "center",
          padding: "0 0.5rem"
        }}
      >
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: "0.75rem",
            boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
            background: "white",
            padding: "0.75rem 1rem",
            borderRadius: "2rem"
          }}
        >
          <Button color="red" onClick={() => setColor("red")}>Red</Button>
          <Button color="green" onClick={() => setColor("green")}>Green</Button>
          <Button color="blue" onClick={() => setColor("blue")}>Blue</Button>
          <Button color="yellow" onClick={() => setColor("yellow")}>Yellow</Button>
          <Button color="pink" onClick={() => setColor("pink")}>Pink</Button>
          <Button color="orange" onClick={() => setColor("orange")}>Orange</Button>
          <Button color="teal" onClick={() => setColor("teal")}>Teal</Button>
        </div>
      </div>
    </div>
  )
}

export default App