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
        <div className="jogadores">
            <h2>Jogador 1</h2>
                <button><a href="/"><MdExposurePlus1 /></a></button>
            <h2>Jogador 2</h2>
        </div>
    </div>
    )
}