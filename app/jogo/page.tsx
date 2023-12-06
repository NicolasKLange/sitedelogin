import { MdExposurePlus1 } from "react-icons/md";



export default function page() {
  return (  
    <div>
      <h1> - Jogo da Velha - </h1>
      <table>
        <tbody>
          <tr>
            <td>X</td>
            <td>X</td>
            <td>X</td>
          </tr>
          <tr>
            <td>X</td>
            <td>X</td>
            <td>X</td>
          </tr>
          <tr>
            <td>X</td>
            <td>X</td>
            <td>X</td>
          </tr>
        </tbody>
      </table>
        <div className="Jogadores">
            <div className="jogador1"> 
                <h2>Jogador 1</h2>
                    <div className="botaoJogador1"> 
                        <button>ola</button>
                    </div>
            </div>
                <button>
                    <a href="/"><MdExposurePlus1 /></a>
                </button>
            <div className="jogador2"> 
                <h2>Jogador 2</h2>
                    <div className="botaoJogador2"> 
                        <button>ola</button>
                    </div>
            </div>
        </div>
    </div>
    
  )
}