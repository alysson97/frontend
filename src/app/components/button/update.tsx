"use client";
import { testeFunction } from "./functions";


interface Usuario {
  id: number;
  nome: string;
  codigo: string;
  descricao: string;
  preco: string;
}

/* interface ButtonProps {
  usuario: Usuario;
  onClick: () => void;
} */

//export default function Button({usuario, onClick}: ButtonProps) {
  
export default function Button({usuario}: {usuario: Usuario}) {

  /*Criar um formulário que será exibido com os dados do campo selecionado no centro da tela*/

  const handleUpdateItem = (id:number)=>{
    fetch('http://localhost:8800/'+id,{
      method: 'put',
      cache: 'no-store',
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(usuario),
    })
      .then(()=>{console.log("requisição de update enviada com sucesso")})
      .catch(()=>{console.log("erro ! requisição de update não enviada")});
    //let getTeste = testeFunction();
    //console.log(getTeste);
  }
  return (
    <>
    
      <button
        onClick={
          (e) => {
          e.preventDefault();
          handleUpdateItem(usuario.id);
          }
        }
        className="px-2 py-1 bg-blue-500 hover:bg-blue-600 text-white mr-2 rounded"
      >
        <i className="fas fa-pencil-alt"></i>
        Editar
      </button>

    </>
  );
}
