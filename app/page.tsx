"use client"
import Link from "next/link";
import './style.css'
import { useEffect } from 'react';


export default function Page() {
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.code === 'Space') {
        // Utilize a função push para redirecionar para a próxima página
        window.location.href =
          window.location.pathname === './jogo' ? './jogo' : './jogo';
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    // Limpar o evento ao desmontar o componente
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []); // Sem a dependência router

  function redirecionar() {
    window.location.href="./jogo"
  }

  return(
    <div onClick={redirecionar} className="page"> 
      <div className="titulo">
      <h1>Jogo da Velha</h1>
      <h2>Clique na barra de espaço para jogar</h2>
      </div>
    </div>
  )
}