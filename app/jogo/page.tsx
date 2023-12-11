"use client"
import { useState } from "react";
import { BsArrowCounterclockwise } from "react-icons/bs";
import { FaHome } from "react-icons/fa";
import { BsShare } from "react-icons/bs";


export default function Home() {
  function copyText() {
    // Get the text field
    const copyText = "https://jogo-da-velha-next-peach.vercel.app/";
  
    // Select the text field     // Copy the text inside the text field
    navigator.clipboard.writeText(copyText);
  
    // Alert the copied text
    alert("Link copiado para a área de transferência");
  }

  const [table, setTable] = useState(["","","","","","","","",""])

  const [player, setPlayer]  = useState("X")

  function mark(index:number) {
    if(table[index]) return 
    table[index] = player
    setPlayer(player == "X" ? "O" : "X")
  }
  return (
    <div>
      <h1>Jogo da Velha</h1>
      <h2>Jogue com moderação e seus amigos</h2>
      <table>
        <tbody>
          <tr>
            <td onClick={() => mark(0)}>{table[0]}</td>
            <td onClick={() => mark(1)}>{table[1]}</td>
            <td onClick={() => mark(2)}>{table[2]}</td>
          </tr>
          <tr>
            <td onClick={() => mark(3)}>{table[3]}</td>
            <td onClick={() => mark(4)}>{table[4]}</td>
            <td onClick={() => mark(5)}>{table[5]}</td>
          </tr>
          <tr>
            <td onClick={() => mark(6)}>{table[6]}</td>
            <td onClick={() => mark(7)}>{table[7]}</td>
            <td onClick={() => mark(8)}>{table[8]}</td>
          </tr>
        </tbody>
      </table>
      <div className='button'>
        <a href="/jogo"><BsArrowCounterclockwise /></a>
        <a href="/"><FaHome /></a>
        <a onClick={copyText}><BsShare /></a>
      </div>
    </div>
  )
}