"use client";
//import { get } from "http";
import { testeFunction } from "./functions";

interface Usuario {
  //id: number;
  nome: string;
  codigo: string;
  descricao: string;
  preco: string;
}

export default function Button({ usuario }: { usuario: Usuario }) {
  const handleCreateItem = (usuario: Usuario) => {
    console.log("o usuario é " + usuario.nome);
    fetch("http://localhost:8800/", {
      method: "post",
      cache: "no-store",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(usuario),
    })
      .then(()=>{console.log("requisição de create enviada com sucesso")})
      .catch(()=>{console.log("erro ! requisição de create não enviada")});
    //let getTeste = testeFunction();
    //console.log(getTeste);
  };
  return (
    <>
      <button
        onClick={(e) => {
          e.preventDefault();
          handleCreateItem(usuario);
        }}
        className="px-4 py-2 bg-blue-500 text-white mr-2"
      >
        Adicionar
      </button>
    </>
  );
}
