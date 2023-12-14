"use client"
import { useState } from "react";
import { BsArrowCounterclockwise } from "react-icons/bs";
import { FaHome } from "react-icons/fa";
import { BsShare } from "react-icons/bs";


export default function Home() {
  const [table, setTable] = useState(["", "", "", "", "", "", "", "", ""])
  const [player, setPlayer] = useState("X")

  function copyText() {
    // Pega o texto que deseja copiar
    const copyText = "https://jogo-da-velha-next-peach.vercel.app/";

    // Seleciona o texto e copia para a área de transferência
    navigator.clipboard.writeText(copyText);

    // Alerta de texto (LINK) copiado
    alert("Link copiado para a área de transferência");
  }

  function mark(index: number) {
    if (table[index]) return
    table[index] = player
    setPlayer(player == "X" ? "O" : "X")
    checkWinner()   
  }

  const [x, setx] = useState(0)
  const [o, seto] = useState(0)

  function checkWinner() {
    if (table[0] == table[1] && table[1] == table[2] && table[0] != "") {
      if (player == "X") {
        document.body.style.backgroundColor = "green"
        alert("O X ganhou"); 
        setx(x+1);
        setTable (["", "", "", "", "", "", "", "", ""]);
        setPlayer ("X")
        return
      }
      else {
        document.body.style.backgroundColor = "red"
        alert("O O ganhou");
        seto(o + 1);
        setTable(["", "", "", "", "", "", "", "", ""]);
        setPlayer("X");
        alert("O O ganhou"); return
      }
    }
    
    if (table[3] == table[4] && table[4] == table[5] && table[3] != "") {
      if (player == "X") {
        document.body.style.backgroundColor = "green"
        alert("O X ganhou"); 
        setx(x+1);
        setTable (["", "", "", "", "", "", "", "", ""]);
        setPlayer ("X")
        return
      }
      else {
        document.body.style.backgroundColor = "red"
        alert("O O ganhou");
        seto(o + 1);
        setTable(["", "", "", "", "", "", "", "", ""]);
        setPlayer("X");
        alert("O O ganhou"); return
      }
      
    }

    if (table[6] == table[7] && table[7] == table[8] && table[6] != "") {
      if (player == "X") {
        document.body.style.backgroundColor = "green"
        alert("O X ganhou"); 
        setx(x+1);
        setTable (["", "", "", "", "", "", "", "", ""]);
        setPlayer ("X")
        return
      }
      else {
        document.body.style.backgroundColor = "red"
        alert("O O ganhou");
        seto(o + 1);
        setTable(["", "", "", "", "", "", "", "", ""]);
        setPlayer("X");
        alert("O O ganhou"); return
      }
      
    }

    if (table[0] == table[3] && table[3] == table[6] && table[0] != "") {
      if (player == "X") {
        document.body.style.backgroundColor = "green"
        alert("O X ganhou"); 
        setx(x+1);
        setTable (["", "", "", "", "", "", "", "", ""]);
        setPlayer ("X")
        return
      }
      else {
        document.body.style.backgroundColor = "red"
        alert("O O ganhou");
        seto(o + 1);
        setTable(["", "", "", "", "", "", "", "", ""]);
        setPlayer("X");
        alert("O O ganhou"); return
      }
      
    }

    if (table[1] == table[4] && table[4] == table[7] && table[1] != "") {
      if (player == "X") {
        document.body.style.backgroundColor = "green"
        alert("O X ganhou"); 
        setx(x+1);
        setTable (["", "", "", "", "", "", "", "", ""]);
        setPlayer ("X")
        return
      }
      else {
        document.body.style.backgroundColor = "red"
        alert("O O ganhou");
        seto(o + 1);
        setTable(["", "", "", "", "", "", "", "", ""]);
        setPlayer("X");
        alert("O O ganhou"); return
      }
      
    }

    if (table[2] == table[5] && table[5] == table[8] && table[2] != "") {
      if (player == "X") {
        document.body.style.backgroundColor = "green"
        alert("O X ganhou"); 
        setx(x+1);
        setTable (["", "", "", "", "", "", "", "", ""]);
        setPlayer ("X")
        return
      }
      else {
        document.body.style.backgroundColor = "red"
        alert("O O ganhou");
        seto(o + 1);
        setTable(["", "", "", "", "", "", "", "", ""]);
        setPlayer("X");
        alert("O O ganhou"); return
      }
      
    }

    if (table[0] == table[4] && table[4] == table[8] && table[0] != "") {
      if (player == "X") {
        document.body.style.backgroundColor = "green"
        alert("O X ganhou"); 
        setx(x+1);
        setTable (["", "", "", "", "", "", "", "", ""]);
        setPlayer ("X")
        return
      }
      else {
        document.body.style.backgroundColor = "red"
        alert("O O ganhou");
        seto(o + 1);
        setTable(["", "", "", "", "", "", "", "", ""]);
        setPlayer("X");
        alert("O O ganhou"); return
      }
      
    }

    if (table[2] == table[4] && table[4] == table[6] && table[2] != "") {
      if (player == "X") {
        document.body.style.backgroundColor = "green"
        alert("O X ganhou"); 
        setx(x+1);
        setTable (["", "", "", "", "", "", "", "", ""]);
        setPlayer ("X")
        return
      }
      else {
        document.body.style.backgroundColor = "red"
        alert("O O ganhou");
        seto(o + 1);
        setTable(["", "", "", "", "", "", "", "", ""]);
        setPlayer("X");
        alert("O O ganhou"); return
      }
    }
    if(table[0] != "" && table[1] != "" && table[2] != "" && table[3] != "" && table[4] != "" && table[5] != "" && table[6] != "" && table[7] != "" && table[8] != "" ){ 
      setTable(["", "", "", "", "", "", "", "", ""]);
      setPlayer("X"); 
      alert("VELHA!!!");return
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
        <h3>Jogador X<br></br><br></br>{x}</h3>
        <h3>Jogador O<br></br><br></br>{o}</h3>
      </div>
    </div>
  )
}