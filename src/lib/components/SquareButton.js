import React from 'react';

export default function SquareButton({text, onClick}) {
  return (
    <div className="square-button" onClick={onClick}>{text}</div>
  )
}