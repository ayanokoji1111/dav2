import React from 'react'


export default function Button({text, bgColor, width, height}) {
  return (
    <button style={{
        backgroundColor: bgColor, 
        width: width, 
        height: height,
        border: 'none',
        color: 'blue',
        fontSize: '14px',
        borderRadius: '5px',
        cursor: 'pointer',
        position: 'relative',
        left: '250px'
      }}>
        {text}
      </button>
  )
}