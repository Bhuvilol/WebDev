import React from 'react'

function Button({ color, onClick, children }) {
  return (
    <button
      onClick={onClick}
      style={{
        outline: "none",
        padding: "0.25rem 1rem",
        borderRadius: "8px",
        color: color === "yellow" ? "black" : "white",
        backgroundColor: color,
        boxShadow: "0 2px 6px rgba(0,0,0,0.10)",
        border: "none",
        cursor: "pointer"
      }}
    >
      {children}
    </button>
  )
}

export default Button