"use client"
import { useState } from "react";
import { BsArrowCounterclockwise } from "react-icons/bs";
import { FaHome } from "react-icons/fa";
import { BsShare } from "react-icons/bs";
import { IoIosAddCircleOutline } from "react-icons/io";



export default function Home() {
  function copyText() {
    // Pega o texto que deseja copiar
    const copyText = "https://jogo-da-velha-next-peach.vercel.app/";

    // Seleciona o texto e copia para a área de transferência
    navigator.clipboard.writeText(copyText);

    // Alerta de texto (LINK) copiado
    alert("Link copiado para a área de transferência");
  }


  let pontosX = 0
  let pontosO = 0


  function addPointsX() {
    pontosX = pontosX + 1
    let count = document.querySelector("IoIosAddCircleOutline")
    if (count) count.innerHTML = pontosX.toString()
    console.log(pontosX)
  }

  function addPointsO() {
    pontosO = pontosO + 1
    let count = document.querySelector("IoIosAddCircleOutline")
    if (count) count.innerHTML = pontosO.toString()
    console.log(pontosO)
  }

  const [table, setTable] = useState(["", "", "", "", "", "", "", "", ""])

  const [player, setPlayer] = useState("X")

  const playerX = 0
  const playerO = 0

  function mark(index: number) {
    if (table[index]) return
    table[index] = player
    setPlayer(player == "X" ? "O" : "X")
    checkWinner()
  }

  function checkWinner() {
    if (table[0] == table[1] && table[1] == table[2] && table[0] != "") {
      if (player == "X") {
        document.body.style.background = "green";
        console.log("O X ganhou"); return
      }
      else {
        console.log("O O ganhou"); return
      }
    }

    if (table[3] == table[4] && table[4] == table[5] && table[3] != "") {
      if (player == "X") {
        console.log("O X ganhou"); return
      }
      else {
        console.log("O O ganhou"); return
      }
    }

    if (table[6] == table[7] && table[7] == table[8] && table[6] != "") {
      if (player == "X") {
        console.log("O X ganhou"); return
      }
      else {
        console.log("O O ganhou"); return
      }
    }

    if (table[0] == table[3] && table[3] == table[6] && table[0] != "") {
      if (player == "X") {
        console.log("O X ganhou"); return
      }
      else {
        console.log("O O ganhou"); return
      }
    }

    if (table[1] == table[4] && table[4] == table[7] && table[1] != "") {
      if (player == "X") {
        console.log("O X ganhou"); return
      }
      else {
        console.log("O O ganhou"); return
      }
    }

    if (table[2] == table[5] && table[5] == table[8] && table[2] != "") {
      if (player == "X") {
        console.log("O X ganhou"); return
      }
      else {
        console.log("O O ganhou"); return
      }
    }

    if (table[0] == table[4] && table[4] == table[8] && table[0] != "") {
      if (player == "X") {
        console.log("O X ganhou"); return
      }
      else {
        console.log("O O ganhou"); return
      }
    }

    if (table[2] == table[4] && table[4] == table[6] && table[2] != "") {
      if (player == "X") {
        console.log("O X ganhou"); return
      }
      else {
        console.log("O O ganhou"); return
      }
    }
  }


  return (
    <div>
      <h1>Jogo da Velha</h1>
      <h2>Jogue com moderação e seus amigos</h2>
      <h2>Vez de {player}</h2>
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
      <div className="players">
        <h3>Jogador X</h3>
        <h3>Jogador O</h3>
      </div>
      <div className="addPonitsPlayer">
        <a id="dois" onClick={addPointsX}><IoIosAddCircleOutline/></a>
        
        <a id="dois" onClick={addPointsO}><IoIosAddCircleOutline/></a>
      </div>
    </div>
  )
}